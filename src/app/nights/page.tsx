import Image from 'next/image'
import Link from 'next/link'

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'

export default function KurogamiWorldNightsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/kurogami-world-nights.jpg"
          alt="Kurogami World Nights background"
          fill
          priority
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(7,8,14,0.9)] shadow-[0_40px_120px_rgba(0,0,0,0.38)]">
          <div className="relative aspect-[16/8] min-h-[360px]">
            <Image
              src="/images/kurogami-world-nights.jpg"
              alt="Kurogami World Nights art and sound gathering"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
              <p className={labelClass}>Kurogami World Nights</p>
              <h1 className="mt-4 max-w-3xl font-[var(--disp)] text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                Art & Sound in public
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(233,238,243,0.9)] sm:text-lg">
                Live painting. Sound. Culture first. Crypto in the background.
              </p>
            </div>
          </div>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>What It Is</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="max-w-4xl text-base leading-8 text-[rgba(233,238,243,0.84)] sm:text-lg">
            Kurogami World Nights are artist-first rooms where live art and sound happen in public. The nights build culture. Founding art and network access sit behind the experience.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.2rem] border border-white/10 bg-black/25 p-6">
              <p className={labelClass}>Public Side</p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-white/80">
                <li>Live art</li>
                <li>Sound and atmosphere</li>
                <li>Recurring nights</li>
                <li>Artists building in the open</li>
              </ul>
            </div>
            <div className="rounded-[1.2rem] border border-[var(--gold)]/20 bg-black/25 p-6">
              <p className={labelClass}>Behind The Room</p>
              <ul className="mt-5 space-y-3 text-base leading-7 text-white/80">
                <li>Founding art as keys</li>
                <li>Network access</li>
                <li>Deeper system layers</li>
                <li>Crypto as infrastructure, not the whole party</li>
              </ul>
            </div>
          </div>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Night Format</p>
          <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Night structure</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Doors / music',
              'Live painting starts immediately',
              'Guests socialize and watch process',
              'Optional short frame once',
              'Close + next date',
              'Recap content after',
            ].map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[1.1rem] border border-white/10 bg-black/20 p-5">
                <span className="font-mono text-sm text-[var(--gold)]">0{index + 1}</span>
                <p className="text-base leading-7 text-white/85">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.16em] text-white/55">No long stage lectures.</p>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Who&apos;s Involved</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.2rem] border border-white/10 bg-black/25 p-6">
              <h2 className="text-xl font-semibold text-white">Live Art</h2>
              <p className="mt-3 leading-7 text-white/75">Painting and process in public.</p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-black/25 p-6">
              <h2 className="text-xl font-semibold text-white">Sound</h2>
              <p className="mt-3 leading-7 text-white/75">Venue flow and atmosphere.</p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-black/25 p-6">
              <h2 className="text-xl font-semibold text-white">Kurogami</h2>
              <p className="mt-3 leading-7 text-white/75">Brand, promotion, and structure.</p>
            </div>
          </div>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Next Night / Series</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Kurogami World Nights</h2>
              <p className="mt-4 text-base leading-8 text-white/80">Series prototype live. Follow for the next room.</p>
              <p className="mt-6 text-sm leading-7 text-white/60">Wynwood · Evening time window · Date announced through the Kurogami channels</p>
            </div>
            <div className="rounded-[1.2rem] border border-[var(--gold)]/25 bg-[rgba(240,194,74,0.06)] p-6">
              <p className={labelClass}>Cover</p>
              <p className="mt-4 text-lg text-white">$25 standard entry</p>
              <p className="mt-2 text-lg text-white">$40 paint seat + materials</p>
              <p className="mt-5 text-sm leading-7 text-white/65">Intimate, high-signal room for 30-50 people.</p>
            </div>
          </div>
          <div className="herocta mt-8">
            <a href="https://x.com/kurogamixyz" target="_blank" rel="noreferrer" className="btn btn-primary">Get details</a>
            <a href="https://x.com/kurogamixyz" target="_blank" rel="noreferrer" className="btn btn-secondary">Follow for dates</a>
          </div>
        </article>

        <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
          <p className={labelClass}>Kurogami World Nights</p>
          <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Culture in the room. Keys behind the world.</h2>
          <div className="herocta mt-8 justify-center">
            <a href="https://x.com/kurogamixyz" target="_blank" rel="noreferrer" className="btn btn-primary">Follow for next night</a>
            <Link href="/reserve" className="btn btn-secondary">Explore founding art</Link>
          </div>
        </article>
      </section>
    </main>
  )
}
