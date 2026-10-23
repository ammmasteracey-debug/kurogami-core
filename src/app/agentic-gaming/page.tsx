import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './agentic-gaming.module.css'

export const metadata: Metadata = {
  title: 'Agentic Gaming | Kurogami',
  description:
    'Kurogami agentic gaming — process-trained competition, operator logs, and the path from play to agent.',
}

const rails = [
  ['01', 'SESSION', 'Short competitive match with clear decisions.'],
  ['02', 'LOG', 'Every choice and outcome stored on the operator profile.'],
  ['03', 'RANK / XP', 'Progression from real play; unlocks follow skill, not pay-only gates.'],
  ['04', 'AGENT PATH', 'Process history becomes training data for an agent that plays in your style.'],
]

const foundations = [
  ['FINANCE', 'Desk and capital process.'],
  ['GAMING', 'Competitive process.'],
  ['DATA', 'Logs that compound into operator intelligence.'],
]

const direction = [
  'Ranked competitive modules across crafts.',
  'Operator profiles that show form across sessions.',
  'Agents that can run the same decision loops.',
  'A Forge marketplace surface for process-trained agents, on the protocol timeline.',
]

export default function AgenticGamingPage() {
  return (
    <main className={`investor-page ${styles.page}`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className="investor-eyebrow">KUROGAMI · AGENTIC GAMING</p>
          <h1>Process-trained competition.</h1>
          <p className={styles.heroSub}>Games on Kurogami are not click-farms. They capture how you decide under pressure — then that process can train an agent.</p>
          <div className={styles.actions}>
            <Link href="/access#desk-process" className="investor-button investor-button-gold">Join the waitlist</Link>
            <Link href="#rails" className="investor-button investor-button-quiet">Read the rails <span aria-hidden="true">↓</span></Link>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.section} aria-labelledby="gaming-definition">
          <header className={styles.sectionHeading}>
            <p className="investor-eyebrow">01 / WHAT AGENTIC GAMING MEANS</p>
            <h2>Skill becomes a process record.</h2>
          </header>
          <div className={styles.definition}>
            <p>Most play-to-earn paid people to repeat actions. Agentic gaming records the decisions that win — locks, reads, timing, risk — so skill becomes a profile, then an agent.</p>
            <ul>
              <li>Human plays a real competitive loop.</li>
              <li>Every session writes a process log.</li>
              <li>Rank and XP track consistency, not spam.</li>
              <li>Agents learn from that process path, not empty grinding.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section} id="rails" aria-labelledby="gaming-rails">
          <header className={styles.sectionHeading}>
            <p className="investor-eyebrow">02 / THE RAILS</p>
            <h2 id="gaming-rails">Same stack. Different sport.</h2>
          </header>
          <div className={styles.rails}>
            {rails.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className={styles.caption}>The sport is the variable. The rails stay the same.</p>
        </section>

        <section className={styles.section} aria-labelledby="gaming-fit">
          <header className={styles.sectionHeading}>
            <p className="investor-eyebrow">03 / WHY IT BELONGS ON KUROGAMI</p>
            <h2 id="gaming-fit">One operator identity. Multiple crafts.</h2>
          </header>
          <div className={styles.foundationGrid}>
            {foundations.map(([title, description]) => (
              <article key={title}>
                <p className="investor-eyebrow">{title}</p>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className={styles.caption}>One operator identity. Multiple crafts. A shared Forge path later.</p>
        </section>

        <section className={styles.section} aria-labelledby="gaming-direction">
          <header className={styles.sectionHeading}>
            <p className="investor-eyebrow">04 / WHAT WE ARE BUILDING TOWARD</p>
            <h2 id="gaming-direction">Competition as an operating signal.</h2>
          </header>
          <ul className={styles.directionList}>
            {direction.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <aside className={styles.notBox} aria-label="What agentic gaming is not">
          <p className="investor-eyebrow">05 / WHAT IT IS NOT</p>
          <p>Not emission farming. Not “play to print tokens.” Not a casino skin.</p>
          <strong>Competition first. Process second. Agent third.</strong>
        </aside>

        <section className={styles.closing} aria-labelledby="gaming-closing">
          <div>
            <p className="investor-eyebrow">KUROGAMI / AGENTIC GAMING</p>
            <h2 id="gaming-closing">Operators only.</h2>
            <p>Agentic gaming ships as part of the Kurogami stack. Early access follows the same path as the rest of the protocol.</p>
          </div>
          <Link href="/access#desk-process" className="investor-button investor-button-gold">Request access / Enter waitlist <span aria-hidden="true">↗</span></Link>
        </section>
      </div>
    </main>
  )
}
