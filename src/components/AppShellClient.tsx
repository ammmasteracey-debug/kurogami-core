'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import KurogamiGuide from './KurogamiGuide'
import MobileBottomNav from './MobileBottomNav'

const landingNavigation = [
  { label: 'System', id: 'system' },
  { label: 'Stack', id: 'stack' },
  { label: 'Operators', id: 'operators' },
  { label: 'Network', id: 'network' },
  { label: 'Agentic', id: 'agentic-network' },
  { label: 'BriefOS', id: 'briefos' },
  { label: 'Access', id: 'access' },
]

export default function AppShellClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const usesInvestorChrome = isHome || pathname === '/access' || pathname === '/network-leaders'

  if (pathname === '/loading') return <>{children}</>

  return (
    <>
      {!usesInvestorChrome && <KurogamiGuide />}
      <header className={`site-nav-wrap sticky top-0 ${usesInvestorChrome ? 'investor-nav-wrap' : ''}`}>
        <div className="mx-auto max-w-6xl px-6 pt-4 sm:px-8 lg:px-10">
          <nav className={`site-nav-card ${usesInvestorChrome ? 'investor-nav-card' : ''}`} aria-label="Main navigation">
            <Link href="/" className="site-nav-brand">
              <div className="site-nav-logo-wrap">
                <Image src="/images/kurogami-official-logo.jpg" alt="Kurogami" width={40} height={40} className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--gold)]">Kurogami</p>
                <p className="investor-brand-subtitle">Process-trained intelligence</p>
              </div>
            </Link>

            {usesInvestorChrome ? (
              <div className="site-nav-links investor-nav-links">
                {landingNavigation.map(({ label, id }) => (
                  <Link key={id} href={isHome ? `#${id}` : `/#${id}`}>{label}</Link>
                ))}
              </div>
            ) : (
              <div className="site-nav-links">
                <Link href="/#system">System</Link>
                <Link href="/#stack">Stack</Link>
                <Link href="/#operators">Operators</Link>
                <Link href="/#network">Network</Link>
                <Link href="/#agentic-network">Agentic</Link>
                <Link href="/#briefos">BriefOS</Link>
                <Link href="/#access">Access</Link>
              </div>
            )}

            <Link href="/access#desk-process" className="btn btn-gold shrink-0 !px-4 !py-2 text-xs">
              Request Access
            </Link>
          </nav>
        </div>
      </header>
      <div className="app-shell-content flex-1">{children}</div>
      {!usesInvestorChrome && <MobileBottomNav />}
      <footer className={`site-footer ${usesInvestorChrome ? 'investor-footer' : ''}`}>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 pt-2 sm:px-8 lg:px-10">
          <div className="site-footer-card">
            <div className="investor-footer-main">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[0.55rem] border border-white/10 bg-black/30 p-1.5">
                  <Image src="/images/kurogami-official-logo.jpg" alt="Kurogami" width={44} height={44} className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Kurogami</p>
                  <p className="text-sm text-white/65">Systematic capture of elite human process</p>
                </div>
              </Link>
              <p className="investor-footer-statement">
                Operators are the underlying asset. AI extends their process. The Forge is the market.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="investor-footer-links">
              {landingNavigation.map(({ label, id }) => (
                <Link key={id} href={isHome ? `#${id}` : `/#${id}`}>{label}</Link>
              ))}
              <Link href="/terms">Terms</Link>
            </nav>
            <div className="investor-footer-bottom">
              <p>KUROGAMI · PROCESS INFRASTRUCTURE</p>
              <Link href="/access#desk-process">Request Access <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
