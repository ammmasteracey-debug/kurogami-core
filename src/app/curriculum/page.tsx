'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js'
import { BrowserProvider, parseEther } from 'ethers'

type AssetKey = 'SOL' | 'ETH' | 'BTC'
type WalletAsset = 'SOL' | 'ETH'
type WalletPhase = 'idle' | 'connecting' | 'connected' | 'pending' | 'success' | 'error'

type SolanaProvider = {
  connect: () => Promise<{ publicKey?: { toString: () => string } }>
  signAndSendTransaction: (transaction: Transaction) => Promise<{ signature: string }>
}

type EthereumProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
}

declare global {
  interface Window {
    solana?: SolanaProvider
    ethereum?: EthereumProvider
  }
}

const treasuryAddresses: Record<AssetKey, string> = {
  SOL: '7Vp969jxuFYfDWEvhndhxuQzLB6CtyFCfviaPdWtZNrY',
  ETH: '0x0D90097E56445f0340221746FA7B20d62782C169',
  BTC: 'bc1qs2k98m4dw36t957rm733kcz59sn4thrur03mwa',
}

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'
const inputClass = 'mt-2 w-full rounded-[0.85rem] border border-white/12 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#f1c96a]/45'
const solanaRpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_URL ?? 'https://api.mainnet-beta.solana.com'

function truncateAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

async function fetchUsdQuote(asset: WalletAsset) {
  const id = asset === 'SOL' ? 'solana' : 'ethereum'
  const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`)
  if (!response.ok) throw new Error('Live crypto quote unavailable')
  const data = await response.json() as Record<string, { usd?: number }>
  const price = data[id]?.usd
  if (!price) throw new Error('Live crypto quote unavailable')
  return 500 / price
}

export default function CurriculumPage() {
  const [copiedAsset, setCopiedAsset] = useState<AssetKey | null>(null)
  const [selectedAsset, setSelectedAsset] = useState<WalletAsset>('SOL')
  const [formAsset, setFormAsset] = useState<AssetKey>('SOL')
  const [walletAddress, setWalletAddress] = useState('')
  const [walletPhase, setWalletPhase] = useState<WalletPhase>('idle')
  const [walletStatus, setWalletStatus] = useState('')
  const [quotedAmount, setQuotedAmount] = useState('')
  const [quotedValue, setQuotedValue] = useState<number | null>(null)
  const [txHash, setTxHash] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [proofSubmitting, setProofSubmitting] = useState(false)
  const [proofError, setProofError] = useState('')

  const copyAddress = async (asset: AssetKey) => {
    try {
      await navigator.clipboard.writeText(treasuryAddresses[asset])
      setCopiedAsset(asset)
      window.setTimeout(() => setCopiedAsset(null), 1800)
    } catch (_error) {
      setWalletStatus('Copy failed. Please select the address manually.')
    }
  }

  const connectWallet = async () => {
    setWalletPhase('connecting')
    setWalletStatus('Connecting wallet...')
    try {
      if (selectedAsset === 'SOL' && window.solana) {
        const response = await window.solana.connect()
        const address = response.publicKey?.toString()
        if (!address) throw new Error('Solana wallet did not return an address')
        setWalletAddress(address)
        const quote = await fetchUsdQuote('SOL')
        setQuotedValue(quote)
        setQuotedAmount(`${quote.toFixed(6)} SOL`)
        setWalletPhase('connected')
        setWalletStatus('Wallet connected. Review the amount, then confirm payment.')
        return
      }

      if (selectedAsset === 'ETH' && window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }) as string[]
        const address = accounts[0]
        if (!address) throw new Error('Ethereum wallet did not return an address')
        setWalletAddress(address)
        const quote = await fetchUsdQuote('ETH')
        setQuotedValue(quote)
        setQuotedAmount(`${quote.toFixed(6)} ETH`)
        setWalletPhase('connected')
        setWalletStatus('Wallet connected. Review the amount, then confirm payment.')
        return
      }

      setWalletPhase('error')
      setWalletStatus('No browser wallet detected. Use Send Manually below with an official treasury address.')
    } catch (error) {
      setWalletPhase('error')
      setWalletStatus(error instanceof Error ? error.message : 'Wallet connection failed. Use Send Manually below.')
    }
  }

  const sendWalletPayment = async () => {
    setWalletPhase('pending')
    setWalletStatus('Transaction pending. Confirm the transfer in your wallet...')
    try {
      if (selectedAsset === 'SOL' && window.solana) {
        const connection = new Connection(solanaRpcUrl, 'confirmed')
        const from = new PublicKey(walletAddress)
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: from,
            toPubkey: new PublicKey(treasuryAddresses.SOL),
            lamports: Math.round((quotedValue ?? await fetchUsdQuote('SOL')) * 1_000_000_000),
          }),
        )
        transaction.feePayer = from
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
        const result = await window.solana.signAndSendTransaction(transaction)
        setTxHash(result.signature)
        setWalletPhase('success')
        setWalletStatus('Payment sent. Submit your Telegram contact below for manual access approval.')
        document.getElementById('curriculum-proof')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      if (selectedAsset === 'ETH' && window.ethereum) {
        const provider = new BrowserProvider(window.ethereum as never)
        const signer = await provider.getSigner()
        const result = await signer.sendTransaction({
          to: treasuryAddresses.ETH,
          value: parseEther((quotedValue ?? await fetchUsdQuote('ETH')).toFixed(8)),
        })
        setTxHash(result.hash)
        setWalletPhase('success')
        setWalletStatus('Payment submitted. Submit your Telegram contact below for manual access approval.')
        document.getElementById('curriculum-proof')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      throw new Error('Wallet is no longer available. Use Send Manually below.')
    } catch (error) {
      setWalletPhase('error')
      setWalletStatus(error instanceof Error ? error.message : 'Payment failed. Use Send Manually below.')
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
            <div className="rounded-[1.2rem] border border-[#f1c96a]/25 bg-[#f1c96a]/[0.06] p-6">
              <p className={labelClass}>Primary CTA</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Pay with Wallet</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">Connect an available Solana or Ethereum browser wallet. The exact $500 equivalent is confirmed with your submitted proof.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {(['SOL', 'ETH'] as WalletAsset[]).map((asset) => (
                  <button key={asset} type="button" onClick={() => { setSelectedAsset(asset); setWalletPhase('idle'); setWalletStatus(''); setQuotedAmount(''); setQuotedValue(null) }} className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${selectedAsset === asset ? 'border-[#f1c96a]/55 bg-[#f1c96a]/15 text-[var(--gold)]' : 'border-white/10 bg-black/20 text-white/60'}`}>
                    {asset}
                  </button>
                ))}
              </div>
              {walletPhase === 'idle' || walletPhase === 'error' ? (
                <button type="button" onClick={connectWallet} className="btn btn-primary mt-6">Pay with Wallet</button>
              ) : walletPhase === 'connecting' || walletPhase === 'pending' ? (
                <button type="button" disabled className="btn btn-primary mt-6 opacity-60">{walletPhase === 'connecting' ? 'Connecting...' : 'Transaction pending...'}</button>
              ) : walletPhase === 'connected' ? (
                <div className="mt-6 rounded-[0.9rem] border border-[#f1c96a]/25 bg-black/25 p-4">
                  <p className="text-sm text-white/80">Connected: <span className="font-mono text-[#f6d98c]">{truncateAddress(walletAddress)}</span></p>
                  <p className="mt-2 text-sm text-white/80">Selected asset: <span className="text-[#f6d98c]">{selectedAsset}</span></p>
                  <p className="mt-2 text-sm text-white/80">Amount due: <span className="text-[#f6d98c]">{quotedAmount} ($500 USD equivalent)</span></p>
                  <button type="button" onClick={sendWalletPayment} className="btn btn-primary mt-5">Confirm Payment</button>
                </div>
              ) : (
                <div className="mt-6 rounded-[0.9rem] border border-[#f1c96a]/35 bg-[#f1c96a]/10 p-4 text-sm leading-7 text-[#f6d98c]">Payment successful. Transaction captured below.</div>
              )}
              {walletStatus && walletPhase !== 'connected' && <p className="mt-4 break-words text-sm leading-7 text-[#f6d98c]">{walletStatus}</p>}
            </div>

            <div className="rounded-[1.2rem] border border-white/10 bg-black/25 p-6">
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
            <label className="md:col-span-2"><span className="text-xs uppercase tracking-[0.2em] text-white/70">Transaction hash</span><input name="txHash" required type="text" value={txHash} onChange={(event) => setTxHash(event.target.value)} className={inputClass} /></label>
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
