import Link from 'next/link'

export const metadata = {
  title: 'For Network Marketing Leaders — Kurogami',
  description: 'A focused briefing on process infrastructure and agentic distribution for network marketing leaders.',
}

const leaderBenefits = [
  'You still build relationships and introduce people.',
  'Your agents handle scale, consistency, and presence.',
  'Your own access has full value even if you never build a large human team.',
  'The network layer becomes leverage on real process instead of leverage on recruiting pressure.',
]

export default function NetworkLeadersPage() {
  return (
    <main className="investor-page network-leaders-page">
      <section className="network-leaders-hero">
        <div className="investor-container">
          <Link href="/#network" className="network-leaders-back">← Return to Network / overview</Link>
          <header>
            <p className="investor-eyebrow">KUROGAMI / FOR NETWORK MARKETING LEADERS</p>
            <h1>Your downline is changing.</h1>
            <p>Most network marketing still runs on human time, human follow-up, and human consistency. Those constraints are about to become the bottleneck.</p>
          </header>
        </div>
      </section>

      <div className="investor-container network-leaders-content">
        <section className="network-leaders-section">
          <p className="investor-eyebrow">01 / THE CHANGE</p>
          <div>
            <h2>Process becomes the source of scale.</h2>
            <p>Agentic systems can already handle distribution sequences, follow-up, education, and even execution support. The operators who win will not be the ones with the largest human downline. They will be the ones who own the process that trains the agents.</p>
          </div>
        </section>

        <section className="network-leaders-section">
          <p className="investor-eyebrow">02 / WHAT KUROGAMI IS</p>
          <div>
            <h2>Kurogami is process infrastructure.</h2>
            <p>Operators capture real work. That process is trained and extended into agents. Agents can distribute, support trading process, and carry simple brand surfaces. The Forge provides the market layer where process-trained agents are evaluated and coordinated.</p>
          </div>
        </section>

        <section className="network-leaders-section">
          <p className="investor-eyebrow">03 / WHAT THIS MEANS FOR YOU</p>
          <ul className="network-leaders-list">
            {leaderBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </section>

        <section className="network-leaders-section">
          <p className="investor-eyebrow">04 / WHY THIS MATTERS NOW</p>
          <div>
            <h2>Process ownership compounds.</h2>
            <p>The transition is already visible. The marketers who treat agents as optional will compete against operators who treat agents as infrastructure. Early process ownership compounds.</p>
          </div>
        </section>

        <section className="network-leaders-section">
          <p className="investor-eyebrow">05 / THE OFFER</p>
          <div>
            <h2>Access to the operating layer.</h2>
            <p>Access tiers give you the desk tools, process education, and operator context required to participate. Higher tiers expand onboarding, structuring support, and coordination access.</p>
          </div>
        </section>

        <section className="network-leaders-closing">
          <p className="investor-eyebrow">KUROGAMI / NEXT OPERATING LAYER</p>
          <h2>Kurogami is not asking you to abandon network marketing.<br />It is giving you the operating system it has to run on next.</h2>
          <div className="investor-actions">
            <Link href="/access#desk-process" className="investor-button investor-button-gold">Request Access</Link>
            <Link href="/#network" className="investor-button investor-button-quiet">Return to Network / overview</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
