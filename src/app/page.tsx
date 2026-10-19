'use client'

import Link from 'next/link'
import { DESK_TIERS } from '../data/deskTiers'

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

const networkBottlenecks = [
  ['Product is weak or hard to explain', 'Clear process infrastructure people can actually use.'],
  ['Endless recruiting pressure', 'Access is the product. Recruiting is optional leverage.'],
  ['Complicated comp plans', 'Simple, transparent tiers tied to real access sold.'],
  ['High churn or refunds', 'Education, tools, and standards reduce empty joins.'],
  ['Build a team or make nothing', 'Individual operators still get full value from their own seat.'],
  ['Events feel like pitches', 'Events are operator culture and real work, not hype rooms.'],
  ['Income claims are vague', 'Scenarios are grounded in published access prices and labeled illustrative.'],
]

const networkSteps = [
  ['01', 'Personal Access', 'You join a tier. You get the tools and process.'],
  ['02', 'Introduction', 'You share Kurogami with people in your network.'],
  ['03', 'Team Structure', 'When people you introduce join—and when their introductions join—you may earn under the applicable compensation plan.'],
]

const networkScenarios = [
  {
    label: 'Scenario A / Personal only',
    title: 'One seat. No team.',
    body: 'You take Operator Access (Desk) at $1,500 and use the tools and process. The value is your own access and capability; no team is required.',
  },
  {
    label: 'Scenario B / Small intentional network',
    title: 'Four direct introductions.',
    body: 'Four people take Operator Seat at $5,000 each. At an illustrative 20% direct share, the example is 4 × $1,000 = $4,000. This is hypothetical, not a promised or finalized payout. Your own seat remains independently valuable.',
  },
  {
    label: 'Scenario C / Active builder',
    title: 'Direct and second-level activity.',
    body: 'You introduce six Operator Seats at $5,000 each; each introduces two Desk Access seats at $1,500. Any direct and second-level payout depends on the final written compensation plan. These access purchases are not a guarantee of income.',
  },
  {
    label: 'Scenario D / Event-led',
    title: 'Host the work in public.',
    body: 'You host or co-host Kurogami / Gami nights. Attendees experience the culture and desk standard, then may request $1,500 Operator Access, a $5,000 Operator Seat, or a $15,000 / $25,000 Capital Partner Seat through your link. Any host allocation and direct share are subject to the final plan.',
  },
]

const compensationPrinciples = [
  'Direct introductions earn a defined share of the access fee.',
  'Second-level activity earns a smaller residual share.',
  'Verified event hosts can earn additional host allocation.',
  'Your own seat value does not depend on recruiting.',
]

const briefSeries = [
  ['Brief 01', 'Models Have Crossed the Threshold', 'The cost curve and model capability shift the bottleneck from raw intelligence to directed process.'],
  ['Brief 02', 'Biology Is Becoming Digital', 'Discovery cycles compress when human judgment is structured, trained, and applied to the right targets.'],
  ['Brief 03', 'The Body Is Coming Online', 'Interface shifts move the premium toward clarified intention and operational process quality.'],
  ['Brief 04', 'Physical Agents Are Being Built for Learning', 'Dexterity is being trained in simulation and transferred to hardware at the task level.'],
  ['Brief 05', 'Discovery Itself Is Accelerating', 'The world is no longer moving linearly; the only durable response is process infrastructure.'],
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

      <section className="investor-section investor-network-section" id="network" aria-labelledby="network-title">
        <div className="investor-container">
          <header className="investor-network-hero">
            <p className="investor-eyebrow">NETWORK / OPERATOR DISTRIBUTION</p>
            <h2 id="network-title">Share the process. Build a team. Earn from real access.</h2>
            <p>Kurogami includes a structured network layer so operators can introduce others, host, and earn without the usual network marketing problems.</p>
          </header>

          <div className="investor-network-block">
            <h3>Most network marketing breaks in the same places.</h3>
            <div className="investor-network-contrast" role="list">
              {networkBottlenecks.map(([problem, approach]) => (
                <article className="investor-network-contrast-row" key={problem} role="listitem">
                  <p>{problem}</p>
                  <span aria-hidden="true">→</span>
                  <p>{approach}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="investor-network-block">
            <div className="investor-network-heading">
              <p className="investor-eyebrow">HOW IT WORKS</p>
              <h3>Three ways value moves</h3>
            </div>
            <div className="investor-network-steps">
              {networkSteps.map(([index, title, body]) => (
                <article className="investor-network-step" key={index}>
                  <span>{index}</span>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <p className="investor-network-standalone">No one is required to build a team to get value from their own seat.</p>
          </div>

          <div className="investor-network-block investor-network-comp">
            <div className="investor-network-heading">
              <p className="investor-eyebrow">COMP OVERVIEW</p>
              <h3>Structure before percentages.</h3>
            </div>
            <ul>
              {compensationPrinciples.map((principle) => <li key={principle}>{principle}</li>)}
            </ul>
            <p className="investor-network-caveat">Exact rates, eligibility, and payment terms are subject to a finalized written compensation plan. No payout or income is guaranteed.</p>
          </div>

          <div className="investor-network-block">
            <div className="investor-network-heading">
              <p className="investor-eyebrow">ILLUSTRATIVE SCENARIOS</p>
              <h3>Access first. Distribution second.</h3>
            </div>
            <div className="investor-network-scenarios">
              {networkScenarios.map(({ label, title, body }) => (
                <article className="investor-network-scenario" key={label}>
                  <span>{label}</span>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="investor-network-events">
            <p className="investor-eyebrow">EVENTS / DISTRIBUTION</p>
            <p>Events are not pitch fests. They are operator culture in public: desk standard, process, BriefOS context, and real work. People who resonate request access. That is the distribution.</p>
          </div>
          <p className="investor-network-closing">The network layer is leverage on real process infrastructure, not a replacement for it.</p>
        </div>
      </section>

      <section className="investor-section investor-agentic-section" id="agentic-network" aria-labelledby="agentic-network-title">
        <div className="investor-container">
          <header className="investor-agentic-hero">
            <p className="investor-eyebrow">NETWORK / AGENTIC DISTRIBUTION</p>
            <h2 id="agentic-network-title">Your downline is changing.</h2>
            <p>In the agentic era, scale no longer depends only on how many humans you can manage. It depends on whether you own the process that trains agents — agents that can distribute, follow up, trade, and carry a brand.</p>
          </header>

          <div className="investor-agentic-shift">
            <article>
              <p className="investor-eyebrow">OLD MODEL</p>
              <ul>
                <li>Human recruits human.</li>
                <li>You train people.</li>
                <li>You manage people.</li>
                <li>Income is mostly limited by human time and consistency.</li>
              </ul>
            </article>
            <article>
              <p className="investor-eyebrow">NEW MODEL</p>
              <ul>
                <li>Operator captures process.</li>
                <li>Process trains agents.</li>
                <li>Agents extend distribution, execution, and brand.</li>
                <li>Humans still introduce and oversee. Agents handle scale.</li>
              </ul>
            </article>
          </div>

          <div className="investor-agentic-block">
            <div className="investor-network-heading">
              <p className="investor-eyebrow">WHAT KUROGAMI PROVIDES</p>
              <h3>Process infrastructure for agentic distribution.</h3>
            </div>
            <div className="investor-agentic-provisions">
              <article>
                <span>01 / PROCESS CAPTURE</span>
                <h4>Desk OS and Field OS record how real work is actually done.</h4>
              </article>
              <article>
                <span>02 / AGENT EXTENSION</span>
                <h4>Captured process is trained and extended into agents.</h4>
              </article>
              <article>
                <span>03 / OWNERSHIP SURFACE</span>
                <h4>Agents can be ranked, rented, and coordinated through the Forge.</h4>
              </article>
              <article>
                <span>04 / DISTRIBUTION LAYER</span>
                <h4>Humans introduce. Agents can follow up, educate, and maintain presence.</h4>
              </article>
            </div>
            <p className="investor-agentic-seat">Your own seat still has full value even with zero team.</p>
          </div>

          <div className="investor-agentic-block">
            <div className="investor-network-heading">
              <p className="investor-eyebrow">HOW VALUE MOVES</p>
              <h3>Human judgment. Process. Agent scale.</h3>
            </div>
            <ol className="investor-agentic-flow">
              <li><span>01</span><p>You operate and capture process.</p></li>
              <li><span>02</span><p>Process is extended into agents.</p></li>
              <li><span>03</span><p>Agents support distribution and execution.</p></li>
              <li><span>04</span><p>Human network + agent activity both contribute to leverage.</p></li>
              <li><span>05</span><p>Standards remain. Empty volume is not the goal.</p></li>
            </ol>
          </div>

          <div className="investor-agentic-closing">
            <p>This is not a better network marketing company.<br />It is the infrastructure network marketing runs on once agents become normal.</p>
            <div className="investor-actions">
              <AccessButton>Request Access</AccessButton>
              <Link href="/access#desk-process" className="investor-button investor-button-quiet">See Operator Tiers <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-section investor-briefos-section" id="briefos" aria-labelledby="briefos-title">
        <div className="investor-container investor-briefos-grid">
          <div>
            <p className="investor-eyebrow">06 / Public intelligence</p>
            <h2 id="briefos-title">BriefOS</h2>
          </div>
          <div>
            <p className="investor-bigger-lead">The public intelligence layer of Kurogami.</p>
            <p className="investor-briefos-copy">
              BriefOS makes selected analysis and operating context legible outside the desk: concise intelligence for a world changing faster than inherited playbooks can follow.
            </p>
          </div>
        </div>

        <div className="investor-container investor-briefs-wrap">
          <div className="investor-briefs-header">
            <p className="investor-eyebrow">The first 5 pieces</p>
            <h3>BriefOS — First 5 pieces</h3>
          </div>
          <div className="investor-briefs-grid">
            {briefSeries.map(([label, title, body]) => (
              <article key={title} className="investor-brief-card">
                <span>{label}</span>
                <h4>{title}</h4>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="investor-closing" id="access" aria-labelledby="closing-title">
        <div className="investor-container investor-closing-inner">
          <p className="investor-eyebrow"><span className="investor-status-dot" /> Kurogami / Operator infrastructure</p>
          <h2 id="closing-title">Request Access</h2>
          <p>Kurogami is process infrastructure for operators.</p>
          <p className="investor-access-description">
            Access includes Desk tools, operator resources, and BriefOS intelligence.
            <br />
            This is not a community and not a course.
          </p>
          <div className="investor-access-tier-grid">
            {DESK_TIERS.map((tier, index) => (
              <article className="investor-access-tier" key={tier.id}>
                <p className="investor-access-tier-index">{String(index + 1).padStart(2, '0')} / {tier.price}</p>
                <h3>{tier.name}</h3>
                <p>{tier.summary}</p>
                <Link
                  href={`/access?tier=${encodeURIComponent(tier.id)}#desk-process`}
                  className="investor-button investor-button-gold"
                >
                  Select tier
                </Link>
              </article>
            ))}
          </div>
          <p className="investor-access-checkout-note">Secure checkout via Stripe. Access instructions sent after payment.</p>
        </div>
      </section>
    </main>
  )
}
