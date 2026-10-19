import AppShellClient from '../components/AppShellClient'
import './globals.css'

export const metadata = {
  title: 'Kurogami — Systematic Process Capture',
  description: 'Kurogami captures elite human process through Desk OS and Field OS, trains it, extends it through AI, and brings process-trained agents to the Forge.'
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
