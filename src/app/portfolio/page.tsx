import { EngineHeader, PlaceholderPanel, SectionIntro } from '../../components/engine/EngineUI'

const modules = [
  { title: 'Balances', body: 'Wallet and treasury balances across connected assets.' },
  { title: 'Tokenized Assets', body: 'Asset NFTs and fractional units held in your portfolio.' },
  { title: 'Collateral Positions', body: 'Active deposits and their current health factor.' },
  { title: 'Borrow Capacity', body: 'Remaining and used borrow capacity by tier.' },
  { title: 'Active Strategies', body: 'Deployed positions across desk, acquisition, and vault strategies.' },
  { title: 'Vertical Exposures', body: 'Exposure breakdown across reserve, real estate, watches, art, and more.' },
  { title: 'Basket Exposure', body: 'Weighting inside any indexed basket positions.' }
]

export default function PortfolioPage() {
  return (
    <main className="engine-shell relative overflow-hidden text-[var(--text-1)]">
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <EngineHeader
          kicker="Kurogami / Portfolio OS"
          title="Portfolio OS"
          subtitle="See the full loop in one place."
        />

        <section className="mt-12 pb-8" aria-labelledby="modules">
          <SectionIntro kicker="Modules" title="Full-loop portfolio view" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <article key={module.title} className="engine-panel p-5">
                <h3 className="font-[var(--disp)] text-lg font-semibold text-white">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{module.body}</p>
                <div className="mt-4">
                  <PlaceholderPanel label="Connect wallet to view" />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45">
            This is a preview of the Portfolio OS layout. Live balances, positions, and exposures unlock with approved access.
          </p>
        </section>
      </section>
    </main>
  )
}
