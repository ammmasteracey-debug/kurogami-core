export type DeskTier = {
  id: string
  name: string
  price: string
  summary: string
  includes: string[]
  paymentLink?: string
}

/**
 * Desk Access tiers for the Gami Boyz / Kurogami Operator Network.
 * Education and access only — no tier includes management of funds.
 */
export const DESK_TIERS: DeskTier[] = [
  {
    id: 'desk-access',
    name: 'Operator Access',
    price: '$1,500',
    summary: 'Digital access to Kurogami process infrastructure.',
    includes: ['Digital access to Kurogami process infrastructure.'],
    paymentLink: 'https://buy.stripe.com/00wdRb2KB09tchc8NqgUM02',
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
    paymentLink: 'https://buy.stripe.com/5kQbJ35WNbSb3KGfbOgUM03',
  },
  {
    id: 'capital-partner-15k',
    name: 'Capital Partner Seat',
    price: '$15,000',
    summary: 'Higher-touch access, priority onboarding, portfolio structuring intro, and priority intake consideration.',
    includes: [
      'Higher-touch access',
      'Priority onboarding',
      'Portfolio structuring intro',
      'Priority intake consideration',
    ],
    paymentLink: 'https://buy.stripe.com/7sYcN73OFcWfepk1kYgUM04',
  },
  {
    id: 'capital-partner-25k',
    name: 'Capital Partner Seat',
    price: '$25,000',
    summary: 'Dedicated onboarding path, expanded portfolio structuring support, priority allocation consideration, and direct coordination access.',
    includes: [
      'Dedicated onboarding path',
      'Expanded portfolio structuring support',
      'Priority allocation consideration',
      'Direct coordination access',
    ],
    paymentLink: 'https://buy.stripe.com/8x28wRad3f4n80W3t6gUM05',
  },
]
