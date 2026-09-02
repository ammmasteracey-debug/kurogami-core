import Image from 'next/image'
import Link from 'next/link'

const panelClass = 'rounded-[1.7rem] border border-white/10 bg-[rgba(8,10,17,0.9)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.26)] sm:p-10'
const labelClass = 'font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[var(--gold)]'

const artists = [
  {
    id: 'acey',
    name: 'Ac3y',
    role: 'Founder · Systems Architect · Kurogami World',
    bio: 'Builder with 11+ years across sales, ecommerce, renewable energy, AI automation, custom trading systems, and full-stack Web3 infrastructure. Architecting Kurogami World as a cultural-economic system with real-world access, liquidity, and world-building layers.',
    tags: ['Systems', 'Infrastructure', 'Automation', 'Trading', 'Web3'],
    image: '/images/kurogami-load.jpg',
    socials: {
      instagram: 'https://www.instagram.com/cryptoac3y?igsh=OXIzOXd2YmFybjgz&utm_source=qr',
      x: 'https://x.com/CryptoAc3y',
    },
  },
  {
    id: 'tom',
    name: 'Tom Laroc',
    role: 'Sound / Cultural Direction',
    bio: 'Cultural operator at the intersection of sound, scene, and atmosphere. Shapes the emotional frequency of the world through music and live programming.',
    tags: ['Sound', 'Culture', 'Live Programming', 'Atmosphere'],
    image: '/images/kurogami-load.jpg',
    socials: {
      instagram: 'https://www.instagram.com/tomlaroc?igsh=a3h6MndyOXFmMjRr',
      x: 'https://x.com/TomLaroc',
    },
  },
  {
    id: 'lens',
    name: 'Lens',
    role: 'Live Painting / Visual Experience · Club Operations',
    bio: 'Multidisciplinary visual artist specializing in live painting and videography. Work rooted in movement, color, and energy. Turns moments into art and experiences into memory. Based in Miami.',
    tags: ['Live Painting', 'Visuals', 'Events', 'Videography'],
    image: '/images/kurogami-load.jpg',
    socials: {
      instagram: 'https://www.instagram.com/lensvisuals?igsh=MTdqeGZ1anowcTltdg==',
    },
  },
  {
    id: 'jay',
    name: 'Jay',
    role: 'Character Systems / Drawing',
    bio: 'Miami native and character systems artist. Can draw across styles with a cultural twist. Designs the visual souls and character language of Kurogami World.',
    tags: ['Characters', 'Drawing', 'Cultural IP', 'Visual Systems'],
    image: '/images/kurogami-load.jpg',
    socials: {
      instagram: 'https://www.instagram.com/tokeyodraws?igsh=MXkxYTR4ZHZnOGtoMA==',
    },
  },
  {
    id: 'abu',
    name: 'Abu',
    role: 'Creative Direction · Events · Culture',
    bio: 'Multidisciplinary creative operator since 2014 across entertainment and events nationally. Mission rooted in sovereignty for himself and others. Creative director, event planner, promoter, videographer, fashion designer, songwriter, producer, tattoo artist, therapist, and shamanic practitioner — a full-spectrum creative who understands how culture and rooms actually move.',
    tags: ['Creative Direction', 'Events', 'Tattoo', 'Film', 'Fashion', 'Music', 'Healing Arts'],
    status: 'Founding · Culture',
    image: '/images/kurogami-load.jpg',
    socials: {
      instagram: 'https://www.instagram.com/sphinxa8?igsi=MXJ5b3N1bjJyaHBreA==',
    },
  },
]

export default function ArtistsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <Image src="/images/kurogami-world-hero.jpg" alt="Kurogami World backdrop" fill priority className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.95))]" />
      </div>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:px-8 lg:px-10">
        <article className={panelClass}>
          <p className={labelClass}>The Artists</p>
          <h1 className="mt-4 font-[var(--disp)] text-3xl font-semibold text-white sm:text-4xl">Kurogami World is built by artists. These are the first.</h1>
        </article>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...artists].sort((left, right) => Number(Boolean(right.status)) - Number(Boolean(left.status))).map((artist) => (
            <article key={artist.id} className="artist-card">
              <div className="artist-image-wrap">
                <Image src={artist.image} alt={artist.name} width={600} height={400} className="artist-image" />
              </div>
              <div className="artist-body p-4">
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-role">{artist.role}</p>
                {artist.status && <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--gold)]">{artist.status}</p>}
                <p className="artist-bio mt-3">{artist.bio}</p>
                <div className="artist-tags mt-3">
                  {artist.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
                {(artist.socials.instagram || artist.socials.x) && <div className="artist-socials mt-4">
                  {artist.socials.instagram && <a href={artist.socials.instagram} target="_blank" rel="noreferrer" className="artist-social-link">Instagram</a>}
                  {artist.socials.x && <a href={artist.socials.x} target="_blank" rel="noreferrer" className="artist-social-link">X</a>}
                </div>}
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <Link href="/paths" className="btn btn-primary w-full sm:w-auto">Back to Paths</Link>
          <Link href="/nights" className="btn btn-secondary w-full sm:w-auto">View Nights</Link>
        </div>
      </section>
    </main>
  )
}
