'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'

type GuideMessage = {
  role: 'assistant' | 'user'
  text: string
}

const quickQuestions = [
  'What is Kurogami?',
  'What is the Tokenization Engine?',
  'What is the Collateral Engine?',
  'What asset verticals are supported?',
  'What can I see in Portfolio OS?',
  'How do I connect my wallet?',
  'How do I request access?',
]

function answerQuestion(question: string) {
  const normalized = question.toLowerCase()

  if (normalized.includes('wallet') || normalized.includes('phantom') || normalized.includes('connect')) {
    return 'Tap Connect Wallet in the top nav. On desktop it opens a picker for any installed Solana wallet; on mobile it deep-links straight into the Phantom app (or the App Store if you don’t have it yet) so you can approve the connection there.'
  }

  if (normalized.includes('access') || normalized.includes('apply') || normalized.includes('sign up') || normalized.includes('join')) {
    return 'Kurogami is rolling out by stages. Tap Request Access in the nav to reach the team directly, or use the Request Access form for a fuller intake. Early access prioritizes operators, originators, and capital partners who understand the loop.'
  }

  if (normalized.includes('tokeniz') || normalized.includes('asset nft') || normalized.includes('mint')) {
    return 'The Tokenization Engine turns verified real-world value into composable on-chain units. An asset moves through intake, verification, and a compliant legal wrap, then mints as a standardized Asset NFT that can be vaulted, fractionalized, or posted as collateral. See the Tokenization Engine page for the full flow.'
  }

  if (normalized.includes('collateral') || normalized.includes('borrow') || normalized.includes('liquidity') || normalized.includes('health factor') || normalized.includes('ltv')) {
    return 'The Collateral Engine lets you deposit an Asset NFT or reserve units, receive borrow capacity based on its tier, and deploy that liquidity without a forced sale. Borrow capacity ranges from up to 70% LTV for Tier A (reserve / gold-backed units) down to 35% for Tier C. Positions are tracked by a health factor, and the full breakdown is on the Collateral Engine page.'
  }

  if (normalized.includes('market')) {
    return 'Kurogami Markets covers five surfaces on the same asset base: spot ownership, collateral/borrow, vault/yield, prediction/events tied to real asset outcomes, and basket/index exposure across verticals. Most surfaces are data-gated behind early access right now.'
  }

  if (normalized.includes('portfolio')) {
    return 'Portfolio OS is the full-loop view of your position: balances, tokenized assets, collateral positions and health factor, borrow capacity, active strategies, vertical exposures, and basket exposure. Connect your wallet to unlock live data once you have approved access.'
  }

  if (normalized.includes('vertical') || normalized.includes('reserve') || normalized.includes('real estate') || normalized.includes('watch') || normalized.includes('art') || normalized.includes('fashion') || normalized.includes('fleet') || normalized.includes('nil') || normalized.includes('sport')) {
    return 'Asset Verticals are policy packs on the same engine: Reserve/Gold, Real Estate, Watches, Art & Collectibles, Fashion/Inventory, Mobility/Fleet, and Sports/NIL. Only intake requirements, verification standards, and risk tiers change per vertical — the Tokenization and Collateral Engines stay the same. See the Asset Verticals page for details.'
  }

  if (normalized.includes('architecture') || normalized.includes('layer') || normalized.includes('how does') || normalized.includes('how it work') || normalized.includes('system')) {
    return 'Kurogami is one system across six layers: the Desk generates capital, the Tokenization Engine turns real-world assets into Asset NFTs, the Collateral Engine unlocks liquidity against them, Vertical Vaults hold assets by policy pack, Markets route exposure, and the Basket Layer indexes positions across verticals. See the Architecture page for the full map.'
  }

  if (normalized.includes('krg') || normalized.includes('token ')) {
    return 'Kurogami’s current live product is the Tokenization + Collateral + Portfolio protocol — there is no live token sale right now. Check back on the Architecture and Markets pages as the monetary layer rolls out.'
  }

  if (normalized.includes('kurogami')) {
    return 'Kurogami is the portfolio structuring protocol for real-world assets: tokenize verified assets into Asset NFTs, post them as collateral for liquidity without a forced sale, and manage the full loop from one Portfolio OS. Try the Tokenization Engine, Collateral Engine, Markets, Portfolio OS, or Asset Verticals questions below.'
  }

  return 'I can walk you through the Tokenization Engine, Collateral Engine, Markets, Portfolio OS, Asset Verticals, system architecture, wallet connect, or requesting access. Try one of the questions below.'
}

export default function KurogamiGuide() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<GuideMessage[]>([
    {
      role: 'assistant',
      text: 'Welcome to Kurogami Guide. Ask about the Tokenization Engine, Collateral Engine, Markets, Portfolio OS, Asset Verticals, wallet connect, or requesting access.',
    },
  ])

  const submitQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedQuestion = question.trim()
    if (!trimmedQuestion) return

    setMessages((current) => [
      ...current,
      { role: 'user', text: trimmedQuestion },
      { role: 'assistant', text: answerQuestion(trimmedQuestion) },
    ])
    setQuestion('')
  }

  const askQuickQuestion = (quickQuestion: string) => {
    setQuestion(quickQuestion)
    setMessages((current) => [
      ...current,
      { role: 'user', text: quickQuestion },
      { role: 'assistant', text: answerQuestion(quickQuestion) },
    ])
  }

  const openAssistant = () => {
    setMenuOpen(false)
    setAssistantOpen((open) => !open)
  }

  const openMenu = () => {
    setAssistantOpen(false)
    setMenuOpen((open) => !open)
  }

  useEffect(() => {
    if (!menuOpen && !assistantOpen) return
    const previousOverflow = document.body.style.overflow
    if (window.matchMedia('(max-width: 640px)').matches) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen, assistantOpen])

  return (
    <div className="guide-utility">
      <button
        type="button"
        className="guide-menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="kurogamiUtilityMenu"
        onClick={openMenu}
      >
        <span className="guide-menu-icon" aria-hidden="true">☰</span>
        <span>Menu</span>
      </button>

      {menuOpen && (
        <>
          <div className="guide-backdrop" onClick={() => setMenuOpen(false)} />
          <div id="kurogamiUtilityMenu" className="guide-menu-panel">
            <Link href="/" onClick={() => setMenuOpen(false)}>Overview</Link>
            <Link href="/tokenization-engine" onClick={() => setMenuOpen(false)}>Tokenization Engine</Link>
            <Link href="/collateral-engine" onClick={() => setMenuOpen(false)}>Collateral Engine</Link>
            <Link href="/markets" onClick={() => setMenuOpen(false)}>Markets</Link>
            <Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio OS</Link>
            <Link href="/verticals" onClick={() => setMenuOpen(false)}>Asset Verticals</Link>
            <Link href="/architecture" onClick={() => setMenuOpen(false)}>Architecture</Link>
            <Link href="/access" onClick={() => setMenuOpen(false)}>Request Access</Link>
            <button type="button" onClick={openAssistant}>Ask Kurogami Guide</button>
          </div>
        </>
      )}

      <button
        type="button"
        className="guide-assistant-launch"
        aria-expanded={assistantOpen}
        aria-label="Ask Kurogami Guide"
        onClick={openAssistant}
      >
        <span className="guide-assistant-dot" aria-hidden="true" />
        <span className="guide-assistant-label">Kurogami Guide</span>
      </button>

      {assistantOpen && (
        <>
          <div className="guide-backdrop" onClick={() => setAssistantOpen(false)} />
          <div className="guide-assistant-panel" role="dialog" aria-label="Kurogami Guide assistant">
          <div className="guide-assistant-header">
            <div>
              <p className="guide-kicker">Kurogami Guide</p>
              <p className="guide-title">Protocol + FAQ assistant</p>
            </div>
            <button type="button" className="guide-close" aria-label="Close Kurogami Guide" onClick={() => setAssistantOpen(false)}>×</button>
          </div>

          <div className="guide-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`guide-message ${message.role}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="guide-quick-questions">
            {quickQuestions.map((quickQuestion) => (
              <button key={quickQuestion} type="button" onClick={() => askQuickQuestion(quickQuestion)}>
                {quickQuestion}
              </button>
            ))}
          </div>

          <form className="guide-question-form" onSubmit={submitQuestion}>
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask a question..."
              aria-label="Ask Kurogami Guide a question"
            />
            <button type="submit">Ask</button>
          </form>
          <p className="guide-disclaimer">Informational guide only. Review official page details before sending funds.</p>
          </div>
        </>
      )}
    </div>
  )
}
