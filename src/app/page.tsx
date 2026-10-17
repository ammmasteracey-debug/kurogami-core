'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const pillars = [
  {
    index: '01',
    title: 'Desk OS',
    label: 'Capture',
    body: 'The working environment where skilled operators record real decisions and the process behind them.',
  },
  {
    index: '02',
    title: 'Process Logger & Crawler',
    label: 'Structure',
    body: 'Decision traces are captured at the source, organized, and made useful for training and evaluation.',
  },
  {
    index: '03',
    title: 'ForgeOS',
    label: 'Train',
    body: 'The operating system for training, evaluating, and running agents against real process.',
  },
  {
    index: '04',
    title: 'Forge Index',
    label: 'Price',
    body: 'A marketplace and rating system where agents are scored, valued, and made available to operators.',
  },
  {
    index: '05',
    title: 'RWA Intelligence Layer',
    label: 'Connect',
    body: 'Real-world asset infrastructure connected to the same process, agent, and intelligence system.',
  },
]

const steps = [
  'Skilled humans work inside Desk OS across trading, creative, and technical disciplines.',
  'Their decision process is logged and structured into clear decision traces.',
  'Agents are trained on that process and evaluated against its quality.',
  'Agents are listed, scored, and made available through the Forge Index.',
  'Operators and capital can rent, own, or improve those agents.',
  'Data compounds. Process quality becomes visible and valuable.',
]

const components = [
  ['Desk OS', 'Live process capture'],
  ['ForgeOS', 'Agent operating system'],
  ['Forge Index', 'Agent marketplace and scoring'],
  ['RWA Intelligence', 'Real-world asset infrastructure'],
  ['Creative Track', 'Process-trained creative agents'],
  ['Intelligence Surface', 'Research and operator briefs'],
]

const differences = [
  'Not a single-token bet',
  'Not a generic AI agent wrapper',
  'Not a pure NFT collection',
  'Agents carry decision traces, not just outcomes',
  'The Forge Index prices process quality, not just returns',
]

function AccessButton({ children = 'Request Access' }: { children?: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent('kurogami-open-access'))}
      className="investor-button investor-button-gold"
    >
      {children}
    </button>
  )
}

export default function HomePage() {
  const router = useRouter()
  const [loadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    const hasSeenLoading = document.cookie
      .split(';')
      .some((part) => part.trim().startsWith('kurogami_shown_loading=1'))

    if (hasSeenLoading) {
      setLoadingComplete(true)
      return
    }

    router.replace('/loading?to=/')
  }, [router])

  if (!loadingComplete) {
    return <main className="investor-page min-h-[70vh]" aria-busy="true" />
  }

  return (
    <main className="investor-page">
      <section className="investor-hero" aria-labelledby="hero-title">
        <div className="investor-container investor-hero-grid">
          <div className="investor-hero-copy">
            <p className="investor-eyebrow"><span className="investor-status-dot" /> Finance · AI · Data</p>
            <h1 id="hero-title">Process-trained agents as a <em>new asset class.</em></h1>
            <p className="investor-hero-intro">
              We capture how skilled humans actually work, then turn that process into agents that can be owned, rented, and improved.
            </p>
            <div className="investor-actions">
              <AccessButton />
              <a href="#system" className="investor-button investor-button-quiet">View the system <span aria-hidden="true">↓</span></a>
            </div>
            <p className="investor-hero-note">Infrastructure for process-trained intelligence.</p>
          </div>

          <div className="investor-system-card" aria-label="Process intelligence system overview">
            <div className="investor-system-card-head">
              <span>KUROGAMI / SYSTEM 01</span>
              <span>PROCESS → INTELLIGENCE</span>
            </div>
            <div className="investor-system-flow">
              {[
                ['01', 'Human process', 'Decision traces'],
                ['02', 'Trained agents', 'Measured quality'],
                ['03', 'Forge Index', 'Priced intelligence'],
              ].map(([number, title, detail]) => (
                <div className="investor-system-node" key={number}>
                  <span className="investor-system-index">{number}</span>
                  <div>
                    <p>{title}</p>
                    <span>{detail}</span>
                  </div>
                  <span className="investor-node-mark" aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
            <div className="investor-system-card-foot">
              <span>THE PROCESS PREMIUM</span>
              <span>OWNABLE · RENTABLE · IMPROVABLE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-section investor-problem" aria-labelledby="problem-title">
        <div className="investor-container investor-split">
          <div className="investor-section-heading">
            <p className="investor-eyebrow">01 / The problem</p>
            <h2 id="problem-title">An agent without process is still a black box.</h2>
          </div>
          <div className="investor-problem-copy">
            <p>Most AI agents are generic wrappers. They have no real process, no decision trace, and no measurable quality of reasoning.</p>
            <p>Capital and operators are left with black-box performance and no way to improve the underlying intelligence.</p>
            <div className="investor-callout"><span>THE GAP</span> Outcomes are visible. The process that produced them is not.</div>
          </div>
        </div>
      </section>

      <section className="investor-section investor-system-section" id="system" aria-labelledby="system-title">
        <div className="investor-container">
          <div className="investor-section-intro">
            <div>
              <p className="investor-eyebrow">02 / The Kurogami answer</p>
              <h2 id="system-title">The full stack for process-trained intelligence.</h2>
            </div>
            <p>One connected system turns skilled human work into measurable, ownable intelligence.</p>
          </div>
          <div className="investor-pillars">
            {pillars.map((pillar) => (
              <article className="investor-pillar" key={pillar.index}>
                <div className="investor-pillar-top"><span>{pillar.index}</span><span>{pillar.label}</span></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="investor-section investor-flow-section" aria-labelledby="flow-title">
        <div className="investor-container investor-split">
          <div className="investor-section-heading investor-flow-heading">
            <p className="investor-eyebrow">03 / How it works</p>
            <h2 id="flow-title">From human judgment to compounding intelligence.</h2>
            <p>Process is captured at the source, then carried through training, evaluation, and use.</p>
          </div>
          <ol className="investor-steps">
            {steps.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="investor-section investor-difference" aria-labelledby="difference-title">
        <div className="investor-container investor-difference-grid">
          <div className="investor-section-heading">
            <p className="investor-eyebrow">04 / Why this is different</p>
            <h2 id="difference-title">A process premium, not another wrapper.</h2>
          </div>
          <ul className="investor-difference-list">
            {differences.map((difference, index) => (
              <li key={difference}>
                <span>{index < 3 ? '—' : '↗'}</span>
                <p>{difference}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="investor-section investor-components" id="intelligence" aria-labelledby="components-title">
        <div className="investor-container">
          <div className="investor-section-intro">
            <div>
              <p className="investor-eyebrow">05 / Current system components</p>
              <h2 id="components-title">A system taking shape in the open.</h2>
            </div>
            <p>Early infrastructure, built around process capture and the intelligence it makes possible.</p>
          </div>
          <div className="investor-component-grid">
            {components.map(([name, description], index) => (
              <article key={name} className="investor-component">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="investor-section investor-audience-section">
        <div className="investor-container investor-audience-grid">
          <article className="investor-audience-card" id="operators">
            <p className="investor-eyebrow">06 / For operators</p>
            <h2>Make your process legible. Make it work harder.</h2>
            <ul>
              <li>Train agents on your actual process</li>
              <li>Build measurable, improvable intelligence</li>
              <li>Earn through agent performance and rentals</li>
              <li>Access higher-quality tools and data</li>
            </ul>
          </article>
          <article className="investor-audience-card" id="capital">
            <p className="investor-eyebrow">07 / For capital</p>
            <h2>Exposure to the infrastructure behind a new asset class.</h2>
            <p className="investor-card-lead">Process-trained intelligence across:</p>
            <ul>
              <li>Trading and creative agents</li>
              <li>The Forge Index marketplace</li>
              <li>Real-world asset infrastructure</li>
              <li>A compounding data advantage</li>
            </ul>
            <div className="investor-tiers" aria-label="Partnership tiers">
              <span>Operator Seat</span><span>Core Partner</span><span>Sovereign Anchor</span>
            </div>
          </article>
        </div>
      </section>

      <section className="investor-section investor-bigger-picture" aria-labelledby="picture-title">
        <div className="investor-container investor-bigger-grid">
          <div>
            <p className="investor-eyebrow">08 / The bigger picture</p>
            <h2 id="picture-title">Human process is the missing layer.</h2>
          </div>
          <div>
            <p className="investor-bigger-lead">We are building the layer that turns human process into ownable, rentable, improvable intelligence.</p>
            <div className="investor-stack">
              <span>Applications</span><i aria-hidden="true" />
              <strong>Process-trained intelligence</strong><i aria-hidden="true" />
              <span>Raw models</span>
            </div>
            <p className="investor-bigger-note">Underneath applications. Above raw models. Infrastructure most people will eventually need.</p>
          </div>
        </div>
      </section>

      <section className="investor-closing" id="access" aria-labelledby="closing-title">
        <div className="investor-container investor-closing-inner">
          <p className="investor-eyebrow"><span className="investor-status-dot" /> Early infrastructure. Real process.</p>
          <h2 id="closing-title">The system is live.<br /><em>The process is being captured.</em></h2>
          <p>For operators building with process, and capital aligned with what it can become.</p>
          <div className="investor-actions">
            <AccessButton />
            <a href="#system" className="investor-button investor-button-quiet">View the system <span aria-hidden="true">↑</span></a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('kurogami-open-access'))}
              className="investor-button investor-button-quiet"
            >
              Contact
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
