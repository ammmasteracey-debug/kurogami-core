'use client'

import Link from 'next/link'

export default function HubPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04070b] px-6 py-24 text-[var(--text-1)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[var(--gold)]">Kurogami World</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Hub</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
          This hub route is restored as a lightweight destination for the earlier command-center experience.
        </p>

        <div className="mt-10 grid gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:grid-cols-2">
          <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-5">
            <h2 className="text-xl font-semibold">Access Layer</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">Open the main cultural entry points and move through Kurogami’s world stack.</p>
          </div>
          <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-5">
            <h2 className="text-xl font-semibold">Navigation</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">Return to the landing page or explore the deeper infrastructure pages.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="rounded-full border border-white/10 bg-[#f1c96a]/10 px-5 py-3 text-sm uppercase tracking-[0.24em] text-[#f1c96a]">
            Return Home
          </Link>
          <Link href="/surviving-miami" className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm uppercase tracking-[0.24em] text-white/80">
            Surviving Miami
          </Link>
          <Link href="/token" className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm uppercase tracking-[0.24em] text-white/80">
            $KRG
          </Link>
        </div>
      </div>
    </main>
  )
}
