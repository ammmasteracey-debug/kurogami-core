import Link from 'next/link'

type RoadmapPhase = {
  number: string
  title: string
  timing: string
  status?: string
  label: string
  items: string[]
  goal: string
}

const phases: RoadmapPhase[] = [
  {
    number: '00',
    title: 'Now / Foundation',
    timing: 'Current operating layer',
    status: 'Active',
    label: 'Operating machine, not pitch deck only.',
    items: [
      'Dual desk live: day trading and meme positioning',
      'Core team locked: operators only',
      'Main site and vertical prototypes live',
      'NFT and access narrative clear',
      'Social proof engine starting through X and content',
      'First sectors forming: trading, media and drone, fashion, real estate, watches',
    ],
    goal: 'Operating machine, not pitch deck only.',
  },
  {
    number: '01',
    title: 'Access Launch',
    timing: 'Next 30 to 60 days',
    label: 'Public key opens',
    items: [
      'Finalize membership and NFT access tiers',
      'Clean onboarding flow with wallet and simple purchase path',
      'Curriculum live for day desk and meme desk',
      'Drone and extreme media vertical packaged as service and tokenized media path',
      'Weekly content cadence with desk reads and operator posts',
      'First paid members and early keys',
    ],
    goal: 'Cash flow and real members inside the network.',
  },
  {
    number: '02',
    title: 'Network Expansion',
    timing: '60 to 120 days',
    label: 'Operators and brands enter',
    items: [
      'Incubation lane active for builders and brands',
      'More asset verticals formalized: real estate, fashion, watches, motion and media',
      'Tokenization engine usable for simple packages',
      'Events and Kurogami Nights as distribution',
      'Selective aligned capital path for book and liquidity participation',
      'Stronger social distribution through members',
    ],
    goal: 'Network effects. Members bring members. Brands use the rails.',
  },
  {
    number: '03',
    title: 'Protocol Depth',
    timing: '3 to 6 months',
    label: 'Infrastructure compounds',
    items: [
      'Agentic NFT utilities online with strategy linked tools',
      'Collateral and structured product paths for tokenized assets',
      'Forge style scoring for operators and assets',
      'Clear KRG utility tied to access, fees, and network activity',
      'Cross vertical marketplace behavior across media, real estate, and collectibles',
    ],
    goal: 'Kurogami stops being a project and becomes a system people operate inside.',
  },
  {
    number: '04',
    title: 'New Economy Bridge',
    timing: '6 to 12 months',
    label: 'Real and virtual loop',
    items: [
      'Metaverse and Shadow Brickell progression',
      'GTA6 era creator and access integrations',
      'Larger real world asset and deal exposure for members',
      'Institutional style opportunities routed through the network',
      'Full dual desk and agent economy running at scale',
    ],
    goal: 'Members have edge, ownership, and deal access in one place.',
  },
]

const simpleVersion = [
  ['Now', 'Desks running, system forming'],
  ['Next', 'Open access, get members in'],
  ['Then', 'Incubate brands and expand verticals'],
  ['After that', 'Deepen protocol with agents, tokenization, and collateral'],
  ['Later', 'Bridge into the full new economy ownership layer'],
]

const priorities = [
  'Desk performance and process',
  'Clean access and NFT onboarding',
  'Member acquisition',
  'Vertical revenue through media, incubation, and services',
  'Protocol features',
  'Metaverse and larger vision layers',
]

export default function RoadmapPage() {
  return (
    <main className="club-deck relative min-h-screen overflow-hidden text-[var(--text)]">
      <div className="club-deck-grid pointer-events-none absolute inset-0" />
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <header className="club-command-frame border border-[#f1c96a]/25 bg-[rgba(4,6,8,0.92)] p-7 sm:p-12">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[var(--gold)]">Kurogami World / Roadmap</p>
          <h1 className="mt-4 max-w-3xl font-[var(--disp)] text-4xl font-semibold leading-[0.95] text-white sm:text-6xl">Kurogami Roadmap</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">Revenue and operators first. Spectacle second.</p>
        </header>

        <div className="mt-10 space-y-6">
          {phases.map((phase) => (
            <article key={phase.number} className="club-command-frame border border-[#f1c96a]/20 bg-[rgba(8,10,17,0.9)] p-6 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-5 border-b border-white/10 pb-5">
                <div className="flex gap-4 sm:gap-6">
                  <span className="font-mono text-2xl text-[var(--gold)]">{phase.number}</span>
                  <div>
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/50">{phase.timing}</p>
                    <h2 className="mt-2 font-[var(--disp)] text-2xl font-semibold text-white sm:text-3xl">{phase.title}</h2>
                  </div>
                </div>
                {phase.status && <span className="border border-[#2fe6b0]/35 bg-[#2fe6b0]/10 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#79f4cf]">{phase.status}</span>}
              </div>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--gold)]">{phase.label}</p>
              <ol className="mt-5 grid gap-x-8 gap-y-3 md:grid-cols-2">
                {phase.items.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-7 text-white/72"><span className="font-mono text-[var(--gold)]">{String(index + 1).padStart(2, '0')}</span><span>{item}</span></li>)}
              </ol>
              <p className="mt-6 border-l border-[#f1c96a]/45 pl-4 text-sm leading-7 text-[#f6d98c]"><span className="font-semibold">Goal:</span> {phase.goal}</p>
            </article>
          ))}
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="club-instrument-panel border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-6 sm:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">Simple Version</p>
            <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white">The sequence</h2>
            <ol className="mt-6 space-y-4">
              {simpleVersion.map(([stage, detail], index) => <li key={stage} className="flex gap-4 text-sm leading-7 text-white/75"><span className="font-mono text-[var(--gold)]">{index + 1}</span><span><strong className="text-white">{stage}</strong> / {detail}</span></li>)}
            </ol>
          </article>

          <article className="club-instrument-panel border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.9)] p-6 sm:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[var(--gold)]">Priority Order</p>
            <h2 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white">Do not scramble</h2>
            <ol className="mt-6 space-y-3">
              {priorities.map((priority, index) => <li key={priority} className="flex gap-4 text-sm leading-7 text-white/75"><span className="font-mono text-[var(--gold)]">{index + 1}</span><span>{priority}</span></li>)}
            </ol>
          </article>
        </section>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-[#f1c96a]/25 bg-[#f1c96a]/[0.07] p-5 sm:p-6">
          <p className="font-[var(--disp)] text-xl font-semibold text-[#f6d98c]">Revenue and operators first. Spectacle second.</p>
          <Link href="/lanes" className="btn btn-primary">Enter the Network</Link>
        </div>
      </section>
    </main>
  )
}
