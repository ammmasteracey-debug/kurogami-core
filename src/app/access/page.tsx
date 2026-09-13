'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { EngineHeader } from '../../components/engine/EngineUI'

export default function AccessPage() {
  const [submitted, setSubmitted] = useState(false)

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="engine-shell relative overflow-hidden text-[var(--text-1)]">
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <EngineHeader
          kicker="Kurogami / Request Access"
          title="Request Access"
          subtitle="Kurogami is rolling out by stages. Early access prioritizes operators, originators, and capital partners who understand the loop."
        />

        <form className="engine-panel mt-8 p-6 sm:p-9" onSubmit={submitRequest}>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name"><input required name="name" type="text" className="intake-input" /></Field>
            <Field label="Email / Telegram / X"><input required name="contact" type="text" className="intake-input" /></Field>
            <Field label="Role">
              <select required name="role" className="intake-input">
                <option value="">Select one</option>
                <option>Trader</option>
                <option>Originator</option>
                <option>Capital partner</option>
                <option>Builder</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Vertical or use case"><input name="vertical" type="text" placeholder="Reserve, real estate, watches, art..." className="intake-input" /></Field>
            <Field label="Message" className="md:col-span-2">
              <textarea name="message" rows={5} className="intake-input resize-y" />
            </Field>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <p className="max-w-xl text-xs leading-6 text-white/45">
              Access is controlled and reviewed individually. Submitting this form does not guarantee access, allocation, or any specific outcome.
            </p>
            <button type="submit" className="btn btn-gold">Submit Request</button>
          </div>
          {submitted && (
            <p className="mt-5 border border-[var(--gold)]/35 bg-[var(--gold)]/10 px-4 py-3 text-sm leading-7 text-[var(--gold-2)]">
              Request received. The team reviews access requests in the order they align with the current stage.
            </p>
          )}
        </form>

        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/35">
          Kurogami is the infrastructure layer. Culture and community live separately at{' '}
          <a href="https://gami-boyz.vercel.app/" target="_blank" rel="noreferrer" className="underline hover:text-[var(--gold)]">Gami Boyz</a>.
        </p>

        <Link href="/" className="mt-4 inline-block text-sm uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-[var(--gold)]">Return to Overview</Link>
      </section>
    </main>
  )
}

function Field({ label, className = '', children }: { label: string; className?: string; children: React.ReactNode }) {
  return <label className={`block ${className}`}><span className="text-xs uppercase tracking-[0.18em] text-white/70">{label}</span><div className="mt-2">{children}</div></label>
}
