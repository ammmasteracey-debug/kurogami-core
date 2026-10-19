'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import DeskTermsConsent from '../../components/DeskTermsConsent'
import { DESK_TIERS } from '../../data/deskTiers'

const deskPrinciples = [
  {
    index: '01',
    title: 'Operator network + infrastructure',
    body: 'You are entering an operator network built around process capture infrastructure. Operators are the source; the system preserves and extends how they work.',
  },
  {
    index: '02',
    title: 'Real work, tracked',
    body: 'Desk OS tracks the decisions, sequences, and standards behind real work—not just the outcomes.',
  },
  {
    index: '03',
    title: 'Process-trained agents',
    body: 'Captured process is structured, trained, and evaluated. Agents extend operator capability from a record of actual work.',
  },
  {
    index: '04',
    title: 'The Forge',
    body: 'The Forge makes process quality legible and useful: evaluated intelligence can be matched to demand and turned into leverage.',
  },
  {
    index: '05',
    title: 'Operating standard',
    body: 'Participation requires consistency, clear standards, and ownership of the work. There is no passive seat in the process.',
  },
]

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
    <main className="investor-page access-page">
      <section className="access-hero">
        <div className="investor-container">
          <header className="access-intro">
            <p className="investor-eyebrow">KUROGAMI / OPERATOR INTAKE</p>
            <h1 className="access-title">
              This is not a community. This is not a course. This is a process capture system for people who refuse to be passengers.
            </h1>
            <div className="investor-actions">
              <a href="#desk-process" className="investor-button investor-button-gold">Request access</a>
              <a href="#desk-process" className="investor-button investor-button-quiet">Begin desk process <span aria-hidden="true">↓</span></a>
            </div>
          </header>
        </div>
      </section>

      <section className="access-principles" aria-label="Desk process principles">
        <div className="investor-container">
          <div className="access-principles-list">
            {deskPrinciples.map(({ index, title, body }) => (
              <article key={index} className="access-principle">
                <span className="access-principle-index">{index}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="desk-process" className="access-form-section">
        <div className="investor-container">
          {submitted ? (
            <article className="access-form access-submitted">
              <p className="investor-eyebrow">{tier.name} · {tier.price}</p>
              <h2>Request noted</h2>
              <p>
                For direct follow-up, contact the desk through Instagram.
              </p>
              <a href="https://www.instagram.com/ac3yway" target="_blank" rel="noreferrer" className="investor-button investor-button-gold">Contact the desk</a>
              <p className="access-disclaimer">
                Desk access is education and network access only — not investment advice, not managed trading, and no profits are guaranteed.
              </p>
            </article>
          ) : (
            <>
              <header className="access-form-heading">
                <p className="investor-eyebrow">BEGIN DESK PROCESS / SELECT ACCESS LEVEL</p>
                <h2>Request access</h2>
                <p>Requests are assessed for role, operating context, and consistency with the desk standard.</p>
              </header>
              <div className="access-tier-grid">
                {DESK_TIERS.map((option, index) => {
                  const active = option.id === tierId
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setTierId(option.id)}
                      aria-pressed={active}
                      className={`access-tier ${active ? 'is-active' : ''}`}
                    >
                      <span className="access-tier-index">{String(index + 1).padStart(2, '0')} / {option.price}</span>
                      <span className="access-tier-title">{option.name}</span>
                      <span className="access-tier-summary">{option.summary}</span>
                    </button>
                  )
                })}
              </div>

              <form className="access-form" onSubmit={submitRequest}>
                <div className="access-form-selected">
                  <p className="investor-eyebrow">Selected access level</p>
                  <p>{tier.name} <span>{tier.price}</span></p>
                </div>
                <div className="access-fields">
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
                  <Field label="Process and operating context" className="md:col-span-2">
                    <textarea name="message" rows={5} className="intake-input resize-y" />
                  </Field>
                </div>
                <div className="mt-6">
                  <DeskTermsConsent checked={agreed} onChange={setAgreed} />
                </div>
                <div className="access-form-submit">
                  <p>
                    Full payment is required before access. Access begins only after payment is confirmed. For direct intake, message{' '}
                    <a href="https://www.instagram.com/ac3yway" target="_blank" rel="noreferrer">Ac3y on Instagram</a>.
                  </p>
                  <button type="submit" disabled={!agreed} className="investor-button investor-button-gold disabled:cursor-not-allowed disabled:opacity-50">
                    Request access
                  </button>
                </div>
              </form>
            </>
          )}
          <Link href="/" className="access-return">Return to overview <span aria-hidden="true">↑</span></Link>
        </div>
      </section>
    </main>
  )
}

function Field({ label, className = '', children }: { label: string; className?: string; children: React.ReactNode }) {
  return <label className={`block ${className}`}><span className="text-xs uppercase tracking-[0.18em] text-white/70">{label}</span><div className="mt-2">{children}</div></label>
}
