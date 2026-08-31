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
            <p className="mt-4 text-lg leading-8 text-white/75">Exclusive access. Real utility.</p>
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

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="club-command-frame w-full max-w-4xl border border-[#f1c96a]/25 bg-[rgba(4,6,8,0.84)] p-7 text-center shadow-[0_34px_120px_rgba(0,0,0,0.58)] backdrop-blur-xl sm:p-12">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[var(--gold)]">Kurogami World / Club Access</p>
          <h1 className="mt-5 font-[var(--disp)] text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">The social club for culture and markets</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">Exclusive access. Real utility. Built for operators.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <button type="button" onClick={handleEnter} className="btn btn-primary">Enter the World</button>
            <Link href="/reserve" className="btn btn-secondary">Founding Keys</Link>
          </div>

          <div className="mt-9 border-t border-[#f1c96a]/20 pt-7 text-left sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">Official Club Lane</p>
              <h2 className="mt-2 font-[var(--disp)] text-2xl font-semibold text-white">Fine Shit Do Memes</h2>
              <p className="mt-2 text-sm leading-7 text-white/65">Women-native meme desk. Coin. Curriculum.</p>
            </div>
            <a href="https://fine-shit-do-memes-pied.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary mt-5 sm:mt-0">Enter FSDM</a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
