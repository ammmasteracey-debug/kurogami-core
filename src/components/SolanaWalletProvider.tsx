'use client'

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import { ReactNode, useMemo } from 'react'

const solanaRpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_URL ?? 'https://api.mainnet-beta.solana.com'

export default function SolanaWalletProvider({ children }: { children: ReactNode }) {
  // Phantom is explicit so mobile browsers can deep-link into the Phantom app;
  // Wallet Standard still auto-detects any other installed wallet (Solflare, Backpack, etc.).
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

  return (
    <ConnectionProvider endpoint={solanaRpcUrl}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  )
}
