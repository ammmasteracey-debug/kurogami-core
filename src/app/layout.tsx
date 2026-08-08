import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Kurogami Lore',
  description: 'Premium landing page for Kurogami with access to the hub.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg-0)] text-[var(--text-1)] min-h-screen flex flex-col">
        <div className="flex-1">{children}</div>
        <footer className="site-return-wrap">
          <div className="mx-auto max-w-6xl px-6 pb-10 pt-2 sm:px-8 lg:px-10">
            <div className="site-return-card">
              <Link href="/" className="site-return-btn">
                Return to Main
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
