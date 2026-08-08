"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)
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
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6">
        <div className="w-full max-w-6xl">
          <div className="relative mx-auto h-[34vh] w-full">
            <Image
              src="/images/kurogami-load.jpg"
              alt="Kurogami load"
              fill
              priority
              className="object-contain object-center opacity-90"
            />
          </div>

          <div className="mx-auto mt-5 w-full max-w-3xl px-2">
            <div className="relative h-[6px] overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(115,255,210,0.92), rgba(217,183,111,0.92))',
                  boxShadow: '0 0 22px rgba(115,255,210,0.22), 0 0 30px rgba(217,183,111,0.18)'
                }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeInOut', duration: 0.35 }}
              />
              <motion.div
                className="absolute top-0 h-full w-24"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.52), transparent)',
                  mixBlendMode: 'screen'
                }}
                animate={{ x: ['-30%', '130%'] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
