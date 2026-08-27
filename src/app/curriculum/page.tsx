'use client'

import Image from 'next/image'
import { FormEvent, useEffect, useState } from 'react'

type AssetKey = 'SOL' | 'ETH' | 'BTC'

const treasuryAddresses: Record<AssetKey, string> = {
  SOL: '7Vp969jxuFYfDWEvhndhxuQzLB6CtyFCfviaPdWtZNrY',
  ETH: '0x0D90097E56445f0340221746FA7B20d62782C169',
  BTC: 'bc1qs2k98m4dw36t957rm733kcz59sn4thrur03mwa',
}

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'
const inputClass = 'mt-2 w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#f1c96a]/45'
const strategyImages = Array.from({ length: 11 }, (_, index) => `/images/trade-image${index + 1}.jpg`)

export default function CurriculumPage() {
  const [copiedAsset, setCopiedAsset] = useState<AssetKey | null>(null)
  const [formAsset, setFormAsset] = useState<AssetKey>('SOL')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [proofSubmitting, setProofSubmitting] = useState(false)
  const [proofError, setProofError] = useState('')
  const [currentStrategyIndex, setCurrentStrategyIndex] = useState(0)
  const [selectedStrategyImage, setSelectedStrategyImage] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedStrategyImage) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedStrategyImage(null)
        return
      }

      if (event.key === 'ArrowRight') {
        setCurrentStrategyIndex((current) => (current + 1) % strategyImages.length)
        setSelectedStrategyImage(strategyImages[(currentStrategyIndex + 1) % strategyImages.length])
      }

      if (event.key === 'ArrowLeft') {
        setCurrentStrategyIndex((current) => (current === 0 ? strategyImages.length - 1 : current - 1))
        setSelectedStrategyImage(strategyImages[(currentStrategyIndex === 0 ? strategyImages.length - 1 : currentStrategyIndex - 1)])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentStrategyIndex, selectedStrategyImage])

  const copyAddress = async (asset: AssetKey) => {
    try {
      await navigator.clipboard.writeText(treasuryAddresses[asset])
      setCopiedAsset(asset)
      window.setTimeout(() => setCopiedAsset(null), 1800)
    } catch (_error) {
      setCopiedAsset(null)
    }
  }

  const submitProof = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setProofSubmitting(true)
    setProofError('')

    try {
      const response = await fetch('/api/curriculum-proof', {
        method: 'POST',
        body: new FormData(event.currentTarget),
      })
      const result = await response.json() as { error?: string }

      if (!response.ok) {
        throw new Error(result.error ?? 'Unable to send proof right now.')
      }

      setFormSubmitted(true)
      event.currentTarget.reset()
    } catch (error) {
      setProofError(error instanceof Error ? error.message : 'Unable to send proof right now. Please try again.')
    } finally {
      setProofSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/kurogami-curriculum.jpg"
          alt="Kurogami curriculum backdrop"
          fill
          priority
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.76),rgba(0,0,0,0.96))]" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className="overflow-hidden rounded-[2rem] border border-[#f1c96a]/25 bg-[rgba(7,8,14,0.9)] shadow-[0_40px_120px_rgba(0,0,0,0.38)]">
          <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className={labelClass}>Curriculum</p>
              <h1 className="mt-5 font-[var(--disp)] text-5xl font-semibold leading-[0.92] text-white sm:text-6xl">Desk + Meme Engine</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[rgba(233,238,243,0.86)] sm:text-xl">
                Day trading framework. Night meme process. Kurogami orientation.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="font-[var(--disp)] text-4xl text-[var(--gold)]">$500</span>
                <span className="text-sm uppercase tracking-[0.2em] text-white/55">one-time access</span>
              </div>
            </div>
            <div className="relative min-h-[280px] border-t border-white/10 lg:border-l lg:border-t-0">
              <Image src="/images/kurogami-curriculum.jpg" alt="Kurogami curriculum desk and culture" fill className="object-cover object-center opacity-70" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Little to a Lot — Curriculum Brief</p>
          <div className="mt-7 space-y-8 text-[15px] leading-8 text-white/80">
            <div>
              <h2 className="font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">The standard way most people trade</h2>
              <p className="mt-4">Most retail traders and many traditional firms do some version of this:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>put a <span className="font-semibold text-[#f6d98c]">lot of capital</span> at risk</li>
                <li>aim for a <span className="font-semibold text-[#f6d98c]">small percentage</span> gain</li>
                <li>accept heavy drawdowns as “normal”</li>
                <li>enter without a hard invalidation</li>
                <li>hold through hope</li>
                <li>size emotionally</li>
              </ul>
              <p className="mt-4">A classic institutional pattern is using large capital to target modest returns. Example shape: deploy significant capital to make a comparatively small percentage.</p>
              <p className="mt-4">That model can work with scale, time, and diversification. It is not the only model.</p>
            </div>

            <div>
              <h2 className="font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">The Kurogami Desk approach</h2>
              <p className="mt-4 text-xl font-medium text-[#f6d98c]">Little to a lot.</p>
              <p className="mt-4">Meaning:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>risk a <span className="font-semibold text-[#f6d98c]">defined small amount</span> first</li>
                <li>require structure before entry</li>
                <li>define invalidation before the trade exists</li>
                <li>seek asymmetric payoff when the setup is valid</li>
                <li>journal the process, not just the outcome</li>
              </ul>
              <p className="mt-4">We are not trying to “guess markets.” We are training operators to make <span className="font-semibold text-[#f6d98c]">risk work harder per dollar</span>.</p>
            </div>

            <div>
              <h2 className="font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Side-by-side</h2>
              <div className="mt-4 overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/20">
                <table className="w-full border-collapse text-left text-sm text-white/80">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 text-[#f6d98c]">
                      <th className="px-4 py-3 font-medium uppercase tracking-[0.18em]">Most trading</th>
                      <th className="px-4 py-3 font-medium uppercase tracking-[0.18em]">Kurogami process</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Capital-heavy first', 'Process-heavy first'],
                      ['Vague invalidation', 'Hard invalidation'],
                      ['Hope holds', 'Pre-planned exits'],
                      ['Outcome obsession', 'Rule compliance'],
                      ['Large size, small edge usage', 'Controlled size, asymmetric aim'],
                      ['Emotional scaling', 'Starter size → add only if valid'],
                    ].map(([left, right]) => (
                      <tr key={left} className="border-b border-white/10 last:border-b-0">
                        <td className="px-4 py-3 align-top">{left}</td>
                        <td className="px-4 py-3 align-top text-[#f6d98c]">{right}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Why this can create an edge</h2>
              <p className="mt-4">Edge is not swagger. Edge is structure.</p>
              <ol className="mt-4 list-decimal space-y-3 pl-6">
                <li><span className="font-semibold text-[#f6d98c]">Risk is defined before entry</span> — If the thesis is wrong, the loss is already bounded.</li>
                <li><span className="font-semibold text-[#f6d98c]">Small risk can fund learning and compounding</span> — You do not need maximum size to practice precision.</li>
                <li><span className="font-semibold text-[#f6d98c]">Asymmetry matters</span> — A controlled loss versus a larger valid expansion changes account trajectory over time.</li>
                <li><span className="font-semibold text-[#f6d98c]">Process survives bad days</span> — Random trading dies on variance. Rules let you continue.</li>
                <li><span className="font-semibold text-[#f6d98c]">Two sleeves, one doctrine</span> — Day desk and meme engine differ in market, not in discipline.</li>
              </ol>
            </div>

            <div>
              <h2 className="font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">What the screenshots represent</h2>
              <p className="mt-4">The results shown on this page are <span className="font-semibold text-[#f6d98c]">process examples</span>:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>setups taken under rules</li>
                <li>defined risk</li>
                <li>execution against plan</li>
              </ul>
              <p className="mt-4">They are not a promise. They are evidence that the method is real, logged, and teachable.</p>
            </div>

            <div>
              <h2 className="font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">What this curriculum is</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>a framework for day-desk structure</li>
                <li>a rules-based meme-engine process</li>
                <li>orientation on how this fits the wider Kurogami system</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">What this curriculum is not</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>guaranteed income</li>
                <li>a signal service that removes responsibility</li>
                <li>a claim that every account will replicate any one result</li>
              </ul>
            </div>

            <div className="rounded-[1.2rem] border border-[#f1c96a]/25 bg-[#f1c96a]/[0.06] p-5">
              <h2 className="font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Operator doctrine</h2>
              <p className="mt-4 text-lg leading-8 text-white/85">Most people try to make a little from a lot. We train to pursue a lot from a little — through risk control, structure, and repetition.</p>
              <p className="mt-4 text-[#f6d98c]">Past results do not guarantee future performance. Trading can result in loss.</p>
            </div>
          </div>
        </article>

        <article className={panelClass}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={labelClass}>Strategy Results</p>
              <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Little to a lot in action</h2>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setCurrentStrategyIndex((current) => current === 0 ? strategyImages.length - 1 : current - 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/25 text-lg text-white transition hover:border-[#f1c96a]/35 hover:text-[#f1c96a]" aria-label="Previous strategy image">←</button>
              <button type="button" onClick={() => setCurrentStrategyIndex((current) => (current + 1) % strategyImages.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/25 text-lg text-white transition hover:border-[#f1c96a]/35 hover:text-[#f1c96a]" aria-label="Next strategy image">→</button>
            </div>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <button
              type="button"
              onClick={() => setSelectedStrategyImage(strategyImages[currentStrategyIndex])}
              className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 text-left transition hover:border-[#f1c96a]/35"
              aria-label="Open strategy result image"
            >
              <div className="relative aspect-[16/10] w-full bg-black/10">
                <Image
                  src={strategyImages[currentStrategyIndex]}
                  alt={`Strategy result screenshot ${currentStrategyIndex + 1}`}
                  fill
                  className="cursor-zoom-in object-contain p-2"
                />
              </div>
            </button>

            <div className="flex flex-col justify-center rounded-[1.4rem] border border-[#f1c96a]/20 bg-[#f1c96a]/[0.04] p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[#f6d98c]">Result snapshot</p>
              <h3 className="mt-4 font-[var(--disp)] text-2xl font-semibold text-white">Process examples from the desk</h3>
              <p className="mt-4 text-base leading-8 text-white/78">Each screenshot reflects a trade taken under structure: defined risk, a clear invalidation point, and execution against plan. These are not promises of performance; they are examples of rule-based decision making in practice.</p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
                <span>{currentStrategyIndex + 1}</span>
                <span className="inline-block h-px flex-1 bg-white/15" />
                <span>{strategyImages.length}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {strategyImages.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`View strategy image ${index + 1}`}
                onClick={() => setCurrentStrategyIndex(index)}
                className={[
                  'h-2.5 w-2.5 rounded-full transition-all',
                  index === currentStrategyIndex ? 'w-10 bg-[#f1c96a]' : 'bg-white/25 hover:bg-white/50',
                ].join(' ')}
              />
            ))}
          </div>
        </article>

        {selectedStrategyImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xl"
            onClick={() => setSelectedStrategyImage(null)}
          >
            <div
              className="relative w-full max-w-5xl rounded-[1.5rem] border border-white/10 bg-black/80 p-3 shadow-[0_40px_140px_rgba(0,0,0,0.8)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedStrategyImage(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-lg text-white transition hover:border-[#f1c96a]/35 hover:text-[#f1c96a]"
                aria-label="Close strategy image"
              >
                ×
              </button>

              <div className="flex items-center justify-end gap-2 pr-2 pt-2">
                <button type="button" onClick={() => {
                  const nextIndex = currentStrategyIndex === 0 ? strategyImages.length - 1 : currentStrategyIndex - 1
                  setCurrentStrategyIndex(nextIndex)
                  setSelectedStrategyImage(strategyImages[nextIndex])
                }} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-lg text-white transition hover:border-[#f1c96a]/35 hover:text-[#f1c96a]" aria-label="Previous strategy image">←</button>
                <button type="button" onClick={() => {
                  const nextIndex = (currentStrategyIndex + 1) % strategyImages.length
                  setCurrentStrategyIndex(nextIndex)
                  setSelectedStrategyImage(strategyImages[nextIndex])
                }} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-lg text-white transition hover:border-[#f1c96a]/35 hover:text-[#f1c96a]" aria-label="Next strategy image">→</button>
              </div>

              <div className="relative max-h-[80vh] overflow-hidden rounded-[1rem] bg-black/30">
                <Image
                  src={selectedStrategyImage}
                  alt="Expanded strategy result"
                  width={1600}
                  height={1100}
                  className="max-h-[80vh] w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}

        <article className={panelClass}>
          <p className={labelClass}>What You Get</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              'Day trading desk foundations',
              'Meme Engine modules (8:00 PM process)',
              'Kurogami World education',
              'Access to the student Telegram with all resources',
            ].map((item) => (
              <div key={item} className="rounded-[1.1rem] border border-white/10 bg-black/25 p-5 text-base leading-7 text-white/85">{item}</div>
            ))}
          </div>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>How It Works</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              'Pay $500 in crypto',
              'Submit transaction proof + contact',
              'Receive Telegram access',
              'All modules and resources are delivered in Telegram',
            ].map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[1.1rem] border border-white/10 bg-black/25 p-5">
                <span className="font-mono text-sm text-[var(--gold)]">0{index + 1}</span>
                <p className="text-base leading-7 text-white/85">{step}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[1.7rem] border border-[#f1c96a]/25 bg-[rgba(8,10,17,0.94)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.3)] sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={labelClass}>Payment</p>
              <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Choose your crypto path</h2>
            </div>
            <p className="font-[var(--disp)] text-4xl text-[var(--gold)]">$500</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.2rem] border border-white/10 bg-black/20 p-6 opacity-70">
              <p className={labelClass}>Primary CTA</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Pay with Wallet</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">Wallet connect coming soon. Use Send Manually for now.</p>
              <button type="button" disabled className="btn btn-primary mt-6 cursor-not-allowed opacity-50">Coming Soon</button>
            </div>

            <div className="rounded-[1.2rem] border border-[#f1c96a]/25 bg-[#f1c96a]/[0.06] p-6">
              <p className={labelClass}>Secondary CTA</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Send Manually</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">Send the $500 equivalent and include the reference note <span className="text-[#f6d98c]">CURRICULUM-500</span>.</p>
              <div className="mt-5 space-y-3">
                {(Object.keys(treasuryAddresses) as AssetKey[]).map((asset) => (
                  <div key={asset} className="rounded-[0.9rem] border border-white/10 bg-black/35 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--gold)]">{asset}</span>
                      <button type="button" onClick={() => copyAddress(asset)} className="text-xs uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-[var(--gold)]">{copiedAsset === asset ? 'Copied' : 'Copy address'}</button>
                    </div>
                    <p className="mt-2 break-all font-mono text-xs leading-6 text-white/78">{treasuryAddresses[asset]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 rounded-[0.9rem] border border-[#f1c96a]/30 bg-[#f1c96a]/[0.08] px-4 py-3 text-sm leading-7 text-[#f6d98c]">Use only the official addresses shown on this page. Crypto transfers are irreversible.</p>
        </article>

        <article id="curriculum-proof" className={panelClass}>
          <p className={labelClass}>Confirmation Form</p>
          <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Submit payment proof</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72">After sending, provide your details so access can be manually verified and delivered through Telegram.</p>
          <form className="mt-7 grid gap-5 md:grid-cols-2" onSubmit={submitProof}>
            <label><span className="text-xs uppercase tracking-[0.2em] text-white/70">Name or IG handle</span><input name="name" required type="text" className={inputClass} /></label>
            <label><span className="text-xs uppercase tracking-[0.2em] text-white/70">Contact (Telegram preferred)</span><input name="contact" required type="text" className={inputClass} /></label>
            <label><span className="text-xs uppercase tracking-[0.2em] text-white/70">Asset sent</span><select name="asset" required value={formAsset} onChange={(event) => setFormAsset(event.target.value as AssetKey)} className={inputClass}><option>SOL</option><option>ETH</option><option>BTC</option></select></label>
            <label><span className="text-xs uppercase tracking-[0.2em] text-white/70">Amount</span><input name="amount" required type="text" placeholder="$500 equivalent" className={inputClass} /></label>
            <label className="md:col-span-2"><span className="text-xs uppercase tracking-[0.2em] text-white/70">Transaction hash</span><input name="txHash" required type="text" className={inputClass} /></label>
            <label className="md:col-span-2"><span className="text-xs uppercase tracking-[0.2em] text-white/70">Screenshot</span><input name="screenshot" type="file" accept="image/*" className="mt-2 block w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-[#f1c96a]/20 file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.15em] file:text-[var(--gold)]" /></label>
            <button type="submit" disabled={proofSubmitting} className="btn btn-primary disabled:cursor-wait disabled:opacity-60 md:col-span-2">{proofSubmitting ? 'Sending Proof...' : 'Submit Payment Proof'}</button>
          </form>
          {proofError && <p className="mt-5 rounded-[0.9rem] border border-red-300/30 bg-red-950/30 px-4 py-4 text-sm leading-7 text-red-100">{proofError}</p>}
          {formSubmitted && <p className="mt-5 rounded-[0.9rem] border border-[#f1c96a]/35 bg-[#f1c96a]/10 px-4 py-4 text-sm leading-7 text-[#f6d98c]">Payment received pending verification. Telegram access is sent after confirmation. All curriculum resources are inside the Telegram room.</p>}
        </article>

        <article className="rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 text-center shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10">
          <p className={labelClass}>Notes</p>
          <div className="mx-auto mt-6 grid max-w-3xl gap-3 text-sm leading-7 text-white/72 sm:grid-cols-2">
            <p>Education only</p>
            <p>No guaranteed returns</p>
            <p>Access is manual after payment verification</p>
            <p>Use only official addresses shown on this page</p>
          </div>
          <p className="mt-8 font-[var(--disp)] text-2xl text-white">Desk discipline. Meme timing. Kurogami orientation.</p>
        </article>
      </section>
    </main>
  )
}
