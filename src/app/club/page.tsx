import Image from 'next/image'
import Link from 'next/link'

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'

const pillars = [
  ['Exclusive access', 'A selective room for people building at the edge of culture, markets, and ownership.'],
  ['Real utility', 'Founding keys, desk process, curriculum, and useful entry paths over empty noise.'],
  ['Public culture proof', 'Artists, nights, and visible work create the signal around the room.'],
  ['Private operating rails', 'The deeper systems support disciplined participation, access, and coordination.'],
]

export default function ClubPage() {
  return (
    <main className="club-deck relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="club-deck-grid pointer-events-none absolute inset-0" />
      <div className="club-deck-horizon pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <Image src="/images/kurogami-world-hero.jpg" alt="Kurogami World club backdrop" fill priority className="object-cover object-center" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className={`${panelClass} club-command-frame overflow-hidden`}>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#f1c96a]/20 pb-5">
            <p className={labelClass}>Kurogami World / Club Deck</p>
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-[#f6d98c]">Access Status: Selective</p>
          </div>
          <div className="pt-10 sm:pt-14">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-white/50">Signal room / 01</p>
            <h1 className="mt-5 max-w-4xl font-[var(--disp)] text-5xl font-semibold leading-[0.88] text-white sm:text-6xl">The Club</h1>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-white/82 sm:text-xl">Kurogami is not an open free-for-all. It is a high-signal room for operators, artists, creators, and investors who want the next level of finance and culture.</p>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-white/55">
              <span>Founding keys online</span>
              <span>Desk rails active</span>
              <span>Culture proof public</span>
            </div>
          </div>
        </article>

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map(([title, description], index) => (
            <article key={title} className="club-instrument-panel rounded-[1.2rem] border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.86)] p-6">
              <span className="font-mono text-sm text-[var(--gold)]">0{index + 1} / PILLAR</span>
              <h2 className="mt-4 font-[var(--disp)] text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-base leading-7 text-white/75">{description}</p>
            </article>
          ))}
        </div>

        <article className="club-command-frame rounded-[1.7rem] border border-[#f1c96a]/25 bg-[rgba(8,10,17,0.92)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
          <p className={labelClass}>Club Lane</p>
          <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Fine Shit Do Memes</h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-white/80 sm:text-lg">Fine Shit Do Memes is Kurogami's women-native meme desk and official club entry lane: token-gated access, curriculum, utility, and an official coin. The official token and contract-address source of truth live on the FSDM dapp.</p>
          <a href="https://fine-shit-do-memes.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary mt-7">Enter Fine Shit Do Memes</a>
        </article>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
          <Link href="/reserve" className="btn btn-primary w-full sm:w-auto">Reserve Founding Art</Link>
          <Link href="/curriculum" className="btn btn-secondary w-full sm:w-auto">Enter Curriculum</Link>
          <a href="https://fine-shit-do-memes.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-secondary w-full sm:w-auto">Enter Fine Shit Do Memes</a>
        </div>
      </section>
    </main>
  )
}