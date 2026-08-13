'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

type AssetKey = 'SOL' | 'ETH' | 'BTC'

const treasuryAddresses: Record<AssetKey, string> = {
  SOL: '7Vp969jxuFYfDWEvhndhxuQzLB6CtyFCfviaPdWtZNrY',
  ETH: '0x0D90097E56445f0340221746FA7B20d62782C169',
  BTC: 'bc1qs2k98m4dw36t957rm733kcz59sn4thrur03mwa',
}

const onboardingSteps = [
  {
    title: 'Step 1 - Open Cash App',
    body: 'Enable crypto send/receive if needed.',
  },
  {
    title: 'Step 2 - Buy crypto',
    body: 'Buy SOL, ETH, or BTC inside Cash App. Buy a little extra to cover network fees so the received amount is not short.',
  },
  {
    title: 'Step 3 - Copy the correct treasury address',
    body: 'Use the official address for the asset you are sending.',
  },
  {
    title: 'Step 4 - Send from Cash App',
    body: 'Paste treasury address. Enter exact amount due. In the note/reference field include your piece code. Example: KRG-FOUNDING-003. Confirm and send.',
  },
  {
    title: 'Step 5 - Save proof',
    body: 'Keep transaction ID/hash, screenshot, and the wallet address you want your NFT delivered to at launch.',
  },
  {
    title: 'Step 6 - Submit confirmation form',
    body: 'Submit your payment details so the team can verify and reserve your piece.',
  },
  {
    title: 'Step 7 - Confirmation',
    body: 'After verification, you will receive: Payment received. Your founding piece is reserved. NFT delivers at collection launch. $KRG allocation will follow your holdings.',
  },
]

const faqs = [
  {
    q: 'Do I need MetaMask or Phantom?',
    a: 'No. Cash App is enough.',
  },
  {
    q: 'Can I buy more than one?',
    a: 'Yes. Each piece needs its own payment and piece code. More NFTs increase $KRG allocation.',
  },
  {
    q: 'What if I send to the wrong address?',
    a: 'Crypto transfers cannot be reversed. Only copy addresses from this page.',
  },
  {
    q: 'Is this an investment contract?',
    a: 'You are reserving founding art and future NFT access utility. No guaranteed return. Not financial advice.',
  },
]

export default function ReserveFoundingArtPage() {
  const [copiedAsset, setCopiedAsset] = useState<AssetKey | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const copyAddress = async (asset: AssetKey) => {
    try {
      await navigator.clipboard.writeText(treasuryAddresses[asset])
      setCopiedAsset(asset)
      window.setTimeout(() => setCopiedAsset(null), 1800)
    } catch (_err) {
      setCopiedAsset(null)
    }
  }

  const submitReservation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text-1)]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/kurogami-world-hero.jpg"
          alt="Kurogami world backdrop"
          fill
          priority
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.95))]" />
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-7 px-6 py-16 sm:px-8 lg:px-10">
        <article className="rounded-[1.8rem] border border-[#f1c96a]/25 bg-[rgba(7,8,14,0.9)] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.38)] sm:p-10">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]">Founding Purchase</p>
          <h1 className="mt-4 font-[var(--disp)] text-4xl font-semibold leading-[0.95] text-white sm:text-5xl">Reserve Founding Art</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
            Pay with crypto through Cash App in a few minutes. No exchange account required.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1rem] border border-white/10 bg-black/25 p-4">
              <Image src="/images/cash-app.jpg" alt="Cash App" width={320} height={180} className="h-24 w-full rounded-[0.75rem] object-cover" />
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Cash App Path</p>
            </div>
            <div className="rounded-[1rem] border border-white/10 bg-black/25 p-4">
              <Image src="/images/SOL.jpg" alt="Solana" width={320} height={180} className="h-24 w-full rounded-[0.75rem] object-cover" />
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">SOL Accepted</p>
            </div>
            <div className="rounded-[1rem] border border-white/10 bg-black/25 p-4">
              <Image src="/images/ETH.jpg" alt="Ethereum" width={320} height={180} className="h-24 w-full rounded-[0.75rem] object-cover" />
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">ETH Accepted</p>
            </div>
            <div className="rounded-[1rem] border border-white/10 bg-black/25 p-4">
              <Image src="/images/BTC.jpg" alt="Bitcoin" width={320} height={180} className="h-24 w-full rounded-[0.75rem] object-cover" />
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">BTC Accepted</p>
            </div>
          </div>
        </article>

        <article className="rounded-[1.6rem] border border-white/12 bg-[rgba(8,10,18,0.9)] p-6 sm:p-9">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">What You Receive</p>
          <div className="my-4 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <ul className="space-y-3 text-sm leading-7 text-white/82 sm:text-base">
            <li>- Reservation of your specific founding art piece</li>
            <li>- Corresponding rare NFT at collection launch</li>
            <li>- $KRG allocation based on number of NFTs held</li>
            <li>- Entry into the Kurogami World key system</li>
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[0.95rem] border border-[#f1c96a]/20 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Price Reference</p>
              <p className="mt-2 text-lg font-semibold text-white">$10,000 per founding rare</p>
            </div>
            <div className="rounded-[0.95rem] border border-[#f1c96a]/20 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Presale Timing</p>
              <p className="mt-2 text-lg font-semibold text-white">Presale now. NFT delivered at launch.</p>
            </div>
          </div>
        </article>

        <article className="rounded-[1.6rem] border border-[#f1c96a]/20 bg-[rgba(8,10,18,0.92)] p-6 sm:p-9">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">Payment Method</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Crypto treasury transfer</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-white/78 sm:text-base">
            We accept crypto sent to the official Kurogami treasury wallet. Easiest beginner path: buy crypto inside Cash App, then send to the matching treasury address.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/75">SOL</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/75">ETH</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/75">BTC</span>
          </div>

          <div className="mt-6 space-y-4">
            {(Object.keys(treasuryAddresses) as AssetKey[]).map((asset) => (
              <div key={asset} className="rounded-[1rem] border border-[#f1c96a]/20 bg-black/25 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{asset} Treasury Address</p>
                  <button
                    type="button"
                    onClick={() => copyAddress(asset)}
                    className="rounded-full border border-[#f1c96a]/35 bg-[#f1c96a]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--gold)] transition-colors duration-200 hover:bg-[#f1c96a]/20"
                  >
                    {copiedAsset === asset ? 'Copied' : `Copy ${asset} Address`}
                  </button>
                </div>
                <p className="mt-3 break-all rounded-[0.85rem] border border-white/10 bg-black/40 px-4 py-3 font-mono text-sm leading-7 text-white/95 sm:text-base">
                  {treasuryAddresses[asset]}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 rounded-[0.9rem] border border-[#f1c96a]/35 bg-[#f1c96a]/10 px-4 py-3 text-sm leading-7 text-[#f6d98c]">
            Only send the matching asset to the matching address. Only use addresses shown on this official page.
          </p>
        </article>

        <article className="rounded-[1.6rem] border border-white/12 bg-[rgba(8,10,18,0.9)] p-6 sm:p-9">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">Step-by-Step Onboarding</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {onboardingSteps.map((step) => (
              <div key={step.title} className="rounded-[1rem] border border-white/10 bg-black/25 p-4">
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/75">{step.body}</p>
              </div>
            ))}
          </div>
        </article>

        <article id="reservation-form" className="rounded-[1.6rem] border border-[#f1c96a]/20 bg-[rgba(8,10,18,0.92)] p-6 sm:p-9">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">Step 6 - Submit Confirmation Form</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={submitReservation}>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">Name or IG handle</span>
              <input required type="text" className="mt-2 w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f1c96a]/45" />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">Email or phone</span>
              <input required type="text" className="mt-2 w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f1c96a]/45" />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">Piece code</span>
              <input required type="text" placeholder="KRG-FOUNDING-003" className="mt-2 w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#f1c96a]/45" />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">Asset sent (SOL / ETH / BTC)</span>
              <select required className="mt-2 w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f1c96a]/45">
                <option value="">Select asset</option>
                <option value="SOL">SOL</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
              </select>
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">Amount sent</span>
              <input required type="text" className="mt-2 w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f1c96a]/45" />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">Transaction hash</span>
              <input required type="text" className="mt-2 w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f1c96a]/45" />
            </label>

            <label className="block md:col-span-2">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">Screenshot upload</span>
              <input type="file" accept="image/*" className="mt-2 block w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-[#f1c96a]/20 file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.15em] file:text-[var(--gold)]" />
            </label>

            <label className="block md:col-span-2">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">NFT delivery wallet address</span>
              <input required type="text" className="mt-2 w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f1c96a]/45" />
            </label>

            <div className="md:col-span-2">
              <button type="submit" className="w-full rounded-full border border-[#f1c96a]/40 bg-[#f1c96a]/14 px-5 py-3 text-sm uppercase tracking-[0.2em] text-[var(--gold)] transition-colors duration-200 hover:bg-[#f1c96a]/22">
                Submit Reservation
              </button>
            </div>
          </form>

          {formSubmitted && (
            <p className="mt-4 rounded-[0.9rem] border border-[#f1c96a]/35 bg-[#f1c96a]/10 px-4 py-3 text-sm leading-7 text-[#f6d98c]">
              Payment received. Your founding piece is reserved. NFT delivers at collection launch. $KRG allocation will follow your holdings.
            </p>
          )}
        </article>

        <article className="rounded-[1.6rem] border border-white/12 bg-[rgba(8,10,18,0.9)] p-6 sm:p-9">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">Rules</p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-white/78">
            <li>- Correct asset to correct address only</li>
            <li>- Piece code required in payment note</li>
            <li>- Short payments are not confirmed</li>
            <li>- Reservation active only after manual confirmation</li>
            <li>- Crypto transactions are irreversible</li>
          </ul>
        </article>

        <article className="rounded-[1.6rem] border border-white/12 bg-[rgba(8,10,18,0.9)] p-6 sm:p-9">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">FAQ</p>
          <div className="mt-5 space-y-3">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1rem] border border-white/10 bg-black/25 p-4">
                <h3 className="text-sm font-semibold text-white sm:text-base">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-white/75">{item.a}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[1.8rem] border border-[#f1c96a]/25 bg-[rgba(8,10,18,0.92)] p-6 sm:p-10">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--gold)]">Final CTA</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Send correctly. Reserve confidently.</h2>
          <ol className="mt-5 space-y-2 text-sm leading-7 text-white/80 sm:text-base">
            <li>1. Select piece</li>
            <li>2. Copy treasury address</li>
            <li>3. Send from Cash App with piece code</li>
            <li>4. Submit confirmation form</li>
          </ol>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button type="button" onClick={() => copyAddress('SOL')} className="rounded-full border border-[#f1c96a]/35 bg-[#f1c96a]/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)] transition-colors hover:bg-[#f1c96a]/18">
              Copy SOL Address
            </button>
            <button type="button" onClick={() => copyAddress('ETH')} className="rounded-full border border-[#f1c96a]/35 bg-[#f1c96a]/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)] transition-colors hover:bg-[#f1c96a]/18">
              Copy ETH Address
            </button>
            <button type="button" onClick={() => copyAddress('BTC')} className="rounded-full border border-[#f1c96a]/35 bg-[#f1c96a]/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)] transition-colors hover:bg-[#f1c96a]/18">
              Copy BTC Address
            </button>
            <a href="#reservation-form" className="rounded-full border border-white/14 bg-white/6 px-4 py-3 text-center text-xs uppercase tracking-[0.2em] text-white/85 transition-colors hover:border-[#f1c96a]/30 hover:text-[var(--gold)]">
              Submit Payment Proof
            </a>
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/55">
            Official Kurogami treasury only. Always verify the piece code before sending.
          </p>
          <div className="mt-6">
            <Link href="/" className="text-sm uppercase tracking-[0.2em] text-[var(--gold)] hover:text-[#f8d26f]">
              Return to Kurogami main
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}
