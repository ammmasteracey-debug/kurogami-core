import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const requiredFields = ['name', 'contact', 'asset', 'amount', 'txHash'] as const

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const values = Object.fromEntries(requiredFields.map((field) => [field, String(formData.get(field) ?? '').trim()]))

    if (requiredFields.some((field) => !values[field])) {
      return NextResponse.json({ error: 'Please complete all required payment proof fields.' }, { status: 400 })
    }

    const screenshot = formData.get('screenshot')
    if (screenshot instanceof File && screenshot.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Screenshot must be 5MB or smaller.' }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT ?? 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const recipient = process.env.CURRICULUM_RECIPIENT_EMAIL ?? 'ammmasteracey@gmail.com'

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('Curriculum proof email is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.')
      return NextResponse.json({ error: 'Proof submission is temporarily unavailable. Please contact the team directly.' }, { status: 503 })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const attachments = []
    if (screenshot instanceof File && screenshot.size > 0) {
      attachments.push({
        filename: screenshot.name || 'payment-proof.png',
        content: Buffer.from(await screenshot.arrayBuffer()),
        contentType: screenshot.type || 'application/octet-stream',
      })
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? smtpUser,
      to: recipient,
      subject: `Curriculum payment proof: ${values.asset} ${values.amount}`,
      text: [
        'New Kurogami Curriculum payment proof',
        '',
        `Name / IG: ${values.name}`,
        `Contact: ${values.contact}`,
        `Asset: ${values.asset}`,
        `Amount: ${values.amount}`,
        `Transaction hash: ${values.txHash}`,
        '',
        'Review the payment manually before granting Telegram access.',
      ].join('\n'),
      attachments,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Curriculum proof submission failed', error)
    return NextResponse.json({ error: 'Unable to send proof right now. Please try again.' }, { status: 500 })
  }
}
