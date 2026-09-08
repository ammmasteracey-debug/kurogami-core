'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'

const infrastructureDetails = [
  {
    title: 'Website / storefront',
    summary: 'A premium home for the brand and its offers.',
    detail: 'We create the public-facing system where an artist can explain the work, present the brand, collect interest, and sell directly. The structure is designed to grow with the business rather than remain a static portfolio.',
  },
  {
    title: 'Brand presence',
    summary: 'A coherent visual and editorial system.',
    detail: 'We shape the brand language across identity, photography direction, typography, color, copy, and presentation so the work feels intentional wherever an audience encounters it.',
  },
  {
    title: 'Conversion flow',
    summary: 'A clearer path from attention to action.',
    detail: 'We organize the journey from discovery to inquiry, booking, purchase, or membership. Every page has a role, and every call to action is connected to the next useful step.',
  },
  {
    title: 'Optional AI customer layer',
    summary: 'Support that helps the brand stay responsive.',
    detail: 'When useful, we add an AI chat or support layer that answers common questions, routes qualified interest, and keeps the customer experience moving without replacing the artist’s voice.',
  },
]

export default function IncubationPage() {
  const [activeInfrastructure, setActiveInfrastructure] = useState<typeof infrastructureDetails[number] | null>(null)

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/kurogami-world-hero.jpg" alt="Kurogami World incubation backdrop" fill priority className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.78),rgba(0,0,0,0.96))]" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className="overflow-hidden rounded-[2rem] border border-[#f1c96a]/25 bg-[rgba(7,8,14,0.9)] shadow-[0_40px_120px_rgba(0,0,0,0.38)]">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className={labelClass}>Incubation</p>
              <h1 className="mt-5 font-[var(--disp)] text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-6xl">Business services for artists in the ecosystem</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">We build the brand systems that let artists operate in public.</p>
            </div>
            <div className="relative min-h-[280px] border-t border-white/10 lg:border-l lg:border-t-0">
              <Image src="/images/kurogami-curriculum.jpg" alt="Artist brand system in development" fill className="object-cover object-center opacity-70" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>The Incubation Layer</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="max-w-4xl text-base leading-8 text-white/84 sm:text-lg">Artists enter through culture. Incubation gives them infrastructure:</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructureDetails.map((item) => (
              <button key={item.title} type="button" onClick={() => setActiveInfrastructure(item)} className="group rounded-[1.1rem] border border-white/10 bg-black/25 p-5 text-left text-base leading-7 text-white/85 transition-colors hover:border-[#f1c96a]/45 hover:bg-[#f1c96a]/[0.07]">
                <span className="block text-white transition-colors group-hover:text-[var(--gold)]">{item.title}</span>
                <span className="mt-2 block text-sm leading-6 text-white/55">View details</span>
              </button>
            ))}
          </div>
          <p className="mt-7 text-lg leading-8 text-white/82 sm:text-xl">Kurogami is not only exhibition. It is the system that helps artist brands live.</p>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>How It Works</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {['Enter the culture layer', 'Define the brand need', 'Build the commercial system', 'Launch and operate in public'].map((step, index) => <div key={step} className="flex gap-4 rounded-[1.1rem] border border-white/10 bg-black/25 p-5"><span className="font-mono text-sm text-[var(--gold)]">0{index + 1}</span><p className="text-base leading-7 text-white/85">{step}</p></div>)}
          </div>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>What We Build</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Premium websites', 'E-commerce / storefront systems', 'Brand presentation', 'Conversion-focused page flow', 'AI chatbot and support features when needed'].map((item) => <div key={item} className="rounded-[1.1rem] border border-white/10 bg-black/25 p-5 text-base leading-7 text-white/85">{item}</div>)}
          </div>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Proof / Live Builds</p>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.2rem] border border-[#f1c96a]/20 bg-black/25 p-6"><h2 className="text-xl font-semibold text-white">Kurogami World</h2><p className="mt-3 leading-7 text-white/72">Ecosystem site for culture, artists, access, and system layers.</p><Link href="/" className="btn btn-secondary mt-6">View live build</Link></div>
            <div className="rounded-[1.2rem] border border-[#f1c96a]/20 bg-black/25 p-6"><h2 className="text-xl font-semibold text-white">Nadia Fashion Brand</h2><p className="mt-3 leading-7 text-white/72">Live e-commerce example for a brand operating in public.</p><a href="https://luxecreators.store/" target="_blank" rel="noreferrer" className="btn btn-secondary mt-6">View live build</a></div>
          </div>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Who It Is For</p>
          <ul className="mt-6 grid gap-3 text-base leading-7 text-white/82 sm:grid-cols-3"><li>Artists entering Kurogami</li><li>Operators building public brands</li><li>External e-commerce brands seeking elite presentation</li></ul>
        </article>

        <article className="rounded-[1.7rem] border border-[#f1c96a]/25 bg-[rgba(8,10,17,0.94)] p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.3)] sm:p-10">
          <p className={labelClass}>Start A Build</p>
          <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Make the brand operable.</h2>
          <div className="herocta mt-8 justify-center"><a href="mailto:ammmasteracey@gmail.com?subject=Kurogami%20Incubation%20Application" className="btn btn-primary">Apply for incubation</a><a href="mailto:ammmasteracey@gmail.com?subject=Kurogami%20Build%20Request" className="btn btn-secondary">Request a build</a></div>
          <p className="mt-7 text-sm leading-7 text-white/58">Culture brings artists in. Incubation makes their brands operable.</p>
        </article>
      </section>

      {activeInfrastructure && (
        <div className="incubation-modal-overlay" role="presentation" onClick={() => setActiveInfrastructure(null)}>
          <div className="incubation-modal" role="dialog" aria-modal="true" aria-labelledby="infrastructure-modal-title" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className={labelClass}>Infrastructure Detail</p>
                <h2 id="infrastructure-modal-title" className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">{activeInfrastructure.title}</h2>
              </div>
              <button type="button" aria-label="Close infrastructure details" onClick={() => setActiveInfrastructure(null)} className="incubation-modal-close">×</button>
            </div>
            <div className="my-6 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
            <p className="text-lg leading-8 text-white/88">{activeInfrastructure.summary}</p>
            <p className="mt-5 text-base leading-8 text-white/72">{activeInfrastructure.detail}</p>
            <button type="button" onClick={() => setActiveInfrastructure(null)} className="btn btn-secondary mt-8">Close details</button>
          </div>
        </div>
      )}
    </main>
  )
}
