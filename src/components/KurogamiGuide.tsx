'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

type GuideMessage = {
  role: 'assistant' | 'user'
  text: string
}

const quickQuestions = [
  'How does Kurogami work?',
  'What lanes are live?',
  'What are the asset protocols?',
  'What do holders receive?',
  'How do I reserve founding art?',
]

function answerQuestion(question: string) {
  const normalized = question.toLowerCase()

  if (normalized.includes('reserve') || normalized.includes('buy') || normalized.includes('purchase')) {
    return 'To reserve founding art, choose a piece, then follow the crypto onboarding flow on the Reserve page. You can buy SOL, ETH, or BTC through Cash App, send the matching asset to the official treasury address, include your piece code, and submit the transaction proof for manual confirmation.'
  }

  if (normalized.includes('receive') || normalized.includes('benefit') || normalized.includes('holder') || normalized.includes('get')) {
    return 'Founding holders receive reservation of a specific art piece, the corresponding rare NFT at collection launch, $KRG allocation based on the number of NFTs held, and access into Kurogami World’s artist, event, network, and future world layers.'
  }

  if (normalized.includes('fsdm') || normalized.includes('fine shit') || normalized.includes('meme')) {
    return 'Fine Shit Do Memes is Kurogami’s women-native meme desk and social-club lane, with an official coin and curriculum. Enter the live dapp at fine-shit-do-memes-pied.vercel.app.'
  }

  if (normalized.includes('gami boyz') || normalized.includes('brotherhood')) {
    return 'Gami Boyz is Kurogami’s brotherhood lane for raw culture, access, and motion. Enter the live dapp at gami-boyz.vercel.app.'
  }

  if (normalized.includes('fashion')) {
    return 'Fashion Protocol is a live Kurogami asset rail for drops, provenance, and tokenization. Enter it at kurogami-fashion.vercel.app.'
  }

  if (normalized.includes('real estate') || normalized.includes('property')) {
    return 'Real Estate Protocol is a live Kurogami asset rail for property packaging, claim surfaces, and spatial open-house direction. Enter it at kurogami-real-estate.vercel.app.'
  }

  if (normalized.includes('watch') || normalized.includes('timepiece')) {
    return 'Watches Protocol is a live Kurogami asset rail for timepiece packaging and provenance records. Enter it at kurogami-watches.vercel.app.'
  }

  if (normalized.includes('car') || normalized.includes('automotive')) {
    return 'Cars Protocol is a live Kurogami asset rail for automotive packaging and provenance records. Enter it at kurogami-cars.vercel.app.'
  }

  if (normalized.includes('yacht') || normalized.includes('marine')) {
    return 'Yachts Protocol is a live Kurogami asset rail for marine asset packaging and provenance records. Enter it at kurogami-yachts.vercel.app.'
  }

  if (normalized.includes('art protocol') || normalized.includes('art rail')) {
    return 'Art Protocol is a live Kurogami asset rail for cultural works, provenance, and ownership records. Enter it at kurogami-art.vercel.app.'
  }

  if (normalized.includes('lane') || normalized.includes('live') || normalized.includes('room')) {
    return 'The live Kurogami lanes are Fine Shit Do Memes and Gami Boyz. The live asset protocols are Fashion, Real Estate, Watches, Cars, Yachts, and Art. The Lanes page is the full system index with direct entry to each dapp.'
  }

  if (normalized.includes('protocol') || normalized.includes('asset')) {
    return 'Kurogami’s live asset protocols are Fashion for drops, provenance, and tokenization; Real Estate for property packaging and claim surfaces; Watches, Cars, and Yachts for provenance-backed physical asset packaging; and Art for cultural works and ownership records. These are operating rails, not guaranteed-return products.'
  }

  if (normalized.includes('protocol') || normalized.includes('work') || normalized.includes('kurogami')) {
    return 'Kurogami World is the parent culture-finance social club and operating system. Fine Shit Do Memes and Gami Boyz are specialized club rooms; Fashion, Real Estate, Watches, Cars, Yachts, and Art are live asset protocols. Culture is the front door; access and ownership connect the system.'
  }

  if (normalized.includes('crypto') || normalized.includes('cash app') || normalized.includes('pay')) {
    return 'The beginner path is Cash App: buy SOL, ETH, or BTC, copy the matching official treasury address from the Reserve page, send the payment with your piece code, and submit your transaction hash or screenshot. Always verify the asset and address before sending.'
  }

  if (normalized.includes('token') || normalized.includes('krg')) {
    return '$KRG is the conceptual economic layer of Kurogami World. Allocation is tied to NFT holdings and future participation modules, but there are no guaranteed returns. Review the token page for the current framing.'
  }

  return 'I can explain Kurogami, the live club lanes and asset protocols, holder benefits, founding-art reservations, Cash App crypto payment steps, or $KRG. Try one of the questions below.'
}

export default function KurogamiGuide() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<GuideMessage[]>([
    {
      role: 'assistant',
      text: 'Welcome to Kurogami Guide. Ask about live lanes, asset protocols, founding art, holder benefits, or payment flow.',
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

  return (
    <div className="guide-utility">
      <button
        type="button"
        className="guide-menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="kurogamiUtilityMenu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="guide-menu-icon" aria-hidden="true">☰</span>
        <span>Menu</span>
      </button>

      {menuOpen && (
        <div id="kurogamiUtilityMenu" className="guide-menu-panel">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/reserve" onClick={() => setMenuOpen(false)}>Reserve Founding Art</Link>
          <Link href="/club" onClick={() => setMenuOpen(false)}>The Club</Link>
          <Link href="/lanes" onClick={() => setMenuOpen(false)}>Enter the System</Link>
          <Link href="/protocols" onClick={() => setMenuOpen(false)}>Asset Protocols</Link>
          <Link href="/curriculum" onClick={() => setMenuOpen(false)}>Curriculum</Link>
          <Link href="/incubation" onClick={() => setMenuOpen(false)}>Incubation</Link>
          <Link href="/lore" onClick={() => setMenuOpen(false)}>The Lore</Link>
          <Link href="/token" onClick={() => setMenuOpen(false)}>$KRG Layer</Link>
          <Link href="/solana" onClick={() => setMenuOpen(false)}>Solana Rails</Link>
          <a href="https://fine-shit-do-memes-pied.vercel.app/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Fine Shit Do Memes</a>
          <a href="https://gami-boyz.vercel.app/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Gami Boyz</a>
          <button type="button" onClick={() => setAssistantOpen(true)}>Ask Kurogami Guide</button>
        </div>
      )}

      <button
        type="button"
        className="guide-assistant-launch"
        aria-expanded={assistantOpen}
        onClick={() => setAssistantOpen((open) => !open)}
      >
        <span className="guide-assistant-dot" aria-hidden="true" />
        Kurogami Guide
      </button>

      {assistantOpen && (
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
      )}
    </div>
  )
}
