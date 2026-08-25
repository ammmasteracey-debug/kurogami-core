import Image from 'next/image'
import Link from 'next/link'

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'

const deeperLayers = [
  { title: '$KRG / Monetary Layer', description: 'The conceptual economic layer of Kurogami World. Allocation tied to NFT holdings and future participation modules.', href: '/token' },
  { title: 'GTA6 Layer', description: 'A curated GTA6 layer for creator ownership. Private server access tied to founding art ownership.', href: '/gta6' },
  { title: 'Streaming Box', description: 'Kurogami Streaming Box (Coming Soon). Native Kurogami streaming surface. No external platform required.', href: '/surviving-miami' },
  { title: 'Liquidity Path', description: 'Claim path and RWA rails. Spatial / parcel layer for asset activity.', href: '/solana' },
  { title: 'Claim Path', description: 'Founding art → NFT at launch → access. The art is what people can see and desire.', href: '/reserve' },
]

export default function DeeperPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/kurogami-world-hero.jpg" alt="Kurogami World backdrop" fill priority className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.95))]" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className={panelClass}>
          <p className={labelClass}>Deeper System</p>
          <h1 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Deeper infrastructure layers</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">Enter only after you understand the world and your path.</p>
        </article>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deeperLayers.map((layer) => (
            <article key={layer.title} className="group rounded-[1.2rem] border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.86)] p-5 transition-colors hover:border-[#f1c96a]/40">
              <h2 className="font-[var(--disp)] text-lg font-semibold text-white sm:text-xl">{layer.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/75">{layer.description}</p>
              <Link href={layer.href} className="btn btn-secondary mt-5 text-sm">Enter Layer</Link>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <Link href="/paths" className="btn btn-primary w-full sm:w-auto">Back to Paths</Link>
          <Link href="/reserve" className="btn btn-secondary w-full sm:w-auto">Reserve Founding Art</Link>
        </div>
      </section>
    </main>
  )
}
