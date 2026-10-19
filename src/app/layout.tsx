import AppShellClient from '../components/AppShellClient'
import './globals.css'

export const metadata = {
  title: {
    default: 'Kurogami — Process Infrastructure',
    template: '%s — Kurogami',
  },
  description:
    'Kurogami is process infrastructure for operators. Desk OS and Field OS capture real work, train process, and extend operator capability through agents and the Forge.',
  openGraph: {
    title: 'Kurogami — Process Infrastructure',
    description:
      'Operators are the underlying asset. AI is the extension. Kurogami captures and extends elite human process.',
    siteName: 'Kurogami',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kurogami — Process Infrastructure',
    description:
      'Operators are the underlying asset. AI is the extension. Kurogami captures and extends elite human process.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-shell min-h-screen flex flex-col bg-black text-[var(--text-1)]">
        <AppShellClient>{children}</AppShellClient>
      </body>
    </html>
  )
}
