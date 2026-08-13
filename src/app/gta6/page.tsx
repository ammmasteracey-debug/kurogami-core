import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function GTA6Page() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <section className="section-hero relative z-10 min-h-[calc(100vh-6rem)] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-white/10 bg-[#08101f]/80 p-10 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 py-2 backdrop-blur-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/25 bg-white/10 p-1.5">
                    <Image src="/images/kurogami-load.jpg" alt="Kurogami World logo" width={40} height={40} className="h-full w-full rounded-full object-contain" />
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-300">Kurogami World</p>
                    <p className="text-[0.72rem] text-slate-300">Founding creator layer</p>
                  </div>
                </div>
                <p className="label mt-6 uppercase tracking-[0.35em] text-cyan-300">GTA6 Layer</p>
                <h1 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl">
                  GTA6 Integration for Founding Creators
                </h1>
                <p className="mt-6 max-w-3xl text-xl text-slate-300 sm:text-2xl">
                  A unique collaboration layer designed to bring artist identity, world access, and creator power into a private GTA6 RP ecosystem.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link href="/" className="btn btn-secondary w-full sm:w-auto">
                    Back to Kurogami Landing
                  </Link>
                  <a href="#why" className="btn btn-primary w-full sm:w-auto">
                    Explore GTA6 Benefits
                  </a>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-[#0b1625]/80 p-2 shadow-[0_25px_80px_rgba(8,22,37,0.45)]">
                <Image
                  src="/images/gta6 logo.jpg"
                  alt="GTA6 premium launch"
                  width={900}
                  height={900}
                  className="h-full w-full rounded-[1.75rem] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="section-panel relative z-10 border-t border-white/10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-14 lg:grid-cols-[0.95fr_0.9fr]">
          <div>
            <p className="label">WHY THIS SERVER IS DIFFERENT</p>
            <h2 className="section-title mt-4">
              A controlled GTA6 RP layer built around creator economics, not just traffic.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              This isn’t a public grind server. It is an inviteable environment where artist IP, custom identity, and tactical brand storytelling are enabled through a real-time GTA6 world.
            </p>
            <div className="mt-6">
              <Image src="/images/GTA62.jpg" alt="GTA6 detail middle" width={720} height={420} className="rounded-lg w-full h-auto object-cover" />
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="feature-card">
                <h3>Artist-first access</h3>
                <p>Lock in a visible creator presence inside a GTA6 RP experience while remaining exclusive and controlled.</p>
              </div>
              <div className="feature-card">
                <h3>Not a hype server</h3>
                <p>Designed for high-value storytelling and on-chain identity, not just player popularity or spam engagement.</p>
              </div>
              <div className="feature-card">
                <h3>Layered creator rights</h3>
                <p>Creators keep rights to how their work is used inside the server and receive curated placement as part of the experience.</p>
              </div>
              <div className="feature-card">
                <h3>Invitation-first flow</h3>
                <p>Entry is ruled by creative fit and brand strategy, not by join links and open servers.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="panel-card bg-[#0a111f]/90 p-8">
              <p className="label">ARTIST BENEFITS</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Creative ownership with in-world impact</h3>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-slate-300">
                <li>Custom GTA6 identity and brand placement by founding artists.</li>
                <li>Dedicated exposure in a premium RP narrative designed for culturally relevant drops.</li>
                <li>New revenue and rights pathways tied to world-facing live experiences.</li>
              </ul>
            </div>

            <div className="panel-card bg-[#0a111f]/90 p-8">
              <p className="label">HOLDER BENEFITS</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">A real path from art to immersive access</h3>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-slate-300">
                <li>Private access into the GT A6 server through art-key gated entry.</li>
                <li>Roles and narrative presence that reflect cultural ownership rather than passive attendance.</li>
                <li>Priority on participation, creator meetups, and curated live activations.</li>
              </ul>
            </div>

            <div className="panel-card bg-[#0a111f]/90 p-8">
              <p className="label">ENTRY FLOW</p>
              <ol className="mt-6 list-decimal space-y-3 pl-5 text-slate-300">
                <li>Acquire founding art to secure a GTA6 role and server pathway.</li>
                <li>Receive curated onboarding and invitation to the private GT A6 creative environment.</li>
                <li>Engage with artists, brand teams, and world builders in a high-touch access layer.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cta relative z-10 border-t border-white/10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[#07101d]/80 p-10 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] items-center">
            <div>
              <p className="label uppercase tracking-[0.35em] text-cyan-300">CREATOR ECONOMY</p>
              <h2 className="section-title mt-4">A high-signal creator layer made for premium drops.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                This GTA6 integration isn’t a generic event. It is a curated digital stage where artist ownership, brand collaboration, and live world dynamics intersect in a premium server environment.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#contact" className="btn btn-primary w-full sm:w-auto">
                  Reserve GTA6 Access
                </a>
                <Link href="/" className="btn btn-secondary w-full sm:w-auto">
                  Return to Kurogami Main
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0a1320]/80 p-8">
              <Image src="/images/GTA61.jpg" alt="GTA6 world showcase" width={900} height={500} className="rounded-lg mb-8 w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_42%)]" />
              <div className="relative space-y-5">
                <div className="rounded-3xl border border-white/10 bg-[#08101f]/90 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white">Creator-first access</h3>
                  <p className="mt-3 text-slate-300">A gated platform where collaboration and IP are valued over raw player volume.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#08101f]/90 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white">Premium visibility</h3>
                  <p className="mt-3 text-slate-300">Founding work becomes a part of the narrative, not just a background visual.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#08101f]/90 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white">Selective pathway</h3>
                  <p className="mt-3 text-slate-300">The goal is a curated launch experience backed by artist economy and long-term cultural positioning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[#07101d]/80 p-10 text-center shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
          <p className="label uppercase tracking-[0.35em] text-cyan-300">NEXT ACTION</p>
          <h2 className="section-title mt-4">Enter with ownership, not spectatorship.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Claim a founding position, understand the token layer, and move through the wider network stack.
          </p>
          <div className="herocta mt-8 justify-center">
            <Link href="/" className="btn btn-primary">Reserve Founding Art</Link>
            <Link href="/token" className="btn btn-token">Explore $KRG</Link>
            <Link href="/surviving-miami" className="btn btn-secondary">Kurogami World</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
