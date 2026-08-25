import Image from 'next/image'
import Link from 'next/link'

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'

const placeholders = [
  { title: 'Wallet Connect', description: 'Coming soon' },
  { title: 'Access Status', description: 'Pending verification' },
  { title: 'Resources', description: 'Locked until access activates' },
  { title: 'Events', description: 'Member-only nights' },
]

export default function PortalPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/kurogami-world-hero.jpg" alt="Kurogami World backdrop" fill priority className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.95))]" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-4xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className={panelClass}>
          <p className={labelClass}>Member Portal</p>
          <h1 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Portal coming online</h1>
        </article>

        <article className={panelClass}>
          <p className={labelClass}>Status</p>
          <div className="my-5 h-px w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          <p className="text-lg leading-8 text-white/84 sm:text-xl">Member portal coming online as keys and access rails activate.</p>
        </article>

        <div className="grid gap-5 sm:grid-cols-2">
          {placeholders.map((item) => (
            <article key={item.title} className="rounded-[1.2rem] border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.86)] p-5">
              <h2 className="font-[var(--disp)] text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-white/60">{item.description}</p>
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
