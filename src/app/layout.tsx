import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Kurogami Lore',
  description: 'Premium landing page for Kurogami with access to the hub.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-[var(--text-1)]">
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
