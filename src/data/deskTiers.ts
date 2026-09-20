export type DeskTier = {
  id: string
  name: string
  price: string
  summary: string
  includes: string[]
}

/**
 * Desk Access tiers for the Gami Boyz / Kurogami Operator Network.
 * Education and access only — no tier includes management of funds.
 */
export const DESK_TIERS: DeskTier[] = [
  {
    id: 'desk-access',
    name: 'Desk Access',
    price: '$1,500',
    summary: 'Process education, risk/watchlist methodology, 30 days guided access.',
    includes: ['Process education', 'Risk/watchlist methodology', '30 days guided access'],
  },
  {
    id: 'operator-seat',
    name: 'Operator Seat',
    price: '$5,000',
    summary: 'Desk Access plus onboarding, setup reviews, capital allocation framework education, operator network access, priority sessions as available.',
    includes: [
      'Everything in Desk Access',
      'Onboarding and setup reviews',
      'Capital allocation framework education',
      'Operator network access',
      'Priority sessions as available',
    ],
  },
  {
    id: 'capital-partner',
    name: 'Capital Partner Seat',
    price: '$15,000–$25,000',
    summary: 'Operator Seat plus higher-touch access, priority onboarding, portfolio structuring education intro, priority infrastructure/intake consideration.',
    includes: [
      'Everything in Operator Seat',
      'Higher-touch access',
      'Priority onboarding',
      'Portfolio structuring education intro',
      'Priority infrastructure/intake consideration',
    ],
  },
]
