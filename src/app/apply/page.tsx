'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false)

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="club-deck relative min-h-screen overflow-hidden text-[var(--text)]">
      <div className="club-deck-grid pointer-events-none absolute inset-0" />
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <header className="club-command-frame border border-[#f1c96a]/25 bg-[rgba(4,6,8,0.92)] p-7 sm:p-10">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Kurogami / Private Intake</p>
          <h1 className="mt-4 font-[var(--disp)] text-4xl font-semibold leading-[0.95] text-white sm:text-5xl">Qualification request</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">Private by design. This intake helps Kurogami understand where there is genuine alignment. Completion does not grant membership, allocation, or visibility into any opportunity.</p>
        </header>

        <form className="mt-6 border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.92)] p-6 sm:p-8" onSubmit={submitApplication}>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name"><input required name="name" type="text" className="intake-input" /></Field>
            <Field label="Email"><input required name="email" type="email" className="intake-input" /></Field>
            <Field label="Company, role, or operating context"><input required name="context" type="text" className="intake-input" /></Field>
            <Field label="Preferred contact"><input name="contact" type="text" placeholder="Phone, Signal, or Telegram" className="intake-input" /></Field>
            <Field label="Interested in Shadow Deal Desk?">
              <select required name="shadow-deal-interest" className="intake-input"><option value="">Select one</option><option>Yes</option><option>No</option></select>
            </Field>
            <Field label="Capital range comfort">
              <select name="capital-range" className="intake-input"><option value="">Prefer not to say</option><option>Under $50k</option><option>$50k - $250k</option><option>$250k - $1m</option><option>$1m+</option></select>
            </Field>
            <Field label="Experience with private or institutional deals" className="md:col-span-2">
              <textarea name="experience" rows={4} className="intake-input resize-y" />
            </Field>
            <Field label="What value can you bring to this desk?" className="md:col-span-2">
              <textarea required name="contribution" rows={5} className="intake-input resize-y" />
            </Field>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <p className="max-w-xl text-xs leading-6 text-white/50">Opportunities, when available, are private and selective. No allocation is guaranteed. Nothing here is an offer to sell securities.</p>
            <button type="submit" className="btn btn-primary">Submit Request</button>
          </div>
          {submitted && <p className="mt-5 border border-[#f1c96a]/35 bg-[#f1c96a]/10 px-4 py-3 text-sm leading-7 text-[#f6d98c]">Request received. The desk will follow up privately only where appropriate.</p>}
        </form>

        <Link href="/shadow-deal" className="mt-6 inline-block text-sm uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-[var(--gold)]">Return to Shadow Desk</Link>
      </section>
    </main>
  )
}

function Field({ label, className = '', children }: { label: string; className?: string; children: React.ReactNode }) {
  return <label className={`block ${className}`}><span className="text-xs uppercase tracking-[0.18em] text-white/70">{label}</span><div className="mt-2">{children}</div></label>
}