'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

type GuideMessage = {
  role: 'assistant' | 'user'
  text: string
}

const quickQuestions = [
  'How does Kurogami work?',
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

  if (normalized.includes('protocol') || normalized.includes('work') || normalized.includes('kurogami')) {
    return 'Kurogami World is a cultural and access protocol: artists create, collectors reserve founding art, the art becomes a key NFT at launch, and holders enter a living network of artists, events, digital districts, and future utility layers. Culture is the front door; access and ownership connect the system.'
  }

  if (normalized.includes('crypto') || normalized.includes('cash app') || normalized.includes('pay')) {
    return 'The beginner path is Cash App: buy SOL, ETH, or BTC, copy the matching official treasury address from the Reserve page, send the payment with your piece code, and submit your transaction hash or screenshot. Always verify the asset and address before sending.'
  }

  if (normalized.includes('token') || normalized.includes('krg')) {
    return '$KRG is the conceptual economic layer of Kurogami World. Allocation is tied to NFT holdings and future participation modules, but there are no guaranteed returns. Review the token page for the current framing.'
  }

  return 'I can explain the Kurogami protocol, holder benefits, founding-art reservations, Cash App crypto payment steps, or $KRG. Try one of the questions below.'
}

export default function KurogamiGuide() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<GuideMessage[]>([
    {
      role: 'assistant',
      text: 'Welcome to Kurogami Guide. Ask me about the protocol, founding art, holder benefits, or how the payment flow works.',
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
          <Link href="/curriculum" onClick={() => setMenuOpen(false)}>Curriculum</Link>
          <Link href="/incubation" onClick={() => setMenuOpen(false)}>Incubation</Link>
          <Link href="/lore" onClick={() => setMenuOpen(false)}>The Lore</Link>
          <Link href="/token" onClick={() => setMenuOpen(false)}>$KRG Layer</Link>
          <Link href="/solana" onClick={() => setMenuOpen(false)}>Solana Rails</Link>
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
