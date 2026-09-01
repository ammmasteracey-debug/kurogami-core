import Link from 'next/link'

type Lane = {
  name: string
  description: string
  status: 'Live' | 'Build' | 'Next'
  href: string
  cta: string
  external?: boolean
}

const groups: { title: string; label: string; lanes: Lane[] }[] = [
  {
    title: 'Social Club Lanes',
    label: '01 / Club Rooms',
    lanes: [
      { name: 'Fine Shit Do Memes', description: 'Women-native meme desk and club lane. Official coin + curriculum.', status: 'Live', href: 'https://fine-shit-do-memes.vercel.app/', cta: 'Enter FSDM', external: true },
      { name: 'Gami Boyz', description: 'Brotherhood lane. Raw culture. Access. Motion.', status: 'Live', href: 'https://gami-boyz.vercel.app/', cta: 'Enter Gami Boyz', external: true },
    ],
  },
  {
    title: 'Asset Protocols',
    label: '02 / Ownership Rails',
    lanes: [
      { name: 'Fashion Protocol', description: 'Drops, provenance, tokenization.', status: 'Live', href: 'https://kurogami-fashion.vercel.app/', cta: 'Enter Fashion', external: true },
      { name: 'Real Estate Protocol', description: 'Property packaging, claim surfaces, spatial open-house direction.', status: 'Live', href: 'https://kurogami-real-estate.vercel.app/', cta: 'Enter Real Estate', external: true },
      { name: 'Watches Protocol', description: 'Timepiece packaging and provenance records.', status: 'Live', href: 'https://kurogami-watches.vercel.app/', cta: 'Enter Watches', external: true },
      { name: 'Cars Protocol', description: 'Automotive packaging and provenance records.', status: 'Live', href: 'https://kurogami-cars.vercel.app/', cta: 'Enter Cars', external: true },
      { name: 'Yachts Protocol', description: 'Marine asset packaging and provenance records.', status: 'Live', href: 'https://kurogami-yachts.vercel.app/', cta: 'Enter Yachts', external: true },
      { name: 'Art Protocol', description: 'Cultural works, provenance, and ownership records.', status: 'Live', href: 'https://kurogami-art.vercel.app/', cta: 'Enter Art', external: true },
    ],
  },
  {
    title: 'Core Kurogami',
    label: '03 / The Map',
    lanes: [
      { name: 'Founding Art / Keys', description: 'Founding art and access-layer entry.', status: 'Live', href: '/reserve', cta: 'Explore Keys' },
      { name: 'Curriculum / Desk', description: 'Trading discipline and operating process.', status: 'Live', href: '/curriculum', cta: 'Enter Curriculum' },
      { name: 'Incubation', description: 'Business systems for artists and operators.', status: 'Live', href: '/incubation', cta: 'Enter Incubation' },
      { name: 'Hub', description: 'The Kurogami command center.', status: 'Live', href: '/hub', cta: 'Enter Hub' },
    ],
  },
]

export default function LanesPage() {
  return (
    <main className="club-deck relative min-h-screen overflow-hidden text-[var(--text)]">
      <div className="club-deck-grid pointer-events-none absolute inset-0" />
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <header className="club-command-frame border border-[#f1c96a]/25 bg-[rgba(4,6,8,0.9)] p-7 sm:p-10">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Kurogami World / Index</p>
          <h1 className="mt-4 font-[var(--disp)] text-4xl font-semibold text-white sm:text-5xl">Enter the system</h1>
          <p className="mt-5 text-lg text-white/75">Choose your lane.</p>
        </header>

        <div className="mt-10 space-y-12">
          {groups.map((group) => (
            <section key={group.title}>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">{group.label}</p>
              <h2 className="mt-3 font-[var(--disp)] text-3xl font-semibold text-white">{group.title}</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {group.lanes.map((lane) => <LaneCard key={lane.name} lane={lane} />)}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}

function LaneCard({ lane }: { lane: Lane }) {
  const statusClass = lane.status === 'Live' ? 'border-[#2fe6b0]/35 bg-[#2fe6b0]/10 text-[#79f4cf]' : 'border-[#f1c96a]/35 bg-[#f1c96a]/10 text-[#f6d98c]'
  const content = <>{lane.cta}</>

  return (
    <article className="club-instrument-panel flex min-h-60 flex-col border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-6">
      <span className={`w-fit border px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] ${statusClass}`}>{lane.status}</span>
      <h3 className="mt-6 font-[var(--disp)] text-2xl font-semibold text-white">{lane.name}</h3>
      <p className="mt-3 text-base leading-7 text-white/72">{lane.description}</p>
      {lane.external ? (
        <a href={lane.href} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto self-start pt-6">{content}</a>
      ) : (
        <Link href={lane.href} className="btn btn-primary mt-auto self-start pt-6">{content}</Link>
      )}
    </article>
  )
}