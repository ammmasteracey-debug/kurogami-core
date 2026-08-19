'use client'

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { ReactNode, useMemo } from 'react'

const solanaRpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_URL ?? 'https://api.mainnet-beta.solana.com'

export default function SolanaWalletProvider({ children }: { children: ReactNode }) {
  // Wallet Standard auto-detects installed wallets (Phantom, Solflare, Backpack, etc.), no adapter list needed.
  const wallets = useMemo(() => [], [])

  return (
    <ConnectionProvider endpoint={solanaRpcUrl}>
      <WalletProvider wallets={wallets} autoConnect={false}>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  )
}
