'use client'

import { useEffect, useState } from 'react'

const IG_LINK = 'https://www.instagram.com/cryptoac3y?stkn=OXIzOXd2YmFybjgz&utm_source=qr'

export default function AccessModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('kurogami-open-access', handler)
    return () => window.removeEventListener('kurogami-open-access', handler)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label="Access request popup">
      <div className="w-full max-w-lg rounded-[1.6rem] border border-[var(--gold)]/25 bg-[#070a0d]/95 p-6 shadow-[0_32px_120px_rgba(0,0,0,0.7)] sm:p-8">
        <p className="engine-kicker">Request access</p>
        <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">DM Ac3y on Instagram</h2>
        <p className="mt-4 text-base leading-8 text-white/75">
          Kurogami access is handled directly through Ac3y. Send a quick message with your role, vertical, and use case and the team will follow up there.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => setOpen(false)} className="btn btn-gold-outline">Close</button>
          <a href={IG_LINK} target="_blank" rel="noreferrer" className="btn btn-gold" onClick={() => setOpen(false)}>
            Open Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
