import AppShellClient from '../components/AppShellClient'
import SolanaWalletProvider from '../components/SolanaWalletProvider'
import './globals.css'

export const metadata = {
  title: 'Kurogami — Process-Trained Intelligence',
  description: 'Kurogami turns how skilled humans work into process-trained agents that can be trained, measured, owned, rented, and improved.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-shell min-h-screen flex flex-col bg-black text-[var(--text-1)]">
        <SolanaWalletProvider>
          <AppShellClient>{children}</AppShellClient>
        </SolanaWalletProvider>
      </body>
    </html>
  )
}
