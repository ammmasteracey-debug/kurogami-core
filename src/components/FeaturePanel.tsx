'use client'

import { motion } from 'framer-motion'

interface FeaturePanelProps {
  title: string
  desc: string
}

export default function FeaturePanel({ title, desc }: FeaturePanelProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="rounded-[2rem] border border-white/10 bg-[#08111f]/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="h-2.5 w-14 rounded-full bg-cyan-400/20" />
        <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-cyan-200">Module</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{desc}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
        <span>ENTER</span>
        <span className="block h-1 w-1 rounded-full bg-cyan-300" />
      </div>
    </motion.article>
  )
}
