'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const DURATION = 4800
const stages = [
  'Establishing process context',
  'Indexing decision traces',
  'Preparing intelligence surface',
]

function getInternalTarget(value: string | null) {
  if (!value) return '/'

  try {
    const target = new URL(value, window.location.origin)
    if (target.origin !== window.location.origin) return '/'
    return `${target.pathname}${target.search}${target.hash}`
  } catch {
    return '/'
  }
}

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    document.cookie = 'kurogami_shown_loading=1; path=/; SameSite=Lax'

    let frame = 0
    let redirectTimer: ReturnType<typeof setTimeout> | undefined
    let start: number | undefined
    const target = getInternalTarget(new URLSearchParams(window.location.search).get('to'))

    const step = (timestamp: number) => {
      start ??= timestamp
      const elapsed = timestamp - start
      const percentage = Math.min(100, Math.round((elapsed / DURATION) * 100))
      setProgress(percentage)

      if (elapsed < DURATION) {
        frame = requestAnimationFrame(step)
      } else {
        redirectTimer = setTimeout(() => router.replace(target), 850)
      }
    }

    frame = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(frame)
      if (redirectTimer) clearTimeout(redirectTimer)
    }
  }, [router])

  const stageIndex = Math.min(stages.length - 1, Math.floor(progress / 34))

  return (
    <main className="kurogami-loader">
      <div className="kurogami-loader-grid" aria-hidden="true" />
      <div className="kurogami-loader-orbit kurogami-loader-orbit-one" aria-hidden="true" />
      <div className="kurogami-loader-orbit kurogami-loader-orbit-two" aria-hidden="true" />

      <div className="kurogami-loader-frame">
        <header className="kurogami-loader-header">
          <a href="/" className="kurogami-loader-brand" aria-label="Kurogami home">
            <Image src="/images/kurogami-official-logo.jpg" alt="" width={42} height={42} priority />
            <span>KUROGAMI</span>
          </a>
          <span className="kurogami-loader-classification">PROCESS INTELLIGENCE / 001</span>
        </header>

        <section className="kurogami-loader-content" aria-live="polite">
          <div className="kurogami-loader-art">
            <Image
              src="/images/kurogami-load.jpg"
              alt="Abstract Kurogami system artwork"
              fill
              priority
              sizes="(max-width: 700px) 90vw, 520px"
              className="kurogami-loader-art-image"
            />
            <div className="kurogami-loader-art-wash" />
            <div className="kurogami-loader-signal">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <p className="kurogami-loader-art-label">Human process<br />→ trained intelligence</p>
          </div>

          <div className="kurogami-loader-details">
            <p className="kurogami-loader-eyebrow"><span /> SYSTEM ACCESS</p>
            <h1>Process in motion.</h1>
            <p className="kurogami-loader-description">
              Preparing the intelligence layer. Decision traces are the foundation.
            </p>

            <div className="kurogami-loader-progress-label">
              <span>{stages[stageIndex]}</span>
              <span>{String(progress).padStart(2, '0')}%</span>
            </div>
            <div
              className="kurogami-loader-progress"
              role="progressbar"
              aria-label="Preparing Kurogami"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <motion.div
                className="kurogami-loader-progress-fill"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.24 }}
              />
            </div>

            <div className="kurogami-loader-foot">
              <span>OWNABLE · RENTABLE · IMPROVABLE</span>
              <span className="kurogami-loader-live"><i /> LIVE SYSTEM</span>
            </div>
          </div>
        </section>
        <footer className="kurogami-loader-footer">
          <span>DESK OS&nbsp; / &nbsp;FORGEOS&nbsp; / &nbsp;FORGE INDEX</span>
          <span>KUROGAMI © 2026</span>
        </footer>
      </div>
    </main>
  )
}
