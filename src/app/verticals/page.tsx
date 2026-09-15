import { EngineCta, EngineHeader, SectionIntro } from '../../components/engine/EngineUI'

const verticals = [
  { title: 'Reserve / Gold', body: 'Hard-money reserve units tokenized as high-tier collateral with the deepest borrow capacity.' },
  { title: 'Real Estate', body: 'Property packaging and title-linked Asset NFTs, vaulted or fractionalized for shared ownership.' },
  { title: 'Watches', body: 'Timepiece provenance and condition records anchoring tokenized ownership and collateral use.' },
  { title: 'Art & Collectibles', body: 'Cultural works and collectibles verified, wrapped, and issued as composable on-chain units.' },
  { title: 'Fashion / Inventory', body: 'Brand inventory and drop rights tokenized for financing and secondary distribution.' },
  { title: 'Mobility / Fleet', body: 'Vehicle and fleet assets packaged for tokenized ownership and revenue-linked positions.' },
  { title: 'Sports / NIL', body: 'Name, image, and likeness rights structured into tokenized, collateral-eligible positions.' }
]

export default function VerticalsPage() {
  return (
    <main className="engine-shell relative overflow-hidden text-[var(--text-1)]">
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <EngineHeader
          kicker="Kurogami / Asset Verticals"
          title="Asset Verticals"
          subtitle="Same engine. Different policy packs."
        />

        <section className="mt-12" aria-labelledby="vertical-cards">
          <SectionIntro kicker="Verticals" title="Each vertical plugs into the same engine" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((vertical) => (
              <article key={vertical.title} className="engine-panel-quiet p-5">
                <h3 className="font-[var(--disp)] text-lg font-semibold text-white">{vertical.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{vertical.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 pb-8">
          <article className="engine-panel p-6 sm:p-8">
            <p className="max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Every vertical uses the same Tokenization Engine and Collateral Engine. Only the intake requirements, verification standards, and risk tiers change per policy pack.
            </p>
          </article>
          <div className="mt-8">
            <EngineCta label="Start Intake" href="/intake" secondaryLabel="System Architecture" secondaryHref="/architecture" />
          </div>
        </section>
      </section>
    </main>
  )
}
