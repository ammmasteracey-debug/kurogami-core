'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const clubLanes = [
  {
    name: 'Gami Boyz',
    description: 'Brotherhood lane. Raw culture. Access. Motion.',
    href: 'https://gami-boyz.vercel.app/',
    cta: 'Enter Gami Boyz',
  },
]

const assetProtocols = [
  {
    name: 'Fashion Protocol',
    description: 'Drops, provenance, tokenization.',
    href: 'https://kurogami-fashion.vercel.app/',
    cta: 'Enter Fashion',
  },
  {
    name: 'Real Estate Protocol',
    description: 'Property packaging, claim surfaces, spatial open-house direction.',
    href: 'https://kurogami-real-estate.vercel.app/',
    cta: 'Enter Real Estate',
  },
  {
    name: 'Watches Protocol',
    description: 'Timepiece packaging and provenance records.',
    href: 'https://kurogami-watches.vercel.app/',
    cta: 'Enter Watches',
  },
  {
    name: 'Cars Protocol',
    description: 'Automotive packaging and provenance records.',
    href: 'https://kurogami-cars.vercel.app/',
    cta: 'Enter Cars',
  },
  {
    name: 'Yachts Protocol',
    description: 'Marine asset packaging and provenance records.',
    href: 'https://kurogami-yachts.vercel.app/',
    cta: 'Enter Yachts',
  },
  {
    name: 'Art Protocol',
    description: 'Cultural works, provenance, and ownership records.',
    href: 'https://kurogami-art.vercel.app/',
    cta: 'Enter Art',
  },
]

const networkValues = [
  {
    title: 'Trading Edge',
    body: 'Most people are late or guessing. We run actual desks — day trading and meme positioning — with process, not vibes.',
  },
  {
    title: 'Alpha / Direction',
    body: 'Members get closer to the read: what’s moving, why it matters, and how capital is being positioned — instead of scrolling noise.',
  },
  {
    title: 'Incubation',
    body: 'If you have a brand, skill, or business, Kurogami helps structure it for the new rails so it can grow inside the network instead of alone.',
  },
  {
    title: 'New Economy Exposure',
    body: 'As tokenization, on-chain assets, and digital ownership expand, members are positioned early — not as spectators, but as participants with access.',
  },
  {
    title: 'Network',
    body: 'You’re around operators, artists, and deal-flow — not a random chat of spectators.',
  },
]

const incubationSectors = [
  {
    title: 'Trading Desk',
    body: 'Day trading and meme positioning run as real desks. Process, structure, and extraction, not signal groups.',
  },
  {
    title: 'Media & Motion',
    body: 'Drone, extreme sports, and high-visual content turned into service revenue and tokenized media assets. Capture now, own and distribute later.',
  },
  {
    title: 'Brand Incubation',
    body: 'We help operators and brands structure, package, and launch inside Kurogami rails: identity, offers, distribution, and on-chain access paths.',
  },
  {
    title: 'Real Estate',
    body: 'Property-linked media, tokenization paths, and access packages for developments, hosts, and investors.',
  },
  {
    title: 'Fashion',
    body: 'Creator and label infrastructure: drops, access, and brand systems built for the new economy.',
  },
  {
    title: 'Collectibles & Watches',
    body: 'High-signal physical assets with digital ownership, provenance, and network distribution.',
  },
]

const tokenizationWaves = [
  { title: 'Gold mining', detail: 'Hard-money extraction' },
  { title: 'Oil rigs', detail: 'Industrial power' },
  { title: 'Railroads', detail: 'Market connection' },
  { title: 'Internet', detail: 'Information and distribution' },
]

const tokenizationBridge = [
  'Trading edge to generate capital',
  'Incubation to build and package real sectors',
  'Tokenization paths for assets, media, and brands',
  'Network access to opportunities as the new economy forms',
]

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/kurogami-world-stream.jpg" alt="Kurogami World stream hero" fill priority className="object-cover object-center brightness-[0.62] contrast-[1.08] saturate-[1.1]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.92))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="club-command-frame mx-auto flex min-h-[68vh] max-w-4xl flex-col justify-center border border-[#f1c96a]/25 bg-[rgba(4,6,8,0.84)] p-7 text-center shadow-[0_34px_120px_rgba(0,0,0,0.58)] backdrop-blur-xl sm:p-12">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[var(--gold)]">Kurogami World / Club Access</p>
          <h1 className="mt-5 font-[var(--disp)] text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">Elite social club for culture, markets, and ownership rails</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">Exclusive access. Real utility.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/lanes" className="btn btn-primary">Enter the System</Link>
            <Link href="/roadmap" className="btn btn-secondary">Roadmap</Link>
          </div>
        </motion.section>

        <section className="mt-14" aria-labelledby="what-is-kurogami">
          <div className="border-b border-[#f1c96a]/20 pb-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">The Network</p>
            <h2 id="what-is-kurogami" className="mt-3 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">What is Kurogami</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">A key into a trading-led operator network for the new economy</p>
          </div>

          <article className="club-command-frame mt-6 border border-[#f1c96a]/25 bg-[rgba(4,6,8,0.9)] p-6 sm:p-9">
            <p className="max-w-3xl text-xl leading-8 text-white sm:text-2xl sm:leading-9">Kurogami is an operator network for the new economy.</p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">You don’t just buy a token and hope. You get access to real trading edge, structured opportunities, incubation for builders and brands, and exposure to higher-level deals as the system grows.</p>
            <p className="mt-5 max-w-3xl border-l border-[#f1c96a]/45 pl-4 text-base font-medium leading-8 text-[#f6d98c] sm:text-lg">The NFT is the key. Everything else is what the key opens.</p>
          </article>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {networkValues.map((value) => (
              <article key={value.title} className="club-instrument-panel min-h-56 border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-5">
                <h3 className="font-[var(--disp)] text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{value.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 border border-[#f1c96a]/25 bg-[#f1c96a]/[0.07] p-5 sm:p-6">
            <p className="text-base leading-8 text-[#f6d98c]">Kurogami is a key into a trading-led operator network that gives you edge, direction, incubation, and early exposure to the new economy.</p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/lanes" className="btn btn-primary">Enter the Network</Link>
            <Link href="/paths" className="btn btn-secondary">View Access Paths</Link>
          </div>
          <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/45">NFT = access. Access = edge, opportunities, and a real network building in the new economy.</p>
        </section>

        <section className="mt-14" aria-labelledby="tokenization-wave">
          <div className="border-b border-[#f1c96a]/20 pb-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">The Shift</p>
            <h2 id="tokenization-wave" className="mt-3 max-w-4xl font-[var(--disp)] text-3xl font-semibold leading-tight text-white sm:text-4xl">Tokenization Is the Next Infrastructure Wave</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">Gold. Oil. Railroads. The internet. Now ownership itself goes on-chain.</p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tokenizationWaves.map((wave, index) => (
              <article key={wave.title} className="club-instrument-panel border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-5">
                <span className="font-mono text-xs text-[var(--gold)]">0{index + 1}</span>
                <h3 className="mt-5 font-[var(--disp)] text-xl font-semibold text-white">{wave.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{wave.detail}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 border-l border-[#f1c96a]/45 pl-4 text-base leading-8 text-[#f6d98c] sm:text-lg">Tokenization is the next layer: real assets, media, brands, and cash-flow rights becoming digital, divisible, transferable, and programmable.</p>

          <article className="club-command-frame mt-6 border border-[#f1c96a]/25 bg-[rgba(4,6,8,0.9)] p-6 sm:p-9">
            <p className="text-xl leading-8 text-white sm:text-2xl sm:leading-9">This is not a meme cycle.</p>
            <p className="mt-2 text-xl leading-8 text-white sm:text-2xl sm:leading-9">It is infrastructure for the new economy.</p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">Most people will arrive late, after the rails are owned, the networks are formed, and the access is closed.</p>
          </article>

          <article className="club-instrument-panel mt-6 border border-[#f1c96a]/30 bg-[#f1c96a]/[0.07] p-6 sm:p-9">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">Why Kurogami</p>
            <h3 className="mt-4 font-[var(--disp)] text-2xl font-semibold text-white sm:text-3xl">Enter early with structure</h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">Kurogami exists so operators can enter early with structure:</p>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2">
              {tokenizationBridge.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-7 text-white/75"><span className="font-mono text-[var(--gold)]">0{index + 1}</span><span>{item}</span></li>)}
            </ol>
            <p className="mt-6 border-l border-[#f1c96a]/55 pl-4 text-base font-medium leading-8 text-[#f6d98c] sm:text-lg">Joining Kurogami is not about collecting a picture. It is about securing a key into the ownership layer while it is still being built.</p>
          </article>

          <p className="mt-6 font-[var(--disp)] text-2xl font-semibold leading-tight text-white sm:text-3xl">The last generation owned the internet platforms. This one can own the assets those platforms could only advertise.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/lanes" className="btn btn-primary">Enter the Network</Link>
            <Link href="/paths" className="btn btn-secondary">View Access Paths</Link>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="incubation-sectors">
          <div className="border-b border-[#f1c96a]/20 pb-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Incubation</p>
            <h2 id="incubation-sectors" className="mt-3 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Sectors We Build Inside</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">Real operating lanes, not theory.</p>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {incubationSectors.map((sector) => (
              <article key={sector.title} className="club-instrument-panel flex min-h-56 flex-col border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-6">
                <h3 className="font-[var(--disp)] text-xl font-semibold text-white">{sector.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{sector.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 border-l border-[#f1c96a]/45 pl-4 text-base leading-8 text-[#f6d98c]">Incubation means we don’t just talk markets. We build operating sectors people can enter and grow inside.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/lanes" className="btn btn-primary">Enter the Network</Link>
            <Link href="/paths" className="btn btn-secondary">View Access Paths</Link>
          </div>
        </section>

        <section className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#f1c96a]/20 pb-5">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">01 / Social Club</p>
              <h2 className="mt-3 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Club Lanes</h2>
            </div>
            <Link href="/lanes" className="text-sm uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-[var(--gold)]">View all lanes</Link>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {clubLanes.map((lane) => <PortalCard key={lane.name} {...lane} />)}
          </div>
        </section>

        <section className="mt-14 pb-8">
          <div className="border-b border-[#f1c96a]/20 pb-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">02 / Ownership Rails</p>
            <h2 className="mt-3 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Asset Protocols</h2>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {assetProtocols.map((protocol) => <PortalCard key={protocol.name} {...protocol} />)}
          </div>
        </section>

        <section className="mt-6 pb-8">
          <div className="border-b border-[#f1c96a]/20 pb-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">03 / Institutional Adjacency</p>
            <h2 className="mt-3 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Private Desk</h2>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <PortalCard name="Shadow Deal Desk" description="Private institutional adjacency for qualified members." href="/apply" cta="Request Qualification" status="Selective" />
          </div>
        </section>
      </div>
    </main>
  )
}

function PortalCard({ name, description, href, cta, status = 'Live' }: { name: string; description: string; href: string; cta: string; status?: string }) {
  return (
    <article className="club-instrument-panel flex min-h-64 flex-col border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
      <span className={`w-fit border px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] ${status === 'Selective' ? 'border-[#f1c96a]/35 bg-[#f1c96a]/10 text-[#f6d98c]' : 'border-[#2fe6b0]/35 bg-[#2fe6b0]/10 text-[#79f4cf]'}`}>{status}</span>
      <h3 className="mt-6 font-[var(--disp)] text-2xl font-semibold text-white">{name}</h3>
      <p className="mt-3 text-base leading-7 text-white/72">{description}</p>
      <a href={href} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto self-start pt-6">{cta}</a>
    </article>
  )
}
