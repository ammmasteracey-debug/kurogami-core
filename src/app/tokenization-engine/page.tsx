import { EngineCta, EngineHeader, FlowSteps, ObjectCard, SectionIntro } from '../../components/engine/EngineUI'

const whatItDoes = [
  { title: 'Intake', body: 'Submit an asset for structuring: documentation, ownership records, and declared value.' },
  { title: 'Verify', body: 'Independent verification of title, condition, and provenance against vertical policy.' },
  { title: 'Legal wrap', body: 'The asset is wrapped in a compliant holding structure that anchors on-chain rights.' },
  { title: 'Mint Asset NFT', body: 'A standardized Asset NFT is minted, representing verified ownership on-chain.' },
  { title: 'Vault / use', body: 'The Asset NFT is held, fractionalized, posted as collateral, or deployed into a strategy.' }
]

const coreObjects = [
  { title: 'Asset Record', body: 'The verified, off-chain source of truth: documentation, valuation, and legal wrapper.' },
  { title: 'Asset NFT', body: 'The on-chain unit representing ownership of a verified real-world asset.' },
  { title: 'Fractional Units', body: 'Divisible ownership shares issued against a single Asset NFT.' },
  { title: 'Position NFT', body: 'Represents an active deployment of an asset — collateralized, vaulted, or strategy-linked.' },
  { title: 'Vertical Vault Shares', body: 'Pooled exposure across a policy pack, such as reserve, real estate, or watches.' }
]

export default function TokenizationEnginePage() {
  return (
    <main className="engine-shell relative overflow-hidden text-[var(--text-1)]">
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <EngineHeader
          kicker="Kurogami / Tokenization Engine"
          title="Tokenization Engine"
          subtitle="Turn verified real-world value into composable on-chain units."
        />

        <section className="mt-12" aria-labelledby="what-it-does">
          <SectionIntro kicker="01 / What It Does" title="From verified asset to on-chain unit" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {whatItDoes.map((step) => <ObjectCard key={step.title} title={step.title} body={step.body} />)}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="process-flow">
          <SectionIntro kicker="02 / Process Flow" title="Intake to lifecycle" />
          <div className="mt-6">
            <FlowSteps steps={['Intake', 'Verification', 'Underwriting', 'Mint', 'Collateral or Vault', 'Lifecycle']} />
          </div>
        </section>

        <section className="mt-14" aria-labelledby="core-objects">
          <SectionIntro kicker="03 / Core Objects" title="Standardized on-chain primitives" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {coreObjects.map((object) => <ObjectCard key={object.title} title={object.title} body={object.body} />)}
          </div>
        </section>

        <section className="mt-14 pb-8" aria-labelledby="why-it-matters">
          <SectionIntro kicker="04 / Why It Matters" title="Own it, vault it, borrow against it, index it" />
          <article className="engine-panel mt-6 p-6 sm:p-9">
            <p className="max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
              Standardized assets that can be owned, vaulted, borrowed against, and indexed.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/65">
              Every Asset NFT follows the same lifecycle rules regardless of vertical, so collateral, markets, and portfolio tooling can treat any tokenized asset as a composable unit.
            </p>
          </article>
          <div className="mt-8">
            <EngineCta label="Start Intake" href="/access" secondaryLabel="Collateral Engine" secondaryHref="/collateral-engine" />
          </div>
        </section>
      </section>
    </main>
  )
}
