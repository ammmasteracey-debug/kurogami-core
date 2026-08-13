import Image from 'next/image'
import Link from 'next/link'

export default function TokenPage() {
  return (
    <main className="token-shell relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/kurogami-world-hero.jpg"
          alt="Kurogami World background"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-black/72" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <div className="token-hero rounded-[2rem] border border-white/10 bg-[rgba(7,8,14,0.9)] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.38)] sm:p-10 lg:p-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="token-kicker">$KRG</p>
            <Link href="/" className="text-sm uppercase tracking-[0.28em] text-[var(--gold)] transition-opacity hover:opacity-80">
              Back to Main
            </Link>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <h1 className="token-title text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                The monetary layer of Kurogami World
              </h1>
              <div className="token-divider my-8" />
              <p className="max-w-3xl text-lg leading-8 text-[rgba(233,238,243,0.84)] sm:text-xl">
                If Bitcoin is hardened money for the open internet, $KRG is designed as the coordinating asset inside a cultural-economic world.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative flex h-[280px] w-full max-w-[340px] items-center justify-center rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(240,194,74,0.16),transparent_60%)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
                <Image
                  src="/images/kurogami-load.jpg"
                  alt="Kurogami World logo"
                  width={900}
                  height={900}
                  className="h-full w-full rounded-[1.75rem] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="token-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
            <p className="token-section-title">What $KRG Is</p>
            <div className="token-divider-sm my-5" />
            <p className="token-paragraph">
              $KRG is the native token of Kurogami World. It is designed to move value across access and membership layers, artist and network incentives, in-world economic activity, staking and collateral pathways, and future virtual-economy participation.
            </p>
            <p className="token-paragraph mt-5">
              It is not a meme with no job. It is infrastructure money for a specific system.
            </p>
          </article>

          <article className="token-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
            <p className="token-section-title">The BTC Comparison</p>
            <div className="token-divider-sm my-5" />
            <div className="overflow-hidden rounded-[1.2rem] border border-white/10">
              <div className="grid grid-cols-3 border-b border-white/10 bg-white/5 text-sm uppercase tracking-[0.24em] text-[var(--gold)]">
                <div className="p-3">Layer</div>
                <div className="border-l border-white/10 p-3">Bitcoin</div>
                <div className="border-l border-white/10 p-3">$KRG</div>
              </div>
              <div className="grid grid-cols-3 border-b border-white/10 text-sm text-white/85">
                <div className="p-3 font-semibold text-[var(--gold)]">Role</div>
                <div className="border-l border-white/10 p-3">Hardened neutral money</div>
                <div className="border-l border-white/10 p-3">Coordinating asset inside Kurogami</div>
              </div>
              <div className="grid grid-cols-3 border-b border-white/10 text-sm text-white/85">
                <div className="p-3 font-semibold text-[var(--gold)]">Primary function</div>
                <div className="border-l border-white/10 p-3">Settlement and store-of-value</div>
                <div className="border-l border-white/10 p-3">Access, incentives, and world activity</div>
              </div>
              <div className="grid grid-cols-3 text-sm text-white/85">
                <div className="p-3 font-semibold text-[var(--gold)]">Structure</div>
                <div className="border-l border-white/10 p-3">Money outside applications</div>
                <div className="border-l border-white/10 p-3">Money operating inside a world</div>
              </div>
            </div>
          </article>
        </div>

        <article className="token-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="token-section-title">Why a World Needs Its Own Monetary Layer</p>
          <div className="token-divider-sm my-5" />
          <p className="token-paragraph">
            A cultural economy needs more than attention. It needs a unit that can price access, reward contribution, settle internal activity, align long-term holders with system growth, and connect physical founding art and NFT keys to broader participation.
          </p>
          <p className="token-paragraph mt-5">
            Without a native unit, every action depends on external money and external platforms. With a native unit, the world can coordinate itself.
          </p>
        </article>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="token-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
            <p className="token-section-title">Utility Surfaces</p>
            <div className="token-divider-sm my-5" />
            <ul className="token-list space-y-3">
              <li>Access and tier signaling inside Kurogami systems</li>
              <li>Incentives for artists, operators, and network growth</li>
              <li>Settlement medium for internal markets and future packs/mods economies</li>
              <li>Collateral and staking pathways as infrastructure matures</li>
              <li>Alignment asset for holders who want exposure to the whole stack, not one isolated drop</li>
            </ul>
          </article>

          <article className="token-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
            <p className="token-section-title">Relationship to Founding Art / NFTs</p>
            <div className="token-divider-sm my-5" />
            <p className="token-paragraph">
              Founding art and NFT keys are access and origin objects. $KRG is the circulating monetary layer around the system those keys open.
            </p>
            <p className="token-paragraph mt-5">
              One is passage and identity. One is coordination and flow. Together they form ownership + movement.
            </p>
          </article>
        </div>

        <article className="token-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="token-section-title">Design Principles</p>
          <div className="token-divider-sm my-5" />
          <p className="token-paragraph">
            Scarcity with purpose. Utility before theater. No fake yield promises. Long-term system alignment. Compatibility with Solana execution rails.
          </p>
        </article>

        <article className="token-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 sm:p-10">
          <p className="token-section-title">Clear Disclaimer</p>
          <div className="token-divider-sm my-5" />
          <p className="token-paragraph">
            $KRG is not a guaranteed return product. Value depends on execution, adoption, and market conditions. This page explains role and design, not financial advice.
          </p>
        </article>

        <article className="token-card rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 text-center sm:p-10">
          <p className="token-section-title">Next Action</p>
          <div className="token-divider-sm mx-auto my-5" />
          <p className="token-paragraph">Pair monetary exposure with system access and public cultural visibility.</p>
          <div className="herocta mt-8 justify-center">
            <Link href="/" className="btn btn-primary">Reserve Founding Art</Link>
            <Link href="/surviving-miami" className="btn btn-secondary">Kurogami World</Link>
            <Link href="/solana" className="btn btn-token">Solana Rails</Link>
          </div>
        </article>
      </section>
    </main>
  )
}
