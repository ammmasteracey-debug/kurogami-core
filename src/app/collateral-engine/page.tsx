import Link from 'next/link'
import { EngineCta, EngineHeader, ObjectCard, SectionIntro } from '../../components/engine/EngineUI'

const loopSteps = [
  { title: 'Deposit', body: 'Post an eligible Asset NFT or reserve units as collateral.' },
  { title: 'Borrow capacity', body: 'Receive borrow capacity determined by asset tier and policy.' },
  { title: 'Monitor', body: 'Track your health factor as market and asset conditions change.' },
  { title: 'Deploy', body: 'Deploy liquidity into the desk, an acquisition, or a strategy.' },
  { title: 'Repay and unlock', body: 'Repay the position and unlock the underlying collateral.' }
]

const tiers = [
  { tier: 'Tier A', assets: 'Reserve / gold-backed units', ltv: 'Up to 70% LTV' },
  { tier: 'Tier B', assets: 'Real estate, watches, verified collectibles', ltv: 'Up to 55% LTV' },
  { tier: 'Tier C', assets: 'Fashion inventory, fleet, emerging verticals', ltv: 'Up to 35% LTV' }
]

export default function CollateralEnginePage() {
  return (
    <main className="engine-shell relative overflow-hidden text-[var(--text-1)]">
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <EngineHeader
          kicker="Kurogami / Collateral Engine"
          title="Collateral Engine"
          subtitle="Unlock liquidity without forced sale."
        />

        <section className="mt-12" aria-labelledby="collateral-loop">
          <SectionIntro kicker="01 / The Loop" title="Deposit, borrow, deploy, repay" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {loopSteps.map((step) => <ObjectCard key={step.title} title={step.title} body={step.body} />)}
          </div>
          <article className="engine-panel mt-6 p-6 sm:p-8">
            <p className="text-base leading-8 text-white/80 sm:text-lg">Your asset remains productive while posted as collateral.</p>
          </article>
        </section>

        <section className="mt-14" aria-labelledby="health-factor">
          <SectionIntro kicker="02 / Health Factor" title="Conservative risk framing" />
          <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <article className="engine-panel p-6 sm:p-8">
              <p className="text-sm leading-7 text-white/70">
                Health factor measures the ratio between your collateral value and your outstanding borrow, adjusted for the asset&rsquo;s tier and liquidity discount. A health factor above 1.0 means the position is safely collateralized.
              </p>
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-white/50">
                  <span>Health Factor</span>
                  <span className="text-[var(--gold)]">1.62</span>
                </div>
                <div className="health-bar-track mt-2">
                  <div className="health-bar-fill" style={{ width: '72%' }} />
                </div>
                <p className="mt-3 text-xs leading-6 text-white/45">Placeholder value. Live health factor is available inside the Collateral Dashboard once a position is opened.</p>
              </div>
            </article>
            <article className="engine-panel-quiet p-6 sm:p-8">
              <p className="engine-kicker">Risk Framing</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
                <li>Borrow capacity is set per asset tier, not a flat rate across all collateral.</li>
                <li>Positions approaching the liquidation threshold are flagged before action is required.</li>
                <li>Liquidation is a last resort, applied per vertical policy, not a blanket rule.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="mt-14 pb-8" aria-labelledby="tiers">
          <SectionIntro kicker="03 / Collateral Tiers" title="Borrow capacity by asset class" />
          <div className="engine-panel mt-6 overflow-x-auto p-2">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.14em] text-white/50">
                  <th className="p-4">Tier</th>
                  <th className="p-4">Eligible Assets</th>
                  <th className="p-4">Borrow Capacity</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((row) => (
                  <tr key={row.tier} className="data-row">
                    <td className="p-4 font-[var(--disp)] text-white">{row.tier}</td>
                    <td className="p-4 text-white/70">{row.assets}</td>
                    <td className="p-4 text-[var(--gold)]">{row.ltv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <EngineCta label="Open Collateral Dashboard" href="/portfolio" secondaryLabel="Request Access" secondaryHref="/access" />
          </div>
          <p className="mt-5 text-xs leading-6 text-white/40">
            Collateral positions carry liquidation risk. Borrow capacity and tiers are illustrative and subject to policy and market conditions. See <Link href="/architecture" className="underline hover:text-[var(--gold)]">System Architecture</Link> for how the Collateral Engine connects to Vaults and Markets.
          </p>
        </section>
      </section>
    </main>
  )
}
