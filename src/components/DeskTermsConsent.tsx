'use client'

import Link from 'next/link'

/**
 * Required consent gate for any Desk Access / Operator Seat / Capital Partner
 * join, pay, or unlock flow. The action button must stay disabled until
 * `checked` is true.
 */
export default function DeskTermsConsent({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-[var(--gold)]/25">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1.5 h-4 w-4 shrink-0 accent-[#f0c24a]"
      />
      <span className="text-sm leading-7 text-white/75">
        I agree to the{' '}
        <Link
          href="/terms"
          onClick={(event) => event.stopPropagation()}
          className="text-[var(--gold)] underline decoration-[var(--gold)]/40 underline-offset-4 transition-colors hover:text-[var(--gold-2)]"
        >
          Desk Access Terms
        </Link>{' '}
        and understand this is education/access only — not investment advice, not managed trading, and no profits are guaranteed.
      </span>
    </label>
  )
}
