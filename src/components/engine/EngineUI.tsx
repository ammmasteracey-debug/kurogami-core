'use client'

import Link from 'next/link'
import { Fragment } from 'react'

export function EngineHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle: string }) {
  return (
    <header className="engine-panel p-7 sm:p-12">
      <p className="engine-kicker">{kicker}</p>
      <h1 className="mt-4 max-w-3xl font-[var(--disp)] text-4xl font-semibold leading-[0.98] text-white sm:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">{subtitle}</p>
    </header>
  )
}

export function SectionIntro({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="border-b border-white/10 pb-5">
      <p className="engine-kicker">{kicker}</p>
      <h2 className="mt-3 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{subtitle}</p>}
    </div>
  )
}

export function FlowSteps({ steps }: { steps: string[] }) {
  return (
    <div className="flow-steps">
      {steps.map((step, index) => (
        <Fragment key={step}>
          <div className="flow-step">{step}</div>
          {index < steps.length - 1 && <div className="flow-arrow">→</div>}
        </Fragment>
      ))}
    </div>
  )
}

export function LoopSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="loop-list">
      {steps.map((step, index) => (
        <li key={step} className="loop-item">
          <span className="loop-number">{String(index + 1).padStart(2, '0')}</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  )
}

export function ObjectCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="infrastructure-card">
      <h3 className="font-[var(--disp)] text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/70">{body}</p>
    </article>
  )
}

export function EngineCta({ label, href, secondaryLabel, secondaryHref }: { label: string; href: string; secondaryLabel?: string; secondaryHref?: string }) {
  const isExternal = href.startsWith('http')
  const isSecondaryExternal = Boolean(secondaryHref && secondaryHref.startsWith('http'))
  const isPopupButton = href === '#'
  const isSecondaryPopupButton = secondaryHref === '#'

  const handleOpenAccess = () => {
    window.dispatchEvent(new CustomEvent('kurogami-open-access'))
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {isPopupButton ? (
        <button type="button" onClick={handleOpenAccess} className="btn btn-gold">{label}</button>
      ) : isExternal ? (
        <a href={href} target="_blank" rel="noreferrer" className="btn btn-gold">{label}</a>
      ) : (
        <Link href={href} className="btn btn-gold">{label}</Link>
      )}

      {secondaryLabel && secondaryHref && (
        isSecondaryPopupButton ? (
          <button type="button" onClick={handleOpenAccess} className="btn btn-gold-outline">{secondaryLabel}</button>
        ) : isSecondaryExternal ? (
          <a href={secondaryHref} target="_blank" rel="noreferrer" className="btn btn-gold-outline">{secondaryLabel}</a>
        ) : (
          <Link href={secondaryHref} className="btn btn-gold-outline">{secondaryLabel}</Link>
        )
      )}
    </div>
  )
}

export function PlaceholderPanel({ label }: { label: string }) {
  return <div className="placeholder-panel">{label}</div>
}
