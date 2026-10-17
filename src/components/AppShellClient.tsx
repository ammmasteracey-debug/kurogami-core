'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AccessModal from './AccessModal'
import KurogamiGuide from './KurogamiGuide'
import MobileBottomNav from './MobileBottomNav'
import WalletConnectButton from './WalletConnectButton'

const landingNavigation = [
  { label: 'System', id: 'system' },
  { label: 'Operators', id: 'operators' },
  { label: 'Capital', id: 'capital' },
  { label: 'Intelligence', id: 'intelligence' },
  { label: 'Access', id: 'access' },
]

export default function AppShellClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const openAccess = () => {
    window.dispatchEvent(new CustomEvent('kurogami-open-access'))
  }

  return (
    <>
      {!isHome && <KurogamiGuide />}
      <AccessModal />
      <header className={`site-nav-wrap sticky top-0 ${isHome ? 'investor-nav-wrap' : ''}`}>
        <div className="mx-auto max-w-6xl px-6 pt-4 sm:px-8 lg:px-10">
          <nav className={`site-nav-card ${isHome ? 'investor-nav-card' : ''}`} aria-label="Main navigation">
            <Link href="/" className="site-nav-brand">
              <div className="site-nav-logo-wrap">
                <Image src="/images/kurogami-official-logo.jpg" alt="Kurogami" width={40} height={40} className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--gold)]">Kurogami</p>
                <p className="investor-brand-subtitle">Process-trained intelligence</p>
              </div>
            </Link>

            {isHome ? (
              <div className="site-nav-links investor-nav-links">
                {landingNavigation.map(({ label, id }) => <a key={id} href={`#${id}`}>{label}</a>)}
              </div>
            ) : (
              <div className="site-nav-links">
                <Link href="/#system">System</Link>
                <Link href="/#operators">Operators</Link>
                <Link href="/#capital">Capital</Link>
                <Link href="/#intelligence">Intelligence</Link>
                <Link href="/#access">Access</Link>
              </div>
            )}

            <button
              type="button"
              onClick={openAccess}
              className="btn btn-gold shrink-0 !px-4 !py-2 text-xs"
            >
              Request Access
            </button>
            {!isHome && <WalletConnectButton />}
          </nav>
        </div>
      </header>
      <div className="app-shell-content flex-1">{children}</div>
      {!isHome && <MobileBottomNav />}
      <footer className={`site-footer ${isHome ? 'investor-footer' : ''}`}>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 pt-2 sm:px-8 lg:px-10">
          <div className="site-footer-card">
            <div className="investor-footer-main">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[0.55rem] border border-white/10 bg-black/30 p-1.5">
                  <Image src="/images/kurogami-official-logo.jpg" alt="Kurogami" width={44} height={44} className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Kurogami</p>
                  <p className="text-sm text-white/65">Infrastructure for process-trained agents</p>
                </div>
              </Link>
              <p className="investor-footer-statement">
                We turn how skilled humans work into intelligence that can be trained, measured, owned, rented, and improved.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="investor-footer-links">
              {landingNavigation.map(({ label, id }) => (
                <Link key={id} href={isHome ? `#${id}` : `/#${id}`}>{label}</Link>
              ))}
              <Link href="/terms">Terms</Link>
            </nav>
            <div className="investor-footer-bottom">
              <p>KUROGAMI · THE PROCESS PREMIUM</p>
              <button type="button" onClick={openAccess}>Request Access <span aria-hidden="true">↗</span></button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
