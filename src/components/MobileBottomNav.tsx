'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ORDER = [
  { href: '/', label: 'Overview' },
  { href: '/tokenization-engine', label: 'Tokenize' },
  { href: '/collateral-engine', label: 'Collateral' },
  { href: '/markets', label: 'Markets' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/verticals', label: 'Verticals' },
  { href: '/architecture', label: 'Architecture' },
]

export default function MobileBottomNav() {
  const pathname = usePathname()
  const activeIndex = Math.max(
    0,
    NAV_ORDER.findIndex((item) => item.href === pathname)
  )
  const current = NAV_ORDER[activeIndex]
  const prev = NAV_ORDER[(activeIndex - 1 + NAV_ORDER.length) % NAV_ORDER.length]
  const next = NAV_ORDER[(activeIndex + 1) % NAV_ORDER.length]

  return (
    <nav className="mobile-bottom-nav" aria-label="Continue browsing">
      <Link href={prev.href} className="mobile-bottom-nav-btn" aria-label={`Previous section: ${prev.label}`}>
        <span aria-hidden="true">‹</span>
        <span className="mobile-bottom-nav-side-label">{prev.label}</span>
      </Link>
      <span className="mobile-bottom-nav-current">{current.label}</span>
      <Link href={next.href} className="mobile-bottom-nav-btn" aria-label={`Next section: ${next.label}`}>
        <span className="mobile-bottom-nav-side-label">{next.label}</span>
        <span aria-hidden="true">›</span>
      </Link>
    </nav>
  )
}
