'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { ArtifactVisual } from '../../components/engine/ArtifactVisual'
import DeskTermsConsent from '../../components/DeskTermsConsent'
import { EngineHeader } from '../../components/engine/EngineUI'
import { ARTIFACTS } from '../../data/artifacts'
import { DESK_TIERS } from '../../data/deskTiers'

export default function AccessPage() {
  const [tierId, setTierId] = useState<string>(DESK_TIERS[0].id)
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const tier = DESK_TIERS.find((option) => option.id === tierId) ?? DESK_TIERS[0]

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!agreed) return
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

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,16rem)]">
          <p className="max-w-xl text-base leading-8 text-white/70">
            Seats are limited by stage. Each request is reviewed against the current phase of the protocol.
          </p>
          <ArtifactVisual
            src={ARTIFACTS.accessPortal.src}
            alt="Access Portal artifact — an ornate portal marking entry to the protocol"
            caption={ARTIFACTS.accessPortal.caption}
            code={ARTIFACTS.accessPortal.code}
          />
        </div>

        {submitted ? (
          <article className="engine-panel mt-8 p-8 text-center sm:p-12">
            <p className="engine-kicker">{tier.name} · {tier.price}</p>
            <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Access unlocked</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/80">
              Access unlocked. Onboarding details will follow.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-white/45">
              Desk access is education and network access only — not investment advice, not managed trading, and no profits are guaranteed.
            </p>
          </article>
        ) : (
          <>
            <div className="mt-10">
              <p className="engine-kicker">Select Seat</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {DESK_TIERS.map((option) => {
                  const active = option.id === tierId
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setTierId(option.id)}
                      aria-pressed={active}
                      className={`flex flex-col gap-2 border p-5 text-left transition-colors ${active ? 'border-[var(--gold)]/55 bg-[var(--gold)]/[0.06]' : 'border-white/10 bg-white/[0.02] hover:border-[var(--gold)]/30'}`}
                    >
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--gold)]">{option.price}</span>
                      <span className="font-[var(--disp)] text-lg font-semibold text-white">{option.name}</span>
                      <span className="text-xs leading-6 text-white/60">{option.summary}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <form className="engine-panel mt-8 p-6 sm:p-9" onSubmit={submitRequest}>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <p className="engine-kicker">Selected Seat</p>
                <p className="font-[var(--disp)] text-lg text-white">
                  {tier.name} <span className="text-[var(--gold)]">{tier.price}</span>
                </p>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
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
              <div className="mt-6">
                <DeskTermsConsent checked={agreed} onChange={setAgreed} />
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <p className="max-w-xl text-xs leading-6 text-white/45">
                  Full payment is required before access. Access begins only after payment is confirmed. For direct intake, message{' '}
                  <a href="https://www.instagram.com/cryptoac3y?stkn=OXIzOXd2YmFybjgz&utm_source=qr" target="_blank" rel="noreferrer" className="underline hover:text-[var(--gold)]">Ac3y on Instagram</a>.
                </p>
                <button type="submit" disabled={!agreed} className="btn btn-gold disabled:cursor-not-allowed disabled:opacity-50">
                  Unlock Access
                </button>
              </div>
            </form>
          </>
        )}

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
