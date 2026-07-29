'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Rain from '../components/Rain'
import Particles from '../components/Particles'
import FeaturePanel from '../components/FeaturePanel'

const features = [
  { title: 'RWA Intelligence', desc: 'Live asset insights and real-world asset signals.' },
  { title: 'Forge Index', desc: 'Market heatmaps, rarity trackers, and premium scoring.' },
  { title: 'Agents & Arena', desc: 'Deploy AI agents and manage arena missions.' },
  { title: 'Collateral Engine', desc: 'Tokenize portfolios and unlock leverage.' }
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02040f] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/shadow-brickell.jpg"
          alt="Shadow Brickell cyberpunk city"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,240,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,45,85,0.12),transparent_25%)]" />
      </div>

      <Rain />
      <Particles />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 lg:px-10">
        <header className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            SHADOW BRICKELL · THE FRACTURE GATEWAY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="kuro-title mt-6 text-5xl font-extrabold uppercase tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="inline text-white">KURO</span>
            <span className="inline text-[#ff2d55] ml-3">GAMI</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            We are the BAYC of this cycle. Real assets. Real gameplay. Global Tribes awakening.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.85, delay: 0.25 }} className="mt-4 max-w-xl text-xs uppercase tracking-[0.35em] text-cyan-300/70 sm:text-sm">
            Global Tribes are awakening across Watches, Cars, Art & Real Estate.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.28 }} className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Step into a living gateway where culture, capital, and cybernetic ambition converge in a rain-slicked commandscape.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/loading" className="inline-flex rounded-full bg-[#ff2d55] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_20px_80px_rgba(255,45,85,0.18)] transition hover:-translate-y-0.5 hover:bg-[#ff4167]">
              JOIN THE WAITLIST
            </Link>
            <Link href="/hub" className="inline-flex rounded-full border border-cyan-300/60 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100">
              LEARN ABOUT GLOBAL TRIBES
            </Link>
          </motion.div>
        </header>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="rounded-3xl border border-white/10 bg-[#08111f]/90 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Command Center</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Operational dashboard</h2>
              </div>
              <div className="rounded-2xl bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200">Live</div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Network latency</p>
                <p className="mt-4 text-4xl font-semibold text-white">24ms</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Tribes online</p>
                <p className="mt-4 text-4xl font-semibold text-white">8.1K</p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Shadow Registry</p>
                <div className="mt-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-3xl font-semibold text-white">12</p>
                    <p className="mt-1 text-sm text-slate-400">New asset flags</p>
                  </div>
                  <span className="inline-flex rounded-full bg-[#ff2d55]/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#ff2d55]">+4%</span>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Data pulse</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#050815]/90 p-4">
                    <p className="text-2xl font-semibold text-white">86%</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">AI signal</p>
                  </div>
                  <div className="rounded-3xl bg-[#050815]/90 p-4">
                    <p className="text-2xl font-semibold text-white">43</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">Arc nodes</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-[#08111f]/90 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.30)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Image archive</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Shadow Brickell patrols</h3>
                </div>
                <div className="rounded-2xl bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">Artifact</div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-[#020711]">
                <Image src="/images/shadow-brickell3.jpg" alt="Shadow Brickell city" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-100">Night drift</div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#08111f]/90 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.30)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Collectible view</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">BAYC asset preview</h3>
                </div>
                <div className="rounded-2xl bg-[#ff2d55]/10 px-3 py-1 text-xs text-[#ff2d55]">Rare</div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-[#020711]">
                <Image src="/images/bored-ape.jpg" alt="Bored Ape Yacht Club" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ff2d55]">Asset feed</div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="explore" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeaturePanel key={feature.title} title={feature.title} desc={feature.desc} />
          ))}
        </section>
      </div>
    </main>
  )
}
