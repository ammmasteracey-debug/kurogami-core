'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ShadowBrickell from '../../components/metaverse/ShadowBrickell'

const modules = [
  { title: 'RWA Intelligence', description: 'Live asset insights and real-world asset signals.' },
  { title: 'Forge Index', description: 'Market heatmaps, scores, and rarity signals.' },
  { title: 'Agents & Arena', description: 'Deploy AI agents and coordinate arena missions.' },
  { title: 'Collateral Engine', description: 'Tokenize holdings and unlock strategic leverage.' },
  { title: 'Academy', description: 'Sovereign education + trading edge.' },
  { title: 'Metaverse', description: 'Shadow Brickell + playable layers.' },
  { title: 'Atelier', description: 'Fashion digital twins & provenance.' },
  { title: 'Guilds', description: 'Network & organization layer.' }
]

const tribes = [
  { name: 'Watches', status: 'Rising' },
  { name: 'Cars', status: 'Mobilized' },
  { name: 'Art', status: 'Curated' },
  { name: 'Real Estate', status: 'Anchored' }
]

export default function HubPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02040f] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/shadow-brickell2.jpg"
          alt="Shadow Brickell hub network"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,240,255,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,45,85,0.14),transparent_28%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="mb-10 flex flex-col gap-3 text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-cyan-200/80">Kurogami Hub · Shadow Brickell</p>
          <h1 className="text-5xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
            Command Nexus
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Welcome to the immersive node for the BAYC of this cycle. Monitor assets, deploy agents, and control the fracture with precision.
          </p>
        </header>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {['overview', 'metaverse', 'modules'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                activeTab === tab
                  ? 'bg-[#ff2d55] text-white shadow-[0_20px_80px_rgba(255,45,85,0.18)]'
                  : 'bg-white/5 text-cyan-200 hover:bg-white/10'
              }`}
            >
              {tab === 'overview' ? 'Overview' : tab === 'metaverse' ? 'Metaverse' : 'Modules'}
            </button>
          ))}
        </div>

        {activeTab === 'metaverse' ? (
          <div className="rounded-[2rem] border border-white/10 bg-[#08111f]/90 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <ShadowBrickell />
          </div>
        ) : (
          <section className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="rounded-[2rem] border border-white/10 bg-[#08111f]/90 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8"
          >
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Live operations</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Realtime Node Insights</h2>
              </div>
              <span className="inline-flex rounded-full bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">ONLINE</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Network load</p>
                <p className="mt-4 text-4xl font-semibold text-white">78%</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Tribes active</p>
                <p className="mt-4 text-4xl font-semibold text-white">9.2K</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Neural status</p>
                <p className="mt-4 text-3xl font-semibold text-white">92%</p>
                <p className="mt-2 text-sm text-slate-400">Living Current — stable synapse feed</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Member path</p>
                <p className="mt-4 text-3xl font-semibold text-white">42 / 60</p>
                <p className="mt-2 text-sm text-slate-400">Onboarding status — activation underway</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-white/10 bg-[#08111f]/90 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Shadow Archive</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Shadow Brickell patrols</h3>
                </div>
                <span className="rounded-2xl bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-100">Artifact</span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#020711]">
                <Image src="/images/shadow-brickell3.jpg" alt="Shadow Brickell patrols" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-100">Night drift</div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#08111f]/90 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#ff2d55]/80">BAYC narrative</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">The BAYC of this cycle</h3>
                </div>
                <span className="rounded-2xl bg-[#ff2d55]/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#ff2d55]">Legacy</span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#020711]">
                <Image src="/images/photo_2026-07-28_22-28-03.jpg" alt="Luxury asset" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#ff2d55]">Luxury asset</div>
              </div>
            </div>
          </motion.div>
        </section>
        )}

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#08111f]/90 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Tribes</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Global Tribes in formation</h2>
            </div>
            <span className="inline-flex rounded-full bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">Total 8</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {['Abyss Ravens', 'Nexus Wardens', 'Pulse Syndicate', 'Fracture Guild'].map((tribe) => (
              <div key={tribe} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Tribe</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{tribe}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">Operational influence, rare asset access, and coordinated fractal drives.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <motion.article
              key={module.title}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-white/10 bg-[#020714]/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] transition-all duration-300"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">Module</p>
              <h4 className="mt-4 text-lg font-semibold text-white">{module.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">{module.description}</p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-slate-400">Online</span>
                <button className="rounded-full bg-[#ff2d55] px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white transition hover:bg-[#ff5a74]">
                  ENTER
                </button>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#08111f]/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Command Protocol</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Launch the next phase</h2>
            </div>
            <button className="inline-flex rounded-full bg-[#ff2d55] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_20px_80px_rgba(255,45,85,0.18)] transition hover:bg-[#ff4167]">
              ACTIVATE NODE
            </button>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            Every asset lane and tribe network is connected through the Hub. Use the protocol deck to align strategy, seize rare access, and move with surgical precision.
          </p>
        </section>
      </div>
    </main>
  )
}
