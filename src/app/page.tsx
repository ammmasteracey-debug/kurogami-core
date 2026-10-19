'use client'

import Link from 'next/link'

const stack = [
  ['01', 'Desk OS', 'Capture decisions and workflows at the desk.'],
  ['02', 'Field OS', 'Track work and judgment in real operating environments.'],
  ['03', 'Train', 'Structure process into a repeatable training signal.'],
  ['04', 'Clone to Agent', 'Extend an operator’s process through an agent.'],
  ['05', 'Forge', 'Evaluate and bring process-trained agents to market.'],
]

const compoundingFactors = [
  ['Shared process data', 'A broader record of how real work is done.'],
  ['Shared intelligence', 'Learning and context compound across operators.'],
  ['Shared capital access', 'Operators can reach aligned resources to extend their work.'],
]

function AccessButton({ children = 'Request access' }: { children?: React.ReactNode }) {
  return (
    <Link href="/access#desk-process" className="investor-button investor-button-gold">
      {children}
    </Link>
  )
}

export default function HomePage() {
  return (
    <main className="investor-page">
      <section className="investor-hero" aria-labelledby="hero-title">
        <div className="investor-container investor-hero-grid">
          <div className="investor-hero-heading">
            <p className="investor-eyebrow">KUROGAMI / PROCESS INFRASTRUCTURE</p>
            <h1 id="hero-title">
              <span>In a world that is becoming permanently more alien,</span>
              <span>the highest leverage is systematic capture of elite human process.</span>
            </h1>
            <p className="investor-hero-subhead">
              Operators are the underlying asset. AI is the extension. The Forge is the market.
            </p>
            <p className="investor-hero-intro">
              Kurogami turns high-quality human process into an asset class — tracked, trained, cloned into agents, and made liquid. The goal is simple: stay ahead of the curve by design, maintain sovereignty over skill, and compound real capability.
            </p>
            <div className="investor-actions">
              <AccessButton />
              <Link href="/access#desk-process" className="investor-button investor-button-quiet">Enter the desk <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-section investor-problem" id="system" aria-labelledby="system-title">
        <div className="investor-container investor-split">
          <div className="investor-section-heading">
            <p className="investor-eyebrow">01 / What Kurogami is</p>
            <h2 id="system-title">A process capture system. Not a tool wrapper.</h2>
          </div>
          <div className="investor-problem-copy">
            <p>Tools execute instructions. Kurogami records the decisions, sequences, and standards behind skilled work.</p>
            <p>Desk OS and Field OS track real process. That process can be trained, extended through AI, and carried into the Forge.</p>
            <div className="investor-callout">
              <span>OPERATING PRINCIPLE</span>
              The operator is the source. The agent is an extension.
            </div>
          </div>
        </div>
      </section>

      <section className="investor-section investor-system-section" id="stack" aria-labelledby="stack-title">
        <div className="investor-container">
          <div className="investor-section-intro">
            <div>
              <p className="investor-eyebrow">02 / The stack</p>
              <h2 id="stack-title">Track. Train. Extend. Exchange.</h2>
            </div>
            <p>One operating sequence turns real work into process-trained intelligence.</p>
          </div>
          <div className="investor-pillars investor-stack-pillars">
            {stack.map(([index, title, body], position) => (
              <article className="investor-pillar" key={index}>
                <div className="investor-pillar-top"><span>{index}</span><span>{position < 2 ? 'Capture' : position === 2 ? 'Train' : position === 3 ? 'Extend' : 'Market'}</span></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <p className="investor-stack-sequence">Desk OS / Field OS <span>→</span> Train <span>→</span> Clone to Agent <span>→</span> Forge</p>
        </div>
      </section>

      <section className="investor-section investor-operators-section" id="operators" aria-labelledby="operators-title">
        <div className="investor-container investor-split">
          <div className="investor-section-heading">
            <p className="investor-eyebrow">03 / Operator advantage</p>
            <h2 id="operators-title">Operators are the underlying asset.</h2>
            <p>AI extends their capability. It does not replace the source of the process.</p>
          </div>
          <div>
            <p className="investor-compound-lead">A group of operators compounds through shared infrastructure.</p>
            <div className="investor-compound-list">
              {compoundingFactors.map(([title, body], index) => (
                <article className="investor-compound-item" key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="investor-section investor-briefos-section" id="briefos" aria-labelledby="briefos-title">
        <div className="investor-container investor-briefos-grid">
          <div>
            <p className="investor-eyebrow">04 / Public intelligence</p>
            <h2 id="briefos-title">BriefOS</h2>
          </div>
          <div>
            <p className="investor-bigger-lead">The public intelligence layer of Kurogami.</p>
            <p className="investor-briefos-copy">
              BriefOS makes selected analysis and operating context legible outside the desk: concise intelligence for a world changing faster than inherited playbooks can follow.
            </p>
          </div>
        </div>
      </section>

      <section className="investor-closing" id="access" aria-labelledby="closing-title">
        <div className="investor-container investor-closing-inner">
          <p className="investor-eyebrow"><span className="investor-status-dot" /> Kurogami / Operator infrastructure</p>
          <h2 id="closing-title">Stay ahead of the curve <em>by design.</em></h2>
          <p>Maintain sovereignty over skill. Capture real process. Compound real capability.</p>
          <div className="investor-actions">
            <AccessButton />
            <Link href="/access#desk-process" className="investor-button investor-button-quiet">Enter the desk <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
