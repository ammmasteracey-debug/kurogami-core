'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const clubLanes = [
  {
    name: 'Fine Shit Do Memes',
    description: 'Women-native meme desk and club lane. Official coin + curriculum.',
    href: 'https://fine-shit-do-memes-pied.vercel.app/',
    cta: 'Enter FSDM',
  },
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
          <div className="mt-8">
            <Link href="/lanes" className="btn btn-primary">Enter the System</Link>
          </div>
        </motion.section>

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
      </div>
    </main>
  )
}

function PortalCard({ name, description, href, cta }: { name: string; description: string; href: string; cta: string }) {
  return (
    <article className="club-instrument-panel flex min-h-64 flex-col border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
      <span className="w-fit border border-[#2fe6b0]/35 bg-[#2fe6b0]/10 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#79f4cf]">Live</span>
      <h3 className="mt-6 font-[var(--disp)] text-2xl font-semibold text-white">{name}</h3>
      <p className="mt-3 text-base leading-7 text-white/72">{description}</p>
      <a href={href} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto self-start pt-6">{cta}</a>
    </article>
  )
}
