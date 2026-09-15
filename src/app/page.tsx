'use client'

import Link from 'next/link'
import { EngineCta, FlowSteps, LoopSteps } from '../components/engine/EngineUI'

const loop = ['Generate', 'Harden', 'Collateralize', 'Deploy', 'Acquire', 'Tokenize', 'Compound']

const surfaces = [
  { title: 'Tokenization Engine', body: 'Turn verified real-world value into composable on-chain units.', href: '/tokenization-engine' },
  { title: 'Collateral Engine', body: 'Unlock liquidity against tokenized assets without forced sale.', href: '/collateral-engine' },
  { title: 'Markets', body: 'Ownership, collateral, yield, and event surfaces for real-world value.', href: '/markets' },
  { title: 'Portfolio OS', body: 'See balances, positions, and exposure across the full loop.', href: '/portfolio' },
  { title: 'Asset Verticals', body: 'One engine, policy packs for reserve, real estate, watches, art, and more.', href: '/verticals' },
  { title: 'System Architecture', body: 'How the tokenization, collateral, and desk layers connect.', href: '/architecture' }
]

export default function HomePage() {
  return (
    <main className="engine-shell relative overflow-hidden text-[var(--text-1)]">
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="engine-panel mx-auto flex min-h-[62vh] max-w-4xl flex-col justify-center p-7 text-center sm:p-14">
          <p className="engine-kicker">Kurogami Protocol</p>

          <div className="mx-auto mt-5 flex w-full max-w-[220px] items-center justify-center rounded-[1.3rem] border border-[var(--gold)]/20 bg-black/20 p-4 shadow-[0_0_30px_rgba(240,194,74,0.08)]">
            <img
              src="/images/kurogami-official-logo.jpg"
              alt="Kurogami official logo"
              className="h-auto w-full object-contain"
            />
          </div>

          <h1 className="mt-5 font-[var(--disp)] text-5xl font-semibold leading-[0.95] text-white sm:text-7xl">Kurogami</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-2xl">The portfolio structuring protocol for real-world assets.</p>
          <p className="engine-kicker mt-4">Tokenize. Collateralize. Deploy. Compound.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('kurogami-open-access'))} className="btn btn-gold">Launch App</button>
            <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('kurogami-open-access'))} className="btn btn-gold-outline">View Architecture</button>
          </div>
        </div>

        <section className="mt-14" aria-labelledby="the-loop">
          <div className="border-b border-white/10 pb-5">
            <p className="engine-kicker">The Loop</p>
            <h2 id="the-loop" className="mt-3 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">One system, seven stages</h2>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <LoopSteps steps={loop} />
            <article className="engine-panel p-6 sm:p-8">
              <p className="text-base leading-8 text-white/80 sm:text-lg">
                Kurogami connects active capital generation with real-world asset tokenization and collateralized deployment in one system.
              </p>
              <p className="mt-4 text-base leading-8 text-white/65">
                Capital is generated, hardened into durable form, and posted as collateral. Liquidity is deployed to acquire and tokenize real-world assets, which re-enter the loop as productive, composable positions.
              </p>
              <div className="mt-6">
                <EngineCta label="Start Intake" href="#" secondaryLabel="Open Collateral Dashboard" secondaryHref="#" />
              </div>
            </article>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="core-surfaces">
          <div className="border-b border-white/10 pb-5">
            <p className="engine-kicker">Core Surfaces</p>
            <h2 id="core-surfaces" className="mt-3 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">The protocol layer</h2>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {surfaces.map((surface) => (
              <Link key={surface.title} href={surface.href} className="engine-panel-quiet block p-5 transition-colors hover:border-[var(--gold)]/40">
                <h3 className="font-[var(--disp)] text-lg font-semibold text-white">{surface.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{surface.body}</p>
                <span className="mt-4 inline-block engine-kicker">Enter →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 pb-8" aria-labelledby="process-flow">
          <div className="border-b border-white/10 pb-5">
            <p className="engine-kicker">Trading + Tokenization</p>
            <h2 id="process-flow" className="mt-3 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">One portfolio system</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">Trading generates capital. Kurogami structures, protects, and scales it.</p>
          </div>
          <div className="mt-6">
            <FlowSteps steps={['Desk', 'Intake', 'Collateral', 'Deploy', 'Tokenize']} />
          </div>
          <div className="mt-8">
            <EngineCta label="Request Access" href="#" secondaryLabel="View Architecture" secondaryHref="/architecture" />
          </div>
        </section>
      </section>
    </main>
  )
}
