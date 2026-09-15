import AppShellClient from '../components/AppShellClient'
import SolanaWalletProvider from '../components/SolanaWalletProvider'
import './globals.css'

export const metadata = {
  title: 'Kurogami — Tokenization & Collateral Protocol',
  description: 'Kurogami is the portfolio structuring protocol for real-world assets: tokenization, collateralized liquidity, and compounding ownership in one system.'
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
