import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import os from 'os'
import path from 'path'

export const runtime = 'nodejs'

// Ephemeral JSON store: durable within a single serverless instance / local dev.
// Swap for a real database before relying on this across cold starts in production.
const STORE_PATH = path.join(os.tmpdir(), 'kurogami-intake-submissions.json')

const VERTICALS = [
  'Reserve / Gold',
  'Real Estate',
  'Watches',
  'Art & Collectibles',
  'Fashion / Inventory',
  'Mobility / Fleet',
  'Sports / NIL',
  'Other',
] as const

const requiredFields = ['ownerName', 'contact', 'vertical', 'assetName', 'documentation', 'ownershipRecords', 'declaredValue'] as const

type IntakeSubmission = {
  asset_id: string
  submittedAt: string
  status: string
  ownerName: string
  contact: string
  vertical: string
  assetName: string
  documentation: string
  ownershipRecords: string
  declaredValue: string
  currency: string
  notes: string
}

async function readStore(): Promise<IntakeSubmission[]> {
  try {
    const raw = await fs.readFile(STORE_PATH, 'utf8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function writeStore(records: IntakeSubmission[]) {
  await fs.writeFile(STORE_PATH, JSON.stringify(records, null, 2), 'utf8')
}

function generateAssetId() {
  const stamp = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `AST-${stamp}-${rand}`
}

function isAdminAuthorized(request: Request) {
  const token = process.env.INTAKE_ADMIN_TOKEN
  if (!token) return false
  return request.headers.get('authorization') === `Bearer ${token}`
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid submission payload.' }, { status: 400 })
    }

    const payload = body as Record<string, unknown>
    const values = Object.fromEntries(requiredFields.map((field) => [field, String(payload[field] ?? '').trim()]))

    if (requiredFields.some((field) => !values[field])) {
      return NextResponse.json({ error: 'Please complete all required intake fields.' }, { status: 400 })
    }

    if (!(VERTICALS as readonly string[]).includes(values.vertical)) {
      return NextResponse.json({ error: 'Select a valid asset vertical.' }, { status: 400 })
    }

    const declaredValueNumber = Number(values.declaredValue)
    if (!Number.isFinite(declaredValueNumber) || declaredValueNumber <= 0) {
      return NextResponse.json({ error: 'Declared value must be a positive number.' }, { status: 400 })
    }

    const record: IntakeSubmission = {
      asset_id: generateAssetId(),
      submittedAt: new Date().toISOString(),
      status: 'pending_verification',
      ownerName: values.ownerName,
      contact: values.contact,
      vertical: values.vertical,
      assetName: values.assetName,
      documentation: values.documentation,
      ownershipRecords: values.ownershipRecords,
      declaredValue: values.declaredValue,
      currency: String(payload.currency ?? 'USD').trim() || 'USD',
      notes: String(payload.notes ?? '').trim(),
    }

    const records = await readStore()
    records.push(record)
    await writeStore(records)

    return NextResponse.json({ ok: true, asset_id: record.asset_id, submittedAt: record.submittedAt })
  } catch (error) {
    console.error('Intake submission failed', error)
    return NextResponse.json({ error: 'Unable to submit intake right now. Please try again.' }, { status: 500 })
  }
}

// Admin-readable store: GET requires Authorization: Bearer <INTAKE_ADMIN_TOKEN>.
export async function GET(request: Request) {
  if (!isAdminAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const records = await readStore()
  return NextResponse.json({ count: records.length, records })
}
