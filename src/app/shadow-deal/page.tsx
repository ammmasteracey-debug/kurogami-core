import Link from 'next/link'

const accessSteps = [
  'Join or apply to Kurogami',
  'Complete the qualification questionnaire',
  'Alignment review',
  'Private follow-up if appropriate',
  'Deal-by-deal visibility only when relevant',
]

const opportunityCategories = [
  { title: 'Hospitality / Hotel', detail: 'Relationship-led hospitality and hotel considerations.' },
  { title: 'Bullion / Hard Assets', detail: 'Hard-asset conversations surfaced through trusted counterparts.' },
  { title: 'Real Asset Packaging', detail: 'Institutional-style packaging and coordination context.' },
  { title: 'Strategic Private Opportunities', detail: 'Selective situations where alignment and timing matter.' },
]

export default function ShadowDealPage() {
  return (
    <main className="club-deck relative min-h-screen overflow-hidden text-[var(--text)]">
      <div className="club-deck-grid pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <header className="club-command-frame border border-[#f1c96a]/25 bg-[rgba(4,6,8,0.92)] p-7 sm:p-12">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Shadow Desk</p>
          <div className="mt-7 max-w-4xl">
            <h1 className="font-[var(--disp)] text-4xl font-semibold leading-[0.95] text-white sm:text-6xl">Institutional adjacency.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">Selective visibility into higher-grade opportunities through aligned partners.</p>
            <p className="mt-7 max-w-3xl border-l border-[#f1c96a]/45 pl-5 text-base leading-8 text-white/65">Being part of Kurogami means entering a high-signal room where culture, packaging rails, and capital relationships converge.</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/apply" className="btn btn-primary">Apply for Qualification</Link>
            <Link href="/lanes" className="btn border border-white/20 bg-white/5 text-white hover:border-[#f1c96a]/45 hover:text-[var(--gold)]">Return to Lanes</Link>
          </div>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <section className="club-instrument-panel border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-6 sm:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">01 / The Desk</p>
            <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white">What this is</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-white/72">
              <li>Private desk for qualified operators and capital partners.</li>
              <li>Hospitality, hard assets, and institutional-style opportunities may surface through trusted relationships.</li>
              <li>Kurogami provides the club filter, packaging layer, and coordination surface.</li>
            </ul>
          </section>

          <section className="club-instrument-panel border border-white/12 bg-[rgba(8,10,17,0.9)] p-6 sm:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">02 / Boundaries</p>
            <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white">What this is not</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-white/72">
              <li>Not public deal spam.</li>
              <li>Not guaranteed allocation.</li>
              <li>Not financial advice.</li>
              <li>Not open to every account by default.</li>
            </ul>
          </section>
        </div>

        <section className="mt-10 border-y border-[#f1c96a]/18 py-10">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">03 / Qualification Before Visibility</p>
          <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">How access works</h2>
          <ol className="mt-7 grid gap-px border border-[#f1c96a]/18 bg-[#f1c96a]/18 md:grid-cols-5">
            {accessSteps.map((step, index) => (
              <li key={step} className="min-h-36 bg-[rgba(5,7,9,0.96)] p-5">
                <span className="font-mono text-xs tracking-[0.18em] text-[var(--gold)]">0{index + 1}</span>
                <p className="mt-5 text-sm leading-6 text-white/75">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">04 / High-Level Only</p>
          <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Opportunity categories</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {opportunityCategories.map((category) => (
              <article key={category.title} className="club-instrument-panel min-h-48 border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-6">
                <h3 className="font-[var(--disp)] text-xl font-semibold text-white">{category.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{category.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="club-instrument-panel border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-6 sm:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">05 / The Room</p>
            <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white">Who it&apos;s for</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Serious operators', 'Capital partners', 'Founders with real contribution', 'Qualified participants only'].map((audience) => (
                <span key={audience} className="border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/75">{audience}</span>
              ))}
            </div>
          </article>
          <aside className="border border-[#f1c96a]/30 bg-[#f1c96a]/[0.07] p-6 sm:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">Private by Design</p>
            <p className="mt-5 text-lg leading-8 text-white/80">Shadow infrastructure for a higher room. Access is selective.</p>
            <Link href="/apply" className="btn btn-primary mt-7">Request Qualification</Link>
          </aside>
        </section>

        <section className="mt-10 border border-white/12 bg-black/30 p-6 sm:p-8">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-white/55">Important Notice</p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/60">Opportunities, when available, are private and selective. No allocation is guaranteed. Nothing on this page is an offer to sell securities. Participants should complete their own due diligence and consult advisors.</p>
        </section>
      </div>
    </main>
  )
}