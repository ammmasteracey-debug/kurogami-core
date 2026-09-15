'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { EngineHeader } from '../../components/engine/EngineUI'

const VERTICALS = [
  'Reserve / Gold',
  'Real Estate',
  'Watches',
  'Art & Collectibles',
  'Fashion / Inventory',
  'Mobility / Fleet',
  'Sports / NIL',
  'Other',
]

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export default function IntakePage() {
  const [state, setState] = useState<SubmitState>('idle')
  const [assetId, setAssetId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('submitting')
    setError(null)

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const payload = await response.json()
      if (!response.ok) {
        throw new Error(payload.error ?? 'Unable to submit intake right now.')
      }
      setAssetId(payload.asset_id)
      setState('success')
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit intake right now.')
      setState('error')
    }
  }

  function copyAssetId() {
    if (!assetId) return
    navigator.clipboard.writeText(assetId)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  function submitAnother() {
    setState('idle')
    setAssetId(null)
    setError(null)
  }

  if (state === 'success' && assetId) {
    return (
      <main className="engine-shell relative overflow-hidden text-[var(--text-1)]">
        <section className="relative z-10 mx-auto max-w-3xl px-6 py-20 sm:px-8 lg:px-10">
          <article className="engine-panel p-8 text-center sm:p-12">
            <p className="engine-kicker">Intake received</p>
            <h1 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Asset record created</h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/75">
              Your asset is queued for verification. Reference this asset ID in any follow-up with the Kurogami team.
            </p>
            <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-black/30 px-5 py-3 font-mono text-lg text-[var(--gold-2)]">
              {assetId}
              <button type="button" onClick={copyAssetId} className="btn btn-gold-outline !px-3 !py-1.5 text-xs">
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/tokenization-engine" className="btn btn-gold-outline">View Tokenization Engine</Link>
              <button type="button" onClick={submitAnother} className="btn btn-gold">Submit Another Asset</button>
            </div>
          </article>
        </section>
      </main>
    )
  }

  return (
    <main className="engine-shell relative overflow-hidden text-[var(--text-1)]">
      <section className="relative z-10 mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:px-10">
        <EngineHeader
          kicker="Kurogami / Tokenization Engine \u00b7 Stage 1"
          title="Asset Intake"
          subtitle="Submit an asset for structuring: documentation, ownership records, and declared value."
        />

        <form className="engine-panel mt-8 p-6 sm:p-9" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Owner name"><input required name="ownerName" type="text" className="intake-input" /></Field>
            <Field label="Contact (email, Telegram, or X)"><input required name="contact" type="text" className="intake-input" /></Field>
            <Field label="Asset vertical">
              <select required name="vertical" defaultValue="" className="intake-input">
                <option value="" disabled>Select one</option>
                {VERTICALS.map((vertical) => <option key={vertical}>{vertical}</option>)}
              </select>
            </Field>
            <Field label="Asset name"><input required name="assetName" type="text" placeholder="e.g. 2019 Patek Philippe Nautilus" className="intake-input" /></Field>
            <Field label="Documentation on hand" className="md:col-span-2">
              <textarea required name="documentation" rows={3} placeholder="Title, deed, certificate of authenticity, appraisal, invoices..." className="intake-input resize-y" />
            </Field>
            <Field label="Ownership records" className="md:col-span-2">
              <textarea required name="ownershipRecords" rows={3} placeholder="Chain of custody, registration numbers, prior sale records..." className="intake-input resize-y" />
            </Field>
            <Field label="Declared value"><input required name="declaredValue" type="number" min="0" step="0.01" className="intake-input" /></Field>
            <Field label="Currency"><input name="currency" type="text" defaultValue="USD" className="intake-input" /></Field>
            <Field label="Notes" className="md:col-span-2"><textarea name="notes" rows={3} className="intake-input resize-y" /></Field>
          </div>

          {error && (
            <p className="mt-5 border border-red-400/35 bg-red-400/10 px-4 py-3 text-sm leading-7 text-red-300">{error}</p>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
            <button type="submit" disabled={state === 'submitting'} className="btn btn-gold disabled:cursor-not-allowed disabled:opacity-60">
              {state === 'submitting' ? 'Submitting…' : 'Submit Intake'}
            </button>
            <p className="max-w-md text-xs leading-6 text-white/45">
              Submitting queues your asset for verification. You&rsquo;ll receive an asset ID to reference immediately.
            </p>
          </div>
        </form>

        <Link href="/tokenization-engine" className="mt-6 inline-block text-sm uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-[var(--gold)]">
          Back to Tokenization Engine
        </Link>
      </section>
    </main>
  )
}

function Field({ label, className = '', children }: { label: string; className?: string; children: React.ReactNode }) {
  return <label className={`block ${className}`}><span className="text-xs uppercase tracking-[0.18em] text-white/70">{label}</span><div className="mt-2">{children}</div></label>
}
