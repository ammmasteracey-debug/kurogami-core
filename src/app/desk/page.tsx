import Image from 'next/image'
import Link from 'next/link'

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'

export default function DeskPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/kurogami-world-hero.jpg" alt="Kurogami World backdrop" fill priority className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.95))]" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-4xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className={panelClass}>
          <p className={labelClass}>The Desk</p>
          <h1 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Day desk + Meme Engine</h1>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Thesis</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="text-lg leading-8 text-white/84 sm:text-xl">Little-to-a-lot. Structured exposure. Capital through craft.</p>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Process Principles</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <ul className="space-y-3 text-base leading-8 text-white/82 sm:text-lg">
            <li>Day desk discipline</li>
            <li>Night meme process</li>
            <li>Position sizing before conviction</li>
            <li>Culture is the signal, not the noise</li>
          </ul>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Disclaimer</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="text-base leading-8 text-white/72 sm:text-lg">This is educational content only. No guaranteed returns. Trading involves risk.</p>
        </article>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <Link href="/curriculum" className="btn btn-primary w-full sm:w-auto">Enter Curriculum</Link>
          <Link href="/paths" className="btn btn-secondary w-full sm:w-auto">Back to Paths</Link>
        </div>
      </section>
    </main>
  )
}
