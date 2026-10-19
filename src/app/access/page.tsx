'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
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
  const [paymentError, setPaymentError] = useState<string | null>(null)

  const tier = DESK_TIERS.find((option) => option.id === tierId) ?? DESK_TIERS[0]

  useEffect(() => {
    const requestedTierId = new URLSearchParams(window.location.search).get('tier')
    if (requestedTierId && DESK_TIERS.some((option) => option.id === requestedTierId)) {
      setTierId(requestedTierId)
    }
  }, [])

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!agreed) return
    const link = tier.paymentLink?.trim()
    if (!link) {
      setPaymentError('This access tier is not live yet. Add the Stripe Payment Link for this tier before enabling checkout.')
      return
    }
    setPaymentError(null)
    window.location.assign(link)
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
          <header className="access-form-heading">
            <p className="investor-eyebrow">BEGIN DESK PROCESS / SELECT ACCESS LEVEL</p>
            <h2>Request Access</h2>
            <p>
              Kurogami is process infrastructure for operators.
              <br />
              Access includes Desk tools, operator resources, and BriefOS intelligence.
              <br />
              This is not a community and not a course.
            </p>
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
            {paymentError && (
              <p className="access-payment-error">{paymentError}</p>
            )}
            <div className="mt-6">
              <DeskTermsConsent checked={agreed} onChange={setAgreed} />
            </div>
            <div className="access-form-submit">
              <div className="access-checkout-action">
                <button type="submit" disabled={!agreed || !tier.paymentLink} className="investor-button investor-button-gold disabled:cursor-not-allowed disabled:opacity-50">
                  {tier.id === 'desk-access' ? 'Get Operator Access' : tier.paymentLink ? 'Continue to Stripe' : 'Payment link pending'}
                </button>
                <p>Secure checkout via Stripe. Access instructions sent after payment.</p>
              </div>
            </div>
          </form>
          <Link href="/" className="access-return">Return to overview <span aria-hidden="true">↑</span></Link>
        </div>
      </section>
    </main>
  )
}
