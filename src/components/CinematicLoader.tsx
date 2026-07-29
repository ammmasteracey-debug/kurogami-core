'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function CinematicLoader({ onClose }: { onClose?: () => void }) {
  const [progress, setProgress] = useState(0)
  const [finished, setFinished] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let raf: number | null = null
    let start: number | null = null
    const duration = 4200

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (elapsed < duration) {
        raf = requestAnimationFrame(step)
      } else {
        setFinished(true)
        setTimeout(() => {
          router.push('/hub')
        }, 1200)
      }
    }

    raf = requestAnimationFrame(step)
    return () => {
      if (raf) cancelAnimationFrame(raf)
    }
  }, [router, onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-6 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#050615]/95 shadow-[0_60px_220px_rgba(0,0,0,0.75)]">
          <div className="relative h-96 sm:h-[28rem]">
            <Image
              src="/images/shadow-brickell4.jpg"
              alt="Shadow Brickell loading"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="space-y-6 px-6 py-8 sm:px-10 sm:py-10">
            <div>
              <p className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">黒神</p>
              <p className="mt-3 text-2xl uppercase tracking-[0.35em] text-cyan-200 sm:text-3xl">KUROGAMI</p>
            </div>

            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">ACCESSING THE FRACTURE...</p>

            <div className="space-y-3">
              <div className="h-4 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ background: 'linear-gradient(90deg, rgba(255,210,130,1), rgba(255,190,120,1), rgba(255,160,170,0.95))' }}
                />
              </div>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                <span>{progress}%</span>
                <span>{finished ? 'COMPLETE' : 'INITIALIZING'}</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: finished ? 1 : 0 }} transition={{ duration: 0.4 }}>
              <button
                className="rounded-full bg-[#ff2d55] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_20px_80px_rgba(255,45,85,0.2)]"
                onClick={() => router.push('/hub')}
              >
                Enter the Hub
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
