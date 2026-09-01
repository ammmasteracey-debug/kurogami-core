import Link from 'next/link'

const protocols = [
  ['Fashion Protocol', 'Drops, provenance, tokenization.', 'https://kurogami-fashion.vercel.app/', 'Enter Fashion'],
  ['Real Estate Protocol', 'Property packaging, claim surfaces, spatial open-house direction.', 'https://kurogami-real-estate.vercel.app/', 'Enter Real Estate'],
  ['Watches Protocol', 'Timepiece packaging and provenance records.', 'https://kurogami-watches.vercel.app/', 'Enter Watches'],
  ['Cars Protocol', 'Automotive packaging and provenance records.', 'https://kurogami-cars.vercel.app/', 'Enter Cars'],
  ['Yachts Protocol', 'Marine asset packaging and provenance records.', 'https://kurogami-yachts.vercel.app/', 'Enter Yachts'],
  ['Art Protocol', 'Cultural works, provenance, and ownership records.', 'https://kurogami-art.vercel.app/', 'Enter Art'],
]

export default function ProtocolsPage() {
  return (
    <main className="club-deck relative min-h-screen overflow-hidden text-[var(--text)]">
      <div className="club-deck-grid pointer-events-none absolute inset-0" />
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <header className="club-command-frame border border-[#f1c96a]/25 bg-[rgba(4,6,8,0.9)] p-7 sm:p-10">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Kurogami World / Protocols</p>
          <h1 className="mt-4 font-[var(--disp)] text-4xl font-semibold text-white sm:text-5xl">Asset Protocols</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">Fashion, Real Estate, Watches, Cars, Yachts, and Art are packaging rails for real-world assets and cultural product.</p>
        </header>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {protocols.map(([name, description, href, cta]) => (
            <article key={name} className="club-instrument-panel flex min-h-72 flex-col border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-6">
              <span className="w-fit border border-[#2fe6b0]/35 bg-[#2fe6b0]/10 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#79f4cf]">Live</span>
              <h2 className="mt-6 font-[var(--disp)] text-2xl font-semibold text-white">{name}</h2>
              <p className="mt-3 text-base leading-7 text-white/72">{description}</p>
              <a href={href} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto self-start pt-6">{cta}</a>
            </article>
          ))}
        </div>
        <Link href="/lanes" className="btn btn-secondary mt-8">View All Lanes</Link>
      </section>
    </main>
  )
}