import Image from 'next/image'
import Link from 'next/link'

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'

export default function WorldPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/kurogami-world-hero.jpg" alt="Kurogami World backdrop" fill priority className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.95))]" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-4xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className={panelClass}>
          <p className={labelClass}>What It Is</p>
          <h1 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Kurogami World is an elite culture-finance social club and operating system.</h1>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>What It Means</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="text-lg leading-8 text-white/84 sm:text-xl">Exclusive access, real utility, and ownership rails for operators, creators, influencers, and investors.</p>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>How It Works</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <ul className="space-y-3 text-base leading-8 text-white/82 sm:text-lg">
            <li>Founding art functions as an access key</li>
            <li>Public culture proof creates presence</li>
            <li>Desk process and curriculum train operators</li>
            <li>Private operating and asset rails sit behind the room</li>
          </ul>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Who It Is For</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="text-base leading-8 text-white/82 sm:text-lg">Artists, operators, creators, influencers, builders, and investors seeking the next level of finance and culture.</p>
        </article>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <Link href="/paths" className="btn btn-primary w-full sm:w-auto">Choose Your Path</Link>
          <Link href="/club" className="btn btn-secondary w-full sm:w-auto">Enter the Club</Link>
          <Link href="/reserve" className="btn btn-secondary w-full sm:w-auto">Reserve Founding Art</Link>
        </div>
      </section>
    </main>
  )
}
