"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)
  const [finished, setFinished] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // mark that the loading page was shown (so server middleware won't redirect next time)
    try {
      // set as a session cookie so the loading page shows once per browser session
      document.cookie = 'kurogami_shown_loading=1; path=/'
    } catch (e) {
      // ignore
    }
    let raf: number | null = null
    let start: number | null = null

    const duration = 4800 // ms

    const params = new URLSearchParams(window.location.search)
    const target = params.get('to') || '/hub'

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (elapsed < duration) {
        raf = requestAnimationFrame(step)
      } else {
        setFinished(true)
        // auto-redirect after short delay to the requested target
        setTimeout(() => router.push(target), 1200)
      }
    }

    raf = requestAnimationFrame(step)
    return () => {
      if (raf) cancelAnimationFrame(raf)
    }
  }, [router])

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#02040f] text-white">
      <div className="absolute inset-0">
        <Image src="/images/shadow-brickell4.jpg" alt="Shadow Brickell" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center px-6 text-center">
        <AnimatePresence>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }} className="max-w-4xl">
            <div className="mb-6 select-none text-shadow">
              <div className="mb-2 text-center text-7xl font-extrabold leading-none tracking-normal sm:text-9xl md:text-[7rem]">
                黒神
              </div>
              <div className="mt-2 text-center text-3xl font-bold uppercase tracking-widest text-white sm:text-4xl md:text-5xl">
                KUROGAMI
              </div>
            </div>

            <div className="mx-auto mt-8 w-full max-w-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300/80">ACCESSING THE FRACTURE...</p>

              <div className="relative h-4 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="absolute left-0 top-0 h-full"
                  style={{
                    boxShadow: '0 12px 40px rgba(255,200,80,0.12), 0 6px 14px rgba(255,120,120,0.06)'
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeInOut', duration: 0.4 }}
                >
                  <div className="h-full w-full" style={{ background: 'linear-gradient(90deg,#e6c07b,#ffd97a 40%, #ffb3a7)' }} />
                </motion.div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                <span>{progress}%</span>
                <span>{finished ? 'Complete' : 'Initializing'}</span>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: finished ? 1 : 0 }} transition={{ duration: 0.6 }} className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="rounded-full bg-[#ff2d55] px-6 py-3 text-sm font-semibold uppercase text-white"
                  onClick={() => {
                    const params = new URLSearchParams(window.location.search)
                    const target = params.get('to') || '/hub'
                    router.push(target)
                  }}
                >
                  Continue
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
