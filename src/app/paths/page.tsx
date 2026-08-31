import Image from 'next/image'
import Link from 'next/link'

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'

const paths = [
  {
    title: 'Culture / Artists',
    description: 'Explore the founding artists and live nights',
    href: '/artists',
    cta: 'Explore Artists',
  },
  {
    title: 'Founding Art / Keys',
    description: 'Reserve founding art and enter the access layer',
    href: '/reserve',
    cta: 'Reserve Founding Art',
  },
  {
    title: 'Curriculum / Desk',
    description: 'Learn the rules-based trading desk and meme-engine process',
    href: '/curriculum',
    cta: 'Enter Curriculum',
  },
  {
    title: 'Incubation / Builds',
    description: 'Business systems for artists and operators',
    href: '/incubation',
    cta: 'Apply for Incubation',
  },
  {
    title: 'Asset Protocols',
    description: 'Explore Kurogami ownership, access, and asset rails',
    href: '/token',
    cta: 'Explore Asset Protocols',
  },
  {
    title: 'Fine Shit Do Memes',
    description: 'Elite meme-finance social club lane. Token-gated access. Curriculum. Official coin.',
    href: 'https://fine-shit-do-memes-pied.vercel.app/',
    cta: 'Enter FSDM',
  },
]

export default function PathsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/kurogami-world-hero.jpg" alt="Kurogami World backdrop" fill priority className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.95))]" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className={panelClass}>
          <p className={labelClass}>Path Selection</p>
          <h1 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Choose your club entry lane</h1>
        </article>

        <div className="grid gap-5 md:grid-cols-2">
          {paths.map((path) => (
            <article key={path.title} className="group rounded-[1.2rem] border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.86)] p-6 transition-colors hover:border-[#f1c96a]/40">
              <h2 className="font-[var(--disp)] text-xl font-semibold text-white sm:text-2xl">{path.title}</h2>
              <p className="mt-3 text-base leading-7 text-white/78">{path.description}</p>
              {path.href.startsWith('http') ? (
                <a href={path.href} target="_blank" rel="noreferrer" className="btn btn-primary mt-6">{path.cta}</a>
              ) : (
                <Link href={path.href} className="btn btn-primary mt-6">{path.cta}</Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
