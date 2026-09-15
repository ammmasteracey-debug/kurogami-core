'use client'

import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { WalletReadyState, type WalletName } from '@solana/wallet-adapter-base'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

function truncateAddress(address: string) {
  return `${address.slice(0, 4)}…${address.slice(-4)}`
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))
  }, [])
  return isMobile
}

export default function WalletConnectButton() {
  const { connection } = useConnection()
  const { wallets, wallet, select, connect, connecting, connected, disconnect, publicKey } = useWallet()
  const [open, setOpen] = useState(false)
  const [balance, setBalance] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const phantomWallet = useMemo(
    () => wallets.find((w) => w.adapter.name === 'Phantom'),
    [wallets]
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!connected || !publicKey) {
      setBalance(null)
      return
    }
    let cancelled = false
    connection
      .getBalance(publicKey)
      .then((lamports) => {
        if (!cancelled) setBalance(lamports / 1_000_000_000)
      })
      .catch(() => {
        if (!cancelled) setBalance(null)
      })
    return () => {
      cancelled = true
    }
  }, [connected, publicKey, connection])

  const handleSelect = useCallback(
    async (name: WalletName) => {
      try {
        select(name)
        setOpen(false)
      } catch {
        // no-op — wallet selection can be retried from the menu
      }
    },
    [select]
  )

  // On mobile, jump straight into Phantom (deep-links into the app / App Store) instead of a menu.
  const handleMainButtonClick = useCallback(() => {
    if (connected) {
      setOpen((v) => !v)
      return
    }
    if (isMobile && phantomWallet && phantomWallet.readyState !== WalletReadyState.Installed) {
      select(phantomWallet.adapter.name)
      return
    }
    setOpen((v) => !v)
  }, [connected, isMobile, phantomWallet, select])

  useEffect(() => {
    if (wallet && !connected && !connecting) {
      connect().catch(() => {
        // user rejected or wallet unavailable — menu stays open for retry
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet])

  const handleCopy = useCallback(() => {
    if (!publicKey) return
    navigator.clipboard.writeText(publicKey.toBase58())
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [publicKey])

  const handleDisconnect = useCallback(async () => {
    await disconnect()
    setOpen(false)
  }, [disconnect])

  const sortedWallets = useMemo(
    () => [...wallets].sort((a, b) => (a.adapter.name === 'Phantom' ? -1 : b.adapter.name === 'Phantom' ? 1 : 0)),
    [wallets]
  )

  return (
    <div className="wallet-connect" ref={menuRef}>
      <button
        type="button"
        onClick={handleMainButtonClick}
        className={`wallet-connect-btn ${connected ? 'is-connected' : ''}`}
      >
        <span className="wallet-connect-dot" />
        {connected && publicKey ? (
          <span className="wallet-connect-addr">{truncateAddress(publicKey.toBase58())}</span>
        ) : connecting ? (
          <span>Connecting…</span>
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      {open && (
        <>
          <div className="wallet-connect-backdrop" onClick={() => setOpen(false)} />
          <div className="wallet-connect-menu">
            {connected && publicKey ? (
              <>
                <div className="wallet-connect-menu-header">
                  <p className="wallet-connect-menu-label">{wallet?.adapter.name ?? 'Wallet'}</p>
                  <p className="wallet-connect-menu-balance">
                    {balance !== null ? `${balance.toFixed(3)} SOL` : '—'}
                  </p>
                </div>
                <button type="button" className="wallet-connect-menu-item" onClick={handleCopy}>
                  {copied ? 'Copied ✓' : `Copy address · ${truncateAddress(publicKey.toBase58())}`}
                </button>
                <button type="button" className="wallet-connect-menu-item wallet-connect-menu-danger" onClick={handleDisconnect}>
                  Disconnect
                </button>
              </>
            ) : sortedWallets.length > 0 ? (
              sortedWallets.map(({ adapter, readyState }) => (
                <button
                  key={adapter.name}
                  type="button"
                  className="wallet-connect-menu-item"
                  onClick={() => handleSelect(adapter.name)}
                >
                  {adapter.name}
                  {adapter.name === 'Phantom' && readyState !== WalletReadyState.Installed ? ' · Open App' : ''}
                </button>
              ))
            ) : (
              <div className="wallet-connect-menu-empty">
                No Solana wallet detected. Install{' '}
                <a href="https://phantom.app/" target="_blank" rel="noreferrer">
                  Phantom
                </a>{' '}
                to connect.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
