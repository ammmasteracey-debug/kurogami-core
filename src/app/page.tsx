'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const hasEntered = localStorage.getItem('kurogami_entered') === 'true'
    if (hasEntered) {
      setEntered(true)
    }
  }, [])

  const handleEnter = () => {
    localStorage.setItem('kurogami_entered', 'true')
    setEntered(true)
    router.push('/world')
  }

  if (entered) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
        <div className="pointer-events-none absolute inset-0">
          <Image src="/images/kurogami-world-hero.jpg" alt="Kurogami World backdrop" fill priority className="object-cover object-center opacity-20" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.95))]" />
        </div>
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]">Welcome back</p>
            <h1 className="mt-4 font-[var(--disp)] text-4xl font-semibold text-white sm:text-5xl">Kurogami World</h1>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
              <Link href="/world" className="btn btn-primary">Enter the World</Link>
              <Link href="/reserve" className="btn btn-secondary">Reserve Founding Art</Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/kurogami-world-stream.jpg" alt="Kurogami World stream hero" fill priority className="object-cover object-center brightness-[0.62] contrast-[1.08] saturate-[1.1]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.92))]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]">KUROGAMI WORLD</p>
          <h1 className="mt-5 font-[var(--disp)] text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">A premium world for creators</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">Visibility. Ownership. Infrastructure. Founding access layer.</p>
          <p className="mt-4 text-base leading-7 text-white/60">Created by artists, for artists.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <button type="button" onClick={handleEnter} className="btn btn-primary">Enter the World</button>
            <Link href="/reserve" className="btn btn-secondary">Reserve Founding Art</Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
