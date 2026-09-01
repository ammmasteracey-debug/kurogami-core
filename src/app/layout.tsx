import Image from 'next/image'
import Link from 'next/link'
import KurogamiGuide from '../components/KurogamiGuide'
import './globals.css'

export const metadata = {
  title: 'Kurogami World',
  description: 'Elite culture-finance social club for exclusive access, utility, and ownership rails.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-shell min-h-screen flex flex-col bg-black text-[var(--text-1)]">
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
                  <p className="text-xs text-white/60">Social Club</p>
                </div>
              </Link>

              <div className="site-nav-links">
                <Link href="/world">World</Link>
                <Link href="/lanes">Lanes</Link>
                <Link href="/club">Club</Link>
                <Link href="/protocols">Protocols</Link>
              </div>
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
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Kurogami World</p>
                    <p className="text-sm text-white/65">Elite culture-finance social club</p>
                  </div>
                </Link>
                <div className="max-w-2xl text-sm leading-7 text-white/70">
                  <p>
                    Kurogami World is an elite culture-finance social club and operating system for operators, creators, and investors. Trading and tokens involve risk of loss. No guaranteed returns. Educational and access products only where stated.
                  </p>
                </div>
              </div>
              <nav aria-label="Footer navigation" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 text-[0.68rem] uppercase tracking-[0.18em] text-white/65">
                <Link href="/world" className="transition-colors hover:text-[var(--gold)]">World</Link>
                <Link href="/lanes" className="transition-colors hover:text-[var(--gold)]">Lanes</Link>
                <Link href="/club" className="transition-colors hover:text-[var(--gold)]">Club</Link>
                <Link href="/protocols" className="transition-colors hover:text-[var(--gold)]">Protocols</Link>
                <Link href="/paths" className="transition-colors hover:text-[var(--gold)]">Paths</Link>
                <Link href="/artists" className="transition-colors hover:text-[var(--gold)]">Artists</Link>
                <Link href="/nights" className="transition-colors hover:text-[var(--gold)]">Nights</Link>
                <Link href="/reserve" className="transition-colors hover:text-[var(--gold)]">Reserve</Link>
                <Link href="/curriculum" className="transition-colors hover:text-[var(--gold)]">Curriculum</Link>
                <Link href="/incubation" className="transition-colors hover:text-[var(--gold)]">Incubation</Link>
                <Link href="/desk" className="transition-colors hover:text-[var(--gold)]">Desk</Link>
                <Link href="/deeper" className="transition-colors hover:text-[var(--gold)]">Deeper</Link>
                <Link href="/portal" className="transition-colors hover:text-[var(--gold)]">Portal</Link>
                <a href="https://fine-shit-do-memes.vercel.app/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--gold)]">FSDM</a>
              </nav>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/45">Kurogami World · Exclusive Access + Operating Rails</p>
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
