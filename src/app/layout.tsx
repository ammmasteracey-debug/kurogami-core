import Image from 'next/image'
import Link from 'next/link'
import KurogamiGuide from '../components/KurogamiGuide'
import './globals.css'

export const metadata = {
  title: 'Kurogami — Tokenization & Collateral Protocol',
  description: 'Kurogami is the portfolio structuring protocol for real-world assets: tokenization, collateralized liquidity, and compounding ownership in one system.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-shell min-h-screen flex flex-col bg-black text-[var(--text-1)]">
        <KurogamiGuide />
        <header className="site-nav-wrap sticky top-0">
          <div className="mx-auto max-w-6xl px-6 pt-6 sm:px-8 lg:px-10">
            <nav className="site-nav-card">
              <Link href="/" className="site-nav-brand">
                <div className="site-nav-logo-wrap">
                  <Image src="/images/kurogami-load.jpg" alt="Kurogami logo" width={40} height={40} className="h-full w-full rounded-full object-contain" />
                </div>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--gold)]">Kurogami</p>
                  <p className="text-xs text-white/60">Tokenization &amp; Collateral Protocol</p>
                </div>
              </Link>

              <div className="site-nav-links">
                <Link href="/">Overview</Link>
                <Link href="/tokenization-engine">Tokenization Engine</Link>
                <Link href="/collateral-engine">Collateral Engine</Link>
                <Link href="/markets">Markets</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/verticals">Verticals</Link>
                <Link href="/architecture">Docs</Link>
                <Link href="/portfolio">Enter</Link>
              </div>

              <Link href="/access" className="btn btn-gold shrink-0 !px-4 !py-2 text-xs">
                Request Access
              </Link>
            </nav>
          </div>
        </header>
        <div className="app-shell-content flex-1">{children}</div>
        <footer className="site-footer">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 pt-2 sm:px-8 lg:px-10">
            <div className="site-footer-card">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/30 p-1.5">
                    <Image src="/images/kurogami-load.jpg" alt="Kurogami logo" width={44} height={44} className="h-full w-full rounded-full object-contain" />
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Kurogami</p>
                    <p className="text-sm text-white/65">Tokenization + Collateral + Portfolio Structuring Protocol</p>
                  </div>
                </Link>
                <div className="max-w-2xl text-sm leading-7 text-white/70">
                  <p>
                    Kurogami is infrastructure for tokenizing, collateralizing, and structuring real-world assets. Trading, lending, and tokenized assets carry risk of loss, including total loss. Nothing here is an offer to sell securities, and no returns are guaranteed.
                  </p>
                </div>
              </div>
              <nav aria-label="Footer navigation" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-[0.68rem] uppercase tracking-[0.18em] text-white/65">
                <Link href="/" className="transition-colors hover:text-[var(--gold)]">Overview</Link>
                <Link href="/tokenization-engine" className="transition-colors hover:text-[var(--gold)]">Tokenization Engine</Link>
                <Link href="/collateral-engine" className="transition-colors hover:text-[var(--gold)]">Collateral Engine</Link>
                <Link href="/markets" className="transition-colors hover:text-[var(--gold)]">Markets</Link>
                <Link href="/portfolio" className="transition-colors hover:text-[var(--gold)]">Portfolio</Link>
                <Link href="/verticals" className="transition-colors hover:text-[var(--gold)]">Verticals</Link>
                <Link href="/architecture" className="transition-colors hover:text-[var(--gold)]">Architecture</Link>
                <Link href="/access" className="transition-colors hover:text-[var(--gold)]">Access</Link>
              </nav>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/45">Kurogami · Infrastructure Layer</p>
                <a href="https://gami-boyz.vercel.app/" target="_blank" rel="noreferrer" className="text-[0.68rem] uppercase tracking-[0.24em] text-white/40 transition-colors hover:text-[var(--gold)]">
                  Culture network: Gami Boyz ↗
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
