import Link from 'next/link'
import styles from './kage.module.css'

export const metadata = {
  title: 'KAGE — Shadow Brief for the New Era',
  description:
    'KAGE is the culture, finance, AI, and art podcast for the new economy. BriefOS informs the topics; the show explores them in public.',
}

const formats = [
  ['01', 'Weekly signal', 'One clear topic from the brief.'],
  ['02', 'Conjecture', 'How the era is actually forming.'],
  ['03', 'The room', 'Guests and operators respond.'],
]

const episodes = [
  {
    title: 'What most people are missing about this shift',
    description: 'A public conjecture on the forces reshaping culture, capital, and work.',
  },
  {
    title: 'Chatbots answer. Agents operate.',
    description: 'The move from generated responses to process-trained action.',
  },
  {
    title: 'Culture is distribution',
    description: 'How cultural signal carries ideas, people, and systems into the world.',
  },
]

const hosts = [
  {
    name: 'Scholar',
    role: 'Host / network / culture',
  },
  {
    name: 'Acey',
    role: 'Thesis / operator brief',
  },
  {
    name: 'Tokeyo',
    role: 'Personal & Artist Relations Lead',
    description: 'Owns first contact and human warmth—making the introduction, holding the room with new prospects, and keeping culture and art present so KAGE feels like people, not only thesis.',
  },
]

export default function KagePage() {
  return (
    <main className={`investor-page ${styles.page}`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.japanese}>影 <span>·</span> KAGE</p>
          <p className="investor-eyebrow">KUROGAMI / PUBLIC BRIEFING</p>
          <h1>Shadow brief for the new era</h1>
          <p className={styles.subtitle}>Culture. Finance. AI. Art. What actually matters in the shift.</p>
          <p className={styles.disclaimer}>Not investment advice.</p>
          <div className={styles.wordmark} aria-hidden="true">KAGE</div>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.intro} aria-labelledby="kage-positioning">
          <div>
            <p className="investor-eyebrow">THE SHOW</p>
            <h2 id="kage-positioning">A public conversation informed by the brief.</h2>
          </div>
          <div className={styles.introCopy}>
            <p>KAGE is the culture + finance + AI + art podcast for the new economy. Not a lifestyle show. Not hype.</p>
            <p>We take signals from the brief — markets, intelligence, ownership, culture — and talk them in the open.</p>
            <p>Host energy meets operator thesis. Guests react. The room gets smarter.</p>
            <p>BriefOS feeds the topics. The show is public conjecture on what matters. Kurogami builds the infrastructure behind the conversation.</p>
          </div>
        </section>

        <section className={styles.format} aria-labelledby="kage-format">
          <div className={styles.sectionHeading}>
            <p className="investor-eyebrow">FORMAT</p>
            <h2 id="kage-format">Three parts. One clear signal.</h2>
          </div>
          <div className={styles.formatGrid}>
            {formats.map(([index, title, description]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.episodes} id="episodes" aria-labelledby="kage-episodes">
          <div className={styles.sectionHeading}>
            <p className="investor-eyebrow">EPISODES / 00</p>
            <h2 id="kage-episodes">The first conversations.</h2>
          </div>
          <div className={styles.episodeList}>
            {episodes.map(({ title, description }, index) => (
              <article className={styles.episode} key={title}>
                <span className={styles.episodeIndex}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <p className={styles.episodeStatus}>Duration: TBA <span>·</span> Coming soon</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.hosts} aria-labelledby="kage-hosts">
          <div className={styles.sectionHeading}>
            <p className="investor-eyebrow">THE VOICES</p>
            <h2 id="kage-hosts">Hosts</h2>
          </div>
          <div className={styles.hostList}>
            {hosts.map(({ name, role, description }) => (
              <article key={name}>
                <h3>{name}</h3>
                <p>{role}</p>
                {description && <p>{description}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className={styles.closing} aria-label="KAGE links">
          <div>
            <p className="investor-eyebrow">FOLLOW THE SIGNAL</p>
            <h2>Watch. Listen. Read the brief.</h2>
          </div>
          <div className={styles.ctaContent}>
            <div className={styles.platformLinks} aria-label="Podcast platforms, coming soon">
              <Link href="#episodes">YouTube <span>Coming soon</span></Link>
              <Link href="#episodes">Spotify <span>Coming soon</span></Link>
              <Link href="#episodes">Apple Podcasts <span>Coming soon</span></Link>
            </div>
            <div className={styles.actions}>
              <Link href="/#briefos" className="investor-button investor-button-quiet">Read the brief <span aria-hidden="true">↗</span></Link>
              <Link href="/access#desk-process" className="investor-button investor-button-gold">Request access</Link>
            </div>
          </div>
        </section>

        <p className={styles.footerNote}>KAGE is an extension of the brief. Kurogami builds the rails. Gami Boyz holds the culture lane.</p>
      </div>
    </main>
  )
}
