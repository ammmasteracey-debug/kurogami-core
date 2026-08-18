import Image from 'next/image'
import Link from 'next/link'
import KurogamiGuide from '../components/KurogamiGuide'
import './globals.css'

export const metadata = {
  title: 'Kurogami Lore',
  description: 'Premium landing page for Kurogami with a cinematic experience.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-[var(--text-1)]">
        <KurogamiGuide />
        <header className="site-nav-wrap">
          <div className="mx-auto max-w-6xl px-6 pt-6 sm:px-8 lg:px-10">
            <nav className="site-nav-card">
              <Link href="/" className="site-nav-brand">
                <div className="site-nav-logo-wrap">
                  <Image src="/images/kurogami-load.jpg" alt="Kurogami logo" width={40} height={40} className="h-full w-full rounded-full object-contain" />
                </div>
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--gold)]">Kurogami World</p>
                  <p className="text-xs text-white/60">Main Navigation</p>
                </div>
              </Link>

              <div className="site-nav-links">
                <Link href="/">Home</Link>
                <Link href="/reserve">Reserve</Link>
                <Link href="/surviving-miami">Kurogami World</Link>
                <Link href="/nights">Nights</Link>
                <Link href="/curriculum">Curriculum</Link>
                <Link href="/lore">Lore</Link>
                <Link href="/token">$KRG</Link>
                <Link href="/solana">Solana</Link>
                <Link href="/gta6">GTA6</Link>
              </div>
            </nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="site-footer">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 pt-2 sm:px-8 lg:px-10">
            <div className="site-footer-card">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/30 p-1.5">
                    <Image src="/images/kurogami-load.jpg" alt="Kurogami logo" width={44} height={44} className="h-full w-full rounded-full object-contain" />
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Kurogami World</p>
                    <p className="text-sm text-white/65">Founding access layer</p>
                  </div>
                </Link>
                <div className="max-w-2xl text-sm leading-7 text-white/70">
                  <p>
                    Kurogami World is a cultural and economic access layer for artists, founders, and holders. This experience is conceptual, editorial, and informational in nature and should not be considered financial or investment advice.
                  </p>
                </div>
              </div>
              <nav aria-label="Footer navigation" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-[0.68rem] uppercase tracking-[0.18em] text-white/65">
                <Link href="/" className="transition-colors hover:text-[var(--gold)]">Home</Link>
                <Link href="/reserve" className="transition-colors hover:text-[var(--gold)]">Reserve</Link>
                <Link href="/surviving-miami" className="transition-colors hover:text-[var(--gold)]">Kurogami World</Link>
                <Link href="/nights" className="transition-colors hover:text-[var(--gold)]">Nights</Link>
                <Link href="/curriculum" className="transition-colors hover:text-[var(--gold)]">Curriculum</Link>
                <Link href="/lore" className="transition-colors hover:text-[var(--gold)]">Lore</Link>
                <Link href="/token" className="transition-colors hover:text-[var(--gold)]">$KRG</Link>
                <Link href="/solana" className="transition-colors hover:text-[var(--gold)]">Solana</Link>
                <Link href="/gta6" className="transition-colors hover:text-[var(--gold)]">GTA6</Link>
              </nav>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/45">Kurogami World · Cultural Access Layer</p>
                <Link href="/" className="site-return-btn">
                  Return to Main
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
