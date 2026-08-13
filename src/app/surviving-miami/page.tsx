import Image from 'next/image'
import Link from 'next/link'

export default function SurvivingMiamiPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
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

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className="rounded-[2rem] border border-white/10 bg-[rgba(7,8,14,0.88)] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.38)] sm:p-10 lg:p-14">
          <p className="font-mono text-[0.78rem] uppercase tracking-[0.32em] text-[var(--gold)]">Kurogami World</p>
          <h1 className="mt-5 font-[var(--disp)] text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
            The public face of Kurogami World
          </h1>
          <div className="my-8 h-px w-24 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="max-w-4xl text-lg leading-8 text-[rgba(233,238,243,0.88)] sm:text-xl">
            Kurogami World is not a closed cast.
            <br />
            It is an open streaming network for culture in motion.
          </p>
          <p className="mt-6 max-w-4xl text-base leading-8 text-[rgba(233,238,243,0.78)] sm:text-lg">
            Stream where you are. Build in public. Hold the key to the deeper world.
          </p>
        </article>

        <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
          <p className="font-mono text-[0.76rem] uppercase tracking-[0.3em] text-[var(--gold)]">What It Is</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="text-base leading-8 text-[rgba(233,238,243,0.84)] sm:text-lg">
            Kurogami World began as a Miami-rooted cultural stream surface.
            <br />
            It is expanding into an open network where artists, operators, and culture-makers can broadcast from their actual lives — not only from one house or one fixed cast.
          </p>
        </article>

        <article className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] shadow-[0_30px_80px_rgba(0,0,0,0.26)]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/kurogami-world-stream.jpg"
              alt="Kurogami World stream visual"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="p-6 sm:p-8">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--gold)]">Featured</p>
            <p className="mt-3 text-base leading-8 text-[rgba(233,238,243,0.82)] sm:text-lg">
              Kurogami World in-frame: the live cultural surface that opens into the wider network.
            </p>
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
            <p className="font-mono text-[0.76rem] uppercase tracking-[0.3em] text-[var(--gold)]">The old model</p>
            <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <ul className="space-y-3 text-base leading-8 text-[rgba(233,238,243,0.84)] sm:text-lg">
              <li>- limited cast</li>
              <li>- limited location</li>
              <li>- attention trapped in one show format</li>
            </ul>
          </article>

          <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
            <p className="font-mono text-[0.76rem] uppercase tracking-[0.3em] text-[var(--gold)]">The Kurogami model</p>
            <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <ul className="space-y-3 text-base leading-8 text-[rgba(233,238,243,0.84)] sm:text-lg">
              <li>- open participation</li>
              <li>- global expansion potential</li>
              <li>- NFT key as access layer</li>
              <li>- art as the visible face of entry</li>
            </ul>
          </article>
        </div>

        <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
          <p className="font-mono text-[0.76rem] uppercase tracking-[0.3em] text-[var(--gold)]">The Model</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

          <div className="space-y-8 text-[rgba(233,238,243,0.84)]">
            <div>
              <h3 className="text-xl font-semibold text-white">1. Public Face</h3>
              <p className="mt-3 text-base leading-8 sm:text-lg">
                People stream process, presence, nights, work, and culture.
                <br />
                No forced talking-head performance required.
                <br />
                The camera can run while creation continues.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">2. The Key</h3>
              <p className="mt-3 text-base leading-8 sm:text-lg">
                Founding art → NFT at launch → access.
                <br />
                The art is what people can see and desire.
                <br />
                The NFT is the instrument that opens systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">3. Backend Utility</h3>
              <p className="mt-3 text-base leading-8 sm:text-lg">Holders gain exposure to Kurogami infrastructure:</p>
              <ul className="mt-2 space-y-2 text-base leading-8 sm:text-lg">
                <li>- network access</li>
                <li>- cultural positioning</li>
                <li>- future world layers</li>
                <li>- $KRG allocation tied to holdings</li>
                <li>- pathway into gated virtual expansion</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">4. Global Expansion</h3>
              <p className="mt-3 text-base leading-8 sm:text-lg">
                The same model can extend beyond Miami.
                <br />
                Other cities / countries can run local cultural nodes under the same key system.
                <br />
                Kurogami World is the first node, not the cage.
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
          <p className="font-mono text-[0.76rem] uppercase tracking-[0.3em] text-[var(--gold)]">How to Join (Presale)</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <div className="space-y-6 text-[rgba(233,238,243,0.84)]">
            <div>
              <h3 className="text-lg font-semibold text-white">Step 1 — Reserve founding art</h3>
              <p className="mt-2 text-base leading-8 sm:text-lg">Purchase during presale. Each piece is limited by what the artists actually create.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Step 2 — Receive NFT at launch</h3>
              <p className="mt-2 text-base leading-8 sm:text-lg">Your art converts into the corresponding key NFT when the collection goes live.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Step 3 — Receive $KRG allocation</h3>
              <p className="mt-2 text-base leading-8 sm:text-lg">Allocation is based on the number of NFTs you hold. More keys = larger allocation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Step 4 — Enter the network</h3>
              <p className="mt-2 text-base leading-8 sm:text-lg">Access Kurogami World / open stream surfaces and deeper layers as they unlock.</p>
            </div>
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
            <p className="font-mono text-[0.76rem] uppercase tracking-[0.3em] text-[var(--gold)]">Why Multiple Keys Matter</p>
            <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <p className="text-base leading-8 text-[rgba(233,238,243,0.84)] sm:text-lg">One key opens the door. Multiple keys increase:</p>
            <ul className="mt-2 space-y-2 text-base leading-8 text-[rgba(233,238,243,0.84)] sm:text-lg">
              <li>- $KRG allocation weight</li>
              <li>- founding status density</li>
              <li>- future access priority</li>
              <li>- stronger alignment with the system’s growth</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-[rgba(233,238,243,0.84)] sm:text-lg">
              This is intentional.
              <br />
              The network rewards committed holders, not passive spectators.
            </p>
          </article>

          <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
            <p className="font-mono text-[0.76rem] uppercase tracking-[0.3em] text-[var(--gold)]">Who This Is For</p>
            <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <ul className="space-y-2 text-base leading-8 text-[rgba(233,238,243,0.84)] sm:text-lg">
              <li>- Artists who want distribution without leaving their process</li>
              <li>- Collectors who want origin art plus infrastructure exposure</li>
              <li>- Operators who want into a living cultural network</li>
              <li>- Blue-chip communities seeking a world layer beyond PFP status</li>
            </ul>
          </article>
        </div>

        <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
          <p className="font-mono text-[0.76rem] uppercase tracking-[0.3em] text-[var(--gold)]">The Line</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="text-lg leading-8 text-white/90 sm:text-xl">
            Kurogami World makes culture visible.
            <br />
            Kurogami makes culture ownable.
            <br />
            The key connects both.
          </p>
        </article>

        <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
          <p className="font-mono text-[0.76rem] uppercase tracking-[0.3em] text-[var(--gold)]">Next Action</p>
          <div className="mx-auto my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="text-base leading-8 text-[rgba(233,238,243,0.84)] sm:text-lg">Turn visibility into position with key ownership and system-level access.</p>
          <div className="herocta mt-8 justify-center">
            <Link href="/" className="btn btn-primary">Reserve Founding Art</Link>
            <Link href="/token" className="btn btn-token">Explore $KRG</Link>
            <Link href="/lore" className="btn btn-secondary">Read the Lore</Link>
          </div>
        </article>
      </section>
    </main>
  )
}