import { EngineHeader, SectionIntro } from '../../components/engine/EngineUI'

const marketCards = [
  { title: 'Spot / Ownership', body: 'Direct ownership of tokenized real-world assets, transferable on-chain.' },
  { title: 'Collateral / Borrow', body: 'Post tokenized assets and reserve units to access borrow capacity.' },
  { title: 'Vault / Yield', body: 'Pooled exposure to income-generating verticals through vault shares.' },
  { title: 'Prediction / Events', body: 'Outcome markets tied to real asset and vertical performance.' },
  { title: 'Basket / Index', body: 'Diversified exposure across verticals through a single indexed position.' }
]

export default function MarketsPage() {
  return (
    <main className="engine-shell relative overflow-hidden text-[var(--text-1)]">
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <EngineHeader
          kicker="Kurogami / Markets"
          title="RWA Markets"
          subtitle="Ownership, collateral, yield, and event surfaces for real-world value."
        />

        <section className="mt-12" aria-labelledby="market-surfaces">
          <SectionIntro kicker="Market Surfaces" title="Five surfaces, one asset base" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {marketCards.map((card) => (
              <article key={card.title} className="engine-panel-quiet p-5">
                <h3 className="font-[var(--disp)] text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{card.body}</p>
                <span className="mt-4 inline-block placeholder-panel w-full !py-3 !text-[0.6rem]">Data gated — early access</span>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 pb-8">
          <article className="engine-panel p-6 sm:p-8">
            <p className="engine-kicker">Note</p>
            <p className="mt-3 max-w-3xl text-base leading-8 text-white/75">
              Prediction markets are tied to real asset and vertical outcomes, not random spectacle.
            </p>
          </article>
        </section>
      </section>
    </main>
  )
}
