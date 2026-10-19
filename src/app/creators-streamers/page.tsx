import Link from 'next/link'

export const metadata = {
  title: 'For Creators & Streamers',
  description: 'A focused briefing on operator infrastructure for creators and streamers.',
}

const creatorBenefits = [
  'Real operator infrastructure to point people to.',
  'Tracked introductions and conversions through Forge Network.',
  'Streaming and content as a top-of-funnel surface into access.',
  'Your audience remains yours.',
  'Your seat has full value even with zero team.',
  'Distribution process can later extend into agents.',
]

export default function CreatorsStreamersPage() {
  return (
    <main className="investor-page network-leaders-page">
      <section className="network-leaders-hero">
        <div className="investor-container">
          <Link href="/#network" className="network-leaders-back">← Return to Network / overview</Link>
          <header>
            <p className="investor-eyebrow">KUROGAMI / FOR CREATORS &amp; STREAMERS</p>
            <h1>Your audience is distribution. Process makes it durable.</h1>
            <p>Content and live presence can introduce people to real operator infrastructure. Kurogami connects attention to a process, access path, and operating standard.</p>
          </header>
        </div>
      </section>

      <div className="investor-container network-leaders-content">
        <section className="network-leaders-section">
          <p className="investor-eyebrow">01 / DISTRIBUTION SURFACE</p>
          <div>
            <h2>Attention with an operating destination.</h2>
            <p>Content and streams can lead to briefing, operator access, and deeper process infrastructure. Forge Network provides a surface for tracked introductions and conversions while your audience remains yours.</p>
          </div>
        </section>

        <section className="network-leaders-section">
          <p className="investor-eyebrow">02 / WHAT THIS ENABLES</p>
          <ul className="network-leaders-list">
            {creatorBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </section>

        <section className="network-leaders-section">
          <p className="investor-eyebrow">03 / OPEN STREAMING SURFACE</p>
          <div>
            <h2>Lives and streams as operator distribution.</h2>
            <p>Hosts and operators can run lives, point to briefing and access, and track the process in Forge Network. Access remains the gate to deeper operator layers. Distribution is a path into the system, not a substitute for the seat.</p>
          </div>
        </section>

        <section className="network-leaders-section">
          <p className="investor-eyebrow">04 / PROCESS EXTENSION</p>
          <div>
            <h2>Process can extend beyond the stream.</h2>
            <p>As distribution processes become structured and reliable, they can later be extended into agents. Standards remain in place. Audience growth alone is not the objective.</p>
          </div>
        </section>

        <section className="network-leaders-closing">
          <p className="investor-eyebrow">KUROGAMI / CREATOR INFRASTRUCTURE</p>
          <h2>This is not a collab rate card.<br />It is operator infrastructure for people who already move attention.</h2>
          <div className="investor-actions">
            <Link href="/access#desk-process" className="investor-button investor-button-gold">Request Access</Link>
            <Link href="/#network" className="investor-button investor-button-quiet">View Network overview</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
