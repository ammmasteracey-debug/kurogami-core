import Image from 'next/image'

export default function SolanaPage() {
  return (
    <main className="solana-shell min-h-screen bg-[#030406] text-[var(--text)]">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <div className="solana-hero rounded-[2rem] border border-white/10 bg-[rgba(7,8,14,0.9)] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.38)] sm:p-10 lg:p-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="solana-kicker">Solana Rails</p>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <h1 className="solana-title text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                Why Kurogami settles on high-throughput culture rails
              </h1>
              <div className="solana-divider my-8" />
              <p className="max-w-3xl text-lg leading-8 text-[rgba(233,238,243,0.84)] sm:text-xl">
                A world with artists, keys, agents, and expanding virtual activity needs rails that can move fast without breaking the experience.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative flex h-[280px] w-full max-w-[340px] items-center justify-center rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(240,194,74,0.16),transparent_60%)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
                <Image
                  src="/images/solana-logo.jpg"
                  alt="Solana logo"
                  width={320}
                  height={320}
                  className="h-full w-full rounded-[1.2rem] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <article className="solana-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="solana-section-title">The Rail Problem</p>
          <div className="solana-divider-sm my-5" />
          <p className="solana-paragraph">
            Cultural systems fail when the base layer is too slow, too expensive, too fragmented, and too hostile for normal users and creators.
          </p>
          <p className="solana-paragraph mt-5">
            If every action costs friction, the world dies in the wallet prompt.
          </p>
        </article>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="solana-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
            <p className="solana-section-title">Why Solana</p>
            <div className="solana-divider-sm my-5" />
            <p className="solana-paragraph">
              Solana is chosen for Kurogami because it prioritizes high throughput, low transaction cost, fast finality, consumer-grade interaction potential, and a growing ecosystem of markets, NFTs, agents, and financial primitives.
            </p>
            <p className="solana-paragraph mt-5">
              For a project that includes NFT keys, artist networks, future packs and mods economies, agentic systems, and on-chain capital loops, execution quality matters as much as narrative quality.
            </p>
          </article>

          <article className="solana-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
            <p className="solana-section-title">What Solana Enables for Kurogami</p>
            <div className="solana-divider-sm my-5" />
            <ul className="solana-list space-y-3">
              <li>Access mints and key distribution with usable fees</li>
              <li>Artist and holder participation without punishing gas theater</li>
              <li>Future in-world markets for packs, mods, and creative assets</li>
              <li>Agentic systems that need frequent low-cost interactions</li>
              <li>Capital loops that can move between ownership objects and active use</li>
            </ul>
          </article>
        </div>

        <article className="solana-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="solana-section-title">Institutional Money and New Rails</p>
          <div className="solana-divider-sm my-5" />
          <p className="solana-paragraph">
            Capital is not only looking for another coin. It is looking for places where real activity can settle, digital ownership is enforceable, new markets can form without legacy chokepoints, and creators and operators can coordinate on-chain.
          </p>
          <p className="solana-paragraph mt-5">
            As institutions and larger allocators explore on-chain markets, they need rails that can support volume and real products, not only experiments.
          </p>
          <p className="solana-paragraph mt-5">
            Solana has become one of the primary environments where consumer crypto behavior concentrates, NFT and trading cultures already exist, builders ship interactive products, and liquidity and attention can meet application design.
          </p>
          <p className="solana-paragraph mt-5">
            Kurogami positions itself on those rails so the cultural system and the financial system can share the same settlement layer.
          </p>
        </article>

        <article className="solana-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="solana-section-title">Hybrid Reality</p>
          <div className="solana-divider-sm my-5" />
          <p className="solana-paragraph">
            Kurogami can remain culturally omnipresent while using Solana as the primary execution environment. The point is not chain religion. The point is fit.
          </p>
          <p className="solana-paragraph mt-5">
            The world needs speed, cost efficiency, composability, and room for consumer-scale behavior. Solana is selected as the working rail for that design.
          </p>
        </article>

        <article className="solana-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="solana-section-title">System Diagram</p>
          <div className="solana-divider-sm my-5" />
          <div className="solana-diagram">
            <div className="solana-node">User / Artist</div>
            <div className="solana-arrow">→</div>
            <div className="solana-node">Key</div>
            <div className="solana-arrow">→</div>
            <div className="solana-node">Solana Settlement</div>
            <div className="solana-arrow">→</div>
            <div className="solana-node">World Activity</div>
          </div>
        </article>

        <article className="solana-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="solana-section-title">The Strategic Read</p>
          <div className="solana-divider-sm my-5" />
          <p className="solana-paragraph">
            Old rails optimized for scarcity theater and institutional custody narratives. New rails optimize for activity.
          </p>
          <p className="solana-paragraph mt-5">
            Kurogami is an activity system: artists creating, holders entering, keys opening layers, agents operating, virtual districts forming. That kind of system belongs on rails built for movement.
          </p>
        </article>

        <article className="solana-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="solana-section-title">Disclaimer</p>
          <div className="solana-divider-sm my-5" />
          <p className="solana-paragraph">
            Infrastructure choices can evolve with product needs. This page explains current design rationale, not investment advice.
          </p>
        </article>
      </section>
    </main>
  )
}