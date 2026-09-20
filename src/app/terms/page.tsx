import Link from 'next/link'
import { EngineHeader } from '../../components/engine/EngineUI'
import { DESK_TIERS } from '../../data/deskTiers'

export const metadata = {
  title: 'Desk Access Terms — Kurogami',
  description:
    'Desk Access Terms for the Gami Boyz / Kurogami Operator Network: education and access only, tiers, payment, refunds, risk, conduct, and liability.',
}

const NOT_LIST = [
  'investment advice',
  'portfolio management',
  'a fund or pooled investment',
  'a brokerage relationship',
  'a promise of profit or income',
  'a securities offering',
]

const panelClass = 'engine-panel-quiet mt-6 p-6 sm:p-8'
const kickerClass = 'engine-kicker'
const headingClass = 'mt-3 font-[var(--disp)] text-xl font-semibold text-white sm:text-2xl'
const bodyClass = 'mt-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8'

export default function TermsPage() {
  return (
    <main className="engine-shell relative overflow-hidden text-[var(--text-1)]">
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
        <EngineHeader
          kicker="Gami Boyz / Kurogami Operator Network"
          title="Desk Access Terms"
          subtitle="Last updated: September 16, 2026."
        />

        <section className={panelClass} aria-labelledby="terms-agreement">
          <p className={kickerClass}>01 / Agreement</p>
          <h2 id="terms-agreement" className={headingClass}>Agreement</h2>
          <p className={bodyClass}>
            By paying for or accessing Desk Access, Operator Seat, or Capital Partner Seat, you agree to these Terms.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-what-you-buy">
          <p className={kickerClass}>02 / Scope</p>
          <h2 id="terms-what-you-buy" className={headingClass}>What you are buying</h2>
          <p className={bodyClass}>
            You are purchasing education, process training, and operator network access related to market execution frameworks.
          </p>
          <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/55">This is not:</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {NOT_LIST.map((item) => (
              <li key={item} className="border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/75">
                {item}
              </li>
            ))}
          </ul>
          <p className={bodyClass}>Any trading you do is solely in your own accounts, at your own risk.</p>
        </section>

        <section className={panelClass} aria-labelledby="terms-tiers">
          <p className={kickerClass}>03 / Tiers</p>
          <h2 id="terms-tiers" className={headingClass}>Tiers</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {DESK_TIERS.map((tier) => (
              <article key={tier.id} className="flex flex-col border border-[var(--gold)]/20 bg-black/25 p-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[var(--gold)]">{tier.price}</p>
                <h3 className="mt-2 font-[var(--disp)] text-lg font-semibold text-white">{tier.name}</h3>
                <ul className="mt-3 space-y-2 text-xs leading-6 text-white/65">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--gold)]">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className={bodyClass}>
            No tier includes automatic management of your funds. Any separate capital arrangement requires a separate written agreement.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-payment">
          <p className={kickerClass}>04 / Payment &amp; Access</p>
          <h2 id="terms-payment" className={headingClass}>Payment &amp; access</h2>
          <p className={bodyClass}>
            Full payment is required before access. Access begins only after payment is confirmed.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-refunds">
          <p className={kickerClass}>05 / Refunds</p>
          <h2 id="terms-refunds" className={headingClass}>Refunds</h2>
          <p className={bodyClass}>
            All sales are final once access or materials are delivered, except where required by law. Chargebacks after access is granted are a breach of these Terms.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-risk">
          <p className={kickerClass}>06 / Risk Disclosure</p>
          <h2 id="terms-risk" className={headingClass}>Risk disclosure</h2>
          <p className={bodyClass}>
            Markets involve substantial risk of loss. You may lose some or all capital. Past results do not guarantee future results. You confirm you can afford the fee and any capital you choose to trade, and that you will not trade money you cannot afford to lose.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-no-guarantee">
          <p className={kickerClass}>07 / No Performance Guarantee</p>
          <h2 id="terms-no-guarantee" className={headingClass}>No performance guarantee</h2>
          <p className={bodyClass}>
            We make no guarantee of profits, income, win rate, returns, or account growth. Examples and screenshots are illustrative only.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-responsibilities">
          <p className={kickerClass}>08 / Your Responsibilities</p>
          <h2 id="terms-responsibilities" className={headingClass}>Your responsibilities</h2>
          <p className={bodyClass}>
            You agree to follow published desk rules, protect your credentials, not share paid materials, act in good faith in community spaces, and make your own independent decisions.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-ip">
          <p className={kickerClass}>09 / Intellectual Property</p>
          <h2 id="terms-ip" className={headingClass}>Intellectual property</h2>
          <p className={bodyClass}>
            All materials, frameworks, branding, and content remain our property. You receive a limited personal-use license only. No resale or republication without written permission.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-conduct">
          <p className={kickerClass}>10 / Conduct</p>
          <h2 id="terms-conduct" className={headingClass}>Conduct</h2>
          <p className={bodyClass}>
            We may remove access for abuse, scams, leaking materials, misrepresentation, or harmful solicitation. No refund if removed for cause.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-third-parties">
          <p className={kickerClass}>11 / Third Parties</p>
          <h2 id="terms-third-parties" className={headingClass}>Third parties</h2>
          <p className={bodyClass}>
            Brokers, exchanges, TradingView, Telegram, Instagram, and other tools are third parties. We are not responsible for their outages, losses, or policies.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-liability">
          <p className={kickerClass}>12 / Limitation of Liability</p>
          <h2 id="terms-liability" className={headingClass}>Limitation of liability</h2>
          <p className={bodyClass}>
            To the maximum extent permitted by law, our total liability under these Terms is limited to the fee you paid for the current access term. We are not liable for trading losses or indirect damages.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-term">
          <p className={kickerClass}>13 / Term</p>
          <h2 id="terms-term" className={headingClass}>Term</h2>
          <p className={bodyClass}>
            Desk Access defaults to 30 days from payment unless otherwise stated at checkout. Higher tiers follow the access window stated at purchase. Continued access requires renewal or written extension.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-separate-deals">
          <p className={kickerClass}>14 / Separate Capital Deals</p>
          <h2 id="terms-separate-deals" className={headingClass}>Separate capital deals</h2>
          <p className={bodyClass}>
            Any profit-share, managed execution, or capital allocation arrangement is outside these Terms and requires a separate signed agreement.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-changes">
          <p className={kickerClass}>15 / Changes</p>
          <h2 id="terms-changes" className={headingClass}>Changes</h2>
          <p className={bodyClass}>
            We may update these Terms. Continued use after updates constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className={panelClass} aria-labelledby="terms-contact">
          <p className={kickerClass}>16 / Contact</p>
          <h2 id="terms-contact" className={headingClass}>Contact</h2>
          <p className={bodyClass}>
            Questions: DM DESK on Instagram or contact via the site access channel.
          </p>
        </section>

        <article className="engine-panel mt-10 p-6 sm:p-8">
          <p className="text-sm leading-7 text-[var(--gold-2)] sm:text-base sm:leading-8">
            By checking the box and completing payment, you acknowledge that you have read, understood, and agree to these Terms.
          </p>
          <div className="mt-6">
            <Link href="/access" className="btn btn-gold">Request Access</Link>
          </div>
        </article>
      </section>
    </main>
  )
}
