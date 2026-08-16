'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Rain from '../components/Rain'
import Particles from '../components/Particles'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import TrippyBackground from '../components/TrippyBackground'
import HeroParallax from '../components/HeroParallax'

type ArtistProfile = {
  id: string
  name: string
  role: string
  bio: string
  fullBio: string
  tags: string[]
  score: number
  breakdown: {
    creation: number
    consistency: number
    culturalSignal: number
    distribution: number
    systems: number
  }
  image: string
  socials: {
    instagram: string
    x?: string
  }
  portfolio: {
    title: string
    format: string
    note: string
    link: string
  }[]
}

export default function HomePage() {
  const router = useRouter()

  const [activePanel, setActivePanel] = useState<'overview' | 'insight' | 'rights' | 'compare' | 'infrastructure' | 'offer'>('overview')
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null)
  const [heroMenuOpen, setHeroMenuOpen] = useState(false)

  const artists: ArtistProfile[] = [
    {
      id: 'acey',
      name: 'Ac3y',
      role: 'Founder · Systems Architect · Kurogami World',
      bio: 'Builder with 11+ years across sales, ecommerce, renewable energy, AI automation, custom trading systems, and full-stack Web3 infrastructure. Architecting Kurogami World as a cultural-economic system with real-world access, liquidity, and world-building layers.',
      fullBio:
        'Builder with 11+ years of cross-industry execution across sales, ecommerce, renewable energy, AI automation, custom trading systems, and full-stack Web3 infrastructure. Currently architecting Kurogami World — a cultural-economic system combining founding art as access keys, real-world asset claim and liquidity rails, proprietary trading edge, artist-led public culture, and long-form world infrastructure. The Forge Index exists because revenue, followers, and short-term traction are incomplete measures. It grades operators by depth, execution, alignment, and ability to build systems that outlast cycles. Member of the first 100 via the clean OTC / proof-of-concept cohort, Braelen is helping set the standard, structure, and early market behavior for the system.',
      tags: ['Systems', 'Infrastructure', 'Automation', 'Trading', 'Web3'],
      score: 92,
      breakdown: {
        creation: 93,
        consistency: 90,
        culturalSignal: 91,
        distribution: 92,
        systems: 94,
      },
      image: '/images/kurogami-load.jpg',
      socials: {
        instagram: 'https://www.instagram.com/cryptoac3y?igsh=OXIzOXd2YmFybjgz&utm_source=qr',
        x: 'https://x.com/CryptoAc3y',
      },
      portfolio: [
        {
          title: 'Kurogami World Architecture',
          format: 'System design',
          note: 'Founding art as access keys, claim and liquidity rails, and culture-led infrastructure for the broader world layer.',
          link: 'https://x.com/CryptoAc3y',
        },
        {
          title: 'Automation & Ops Systems',
          format: 'AI / CRM / tooling',
          note: 'Voice agents, dashboard workflows, and process automation built for service, real estate, and trading operations.',
          link: 'https://www.instagram.com/cryptoac3y?igsh=OXIzOXd2YmFybjgz&utm_source=qr',
        },
      ],
    },
    {
      id: 'tom',
      name: 'Tom Laroc',
      role: 'Sound / Cultural Direction',
      bio: 'Cultural operator at the intersection of sound, scene, and atmosphere. Shapes the emotional frequency of the world through music and live programming.',
      fullBio:
        'Tom Laroc operates at the intersection of sound, scene, and atmosphere. He shapes the emotional frequency of Kurogami World through curated music direction and live programming that amplifies narrative and identity.',
      tags: ['Sound', 'Culture', 'Live Programming', 'Atmosphere'],
      score: 88,
      breakdown: {
        creation: 89,
        consistency: 87,
        culturalSignal: 91,
        distribution: 86,
        systems: 87,
      },
      image: '/images/kurogami-load.jpg',
      socials: {
        instagram: 'https://www.instagram.com/tomlaroc?igsh=a3h6MndyOXFmMjRr',
        x: 'https://x.com/TomLaroc',
      },
      portfolio: [
        {
          title: 'Frequency District Sessions',
          format: 'Live set / curation',
          note: 'Underground sound programming for high-signal rooms and founder activations.',
          link: 'https://www.tiktok.com/@tomlaroc',
        },
        {
          title: 'Midnight Atmosphere Series',
          format: 'Audio direction',
          note: 'Signature ambient and percussive palette for character-led storytelling.',
          link: 'https://instagram.com/tomlaroc',
        },
      ],
    },
    {
      id: 'lens',
      name: 'Lens',
      role: 'Live Painting / Visual Experience · Club Operations',
      bio: 'Multidisciplinary visual artist specializing in live painting and videography. Work rooted in movement, color, and energy. Turns moments into art and experiences into memory. Based in Miami.',
      fullBio:
        'Lens is a multidisciplinary visual artist focused on live painting and videography. Rooted in movement, color, and energy, the work turns moments into art and experiences into memory, with a distinct Miami visual pulse.',
      tags: ['Live Painting', 'Visuals', 'Events', 'Videography'],
      score: 90,
      breakdown: {
        creation: 92,
        consistency: 89,
        culturalSignal: 90,
        distribution: 88,
        systems: 89,
      },
      image: '/images/kurogami-load.jpg',
      socials: {
        instagram: 'https://www.instagram.com/lensvisuals?igsh=MTdqeGZ1anowcTltdg==',
      },
      portfolio: [
        {
          title: 'Chromatic Motion Walls',
          format: 'Live painting',
          note: 'Rapid visual compositions produced live during cultural events and streams.',
          link: 'https://instagram.com/lenscreates',
        },
        {
          title: 'Street Pulse Visual Logs',
          format: 'Video / documentation',
          note: 'Cinematic captures translating Miami movement into collectible visual memory.',
          link: 'https://www.tiktok.com/@lenscreates',
        },
      ],
    },
    {
      id: 'jay',
      name: 'Jay',
      role: 'Character Systems / Drawing',
      bio: 'Miami native and character systems artist. Can draw across styles with a cultural twist. Designs the visual souls and character language of Kurogami World.',
      fullBio:
        'Jay is a Miami native character systems artist with broad stylistic range and a cultural twist. He designs the visual souls and character language of Kurogami World, bridging illustration, identity, and IP expression.',
      tags: ['Characters', 'Drawing', 'Cultural IP', 'Visual Systems'],
      score: 91,
      breakdown: {
        creation: 92,
        consistency: 90,
        culturalSignal: 91,
        distribution: 89,
        systems: 92,
      },
      image: '/images/kurogami-load.jpg',
      socials: {
        instagram: 'https://www.instagram.com/tokeyodraws?igsh=MXkxYTR4ZHZnOGtoMA==',
      },
      portfolio: [
        {
          title: 'Shadow Brickell Characters',
          format: 'Character system',
          note: 'Identity framework and signature character lines for district-level narrative.',
          link: 'https://x.com/jaydrawsworlds',
        },
        {
          title: 'Global Tribe Sketch Cycles',
          format: 'Illustration',
          note: 'Cross-style drawings that map faction identity, posture, and visual mythology.',
          link: 'https://instagram.com/jaydrawsworlds',
        },
      ],
    },
  ]

  const selectedArtistProfile = artists.find((artist) => artist.id === selectedArtist) ?? null
  const weeklyEvents = [
    {
      title: 'Sunday Nights at Churchill\'s',
      recurring: 'Every Sunday',
      venue: 'Churchill\'s Pub',
      city: 'Miami',
      artistsPresent: 'Tom Laroc · Lens · Jay',
      description: 'Sound, live painting, and character work in public. Process becomes presence.',
      thisWeek: true,
    },
    {
      title: 'Open Slot',
      recurring: 'Open',
      venue: 'TBD',
      city: 'Miami',
      artistsPresent: 'Open for future artists',
      description: 'A flexible slot for a new artist, collaborator, or live activation.',
      thisWeek: false,
    },
    {
      title: 'Open Slot',
      recurring: 'Open',
      venue: 'TBD',
      city: 'Miami',
      artistsPresent: 'Open for future artists',
      description: 'A flexible slot for a new artist, collaborator, or live activation.',
      thisWeek: false,
    },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const hasLoadingCookie = document.cookie
      .split(';')
      .map((part) => part.trim())
      .some((part) => part.startsWith('kurogami_shown_loading='))

    if (!hasLoadingCookie) {
      router.replace('/loading?to=/')
    }
  }, [router])

  const showLoading = useCallback(() => {
    try {
      document.cookie = 'kurogami_shown_loading=; path=/; max-age=0'
    } catch (e) {}
    router.push('/loading?to=/')
  }, [router])

  const showPanel = useCallback(
    (panel: 'overview' | 'insight' | 'rights' | 'compare' | 'infrastructure' | 'offer') => {
      setActivePanel(panel)
      if (typeof window !== 'undefined') {
        document.getElementById('nestedContent')?.scrollIntoView({ behavior: 'smooth' })
      }
    },
    []
  )

  return (
    <main className="relative overflow-hidden page-shell text-[var(--text-1)]">
      <TrippyBackground />
      <div className="glowfield" />

      <section className="hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-[-3%]">
            <Image
              src="/images/kurogami-world-stream.jpg"
              alt="Kurogami World stream hero"
              fill
              priority
              className="object-cover object-center brightness-[0.62] contrast-[1.08] saturate-[1.1]"
            />
          </div>
          <div className="absolute inset-0 hero-image-overlay" />
        </div>

        <div className="relative z-10 hero-inner">
          <div className="wrap mx-auto text-center">
            {/* Subtle white/grey title glow replaces earlier SVG distortion */}
            <motion.div
              className="mb-6 flex justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.14 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 py-2 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.24)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f1c96a]/25 bg-white/10 p-1.5">
                  <Image src="/images/kurogami-load.jpg" alt="Kurogami World logo" width={40} height={40} className="h-full w-full rounded-full object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#f1c96a]">Kurogami World</p>
                  <p className="text-[0.72rem] text-white/70">Founding access layer</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="hero-title-panel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18 }}
            >
              <h1 className="hero-title hero-title-trippy">KUROGAMI WORLD</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="hero-copy"
            >
              A premium world for creators. Kurogami gives your art visibility, ownership, and infrastructure inside a founding access layer.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
            >
              <div className="hero-context-panel">
                <p className="hero-context">Founding membership for culture-makers and selective collaborators.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.36 }}
              className="hero-gallery"
            >
              <div className="hero-gallery-grid">
                <div className="hero-image-card">
                  <Image
                    src="/images/global-tribes1.jpg"
                    alt="Global tribes gathering"
                    width={380}
                    height={260}
                    className="hero-image-card-img"
                  />
                  <p>Global tribes gathering</p>
                </div>
                <div className="hero-image-card">
                  <Image
                    src="/images/global-tribes3.jpg"
                    alt="Global creative tribes"
                    width={380}
                    height={260}
                    className="hero-image-card-img"
                  />
                  <p>Global creative tribes in motion</p>
                </div>
                <div className="hero-image-card">
                  <Image
                    src="/images/global-tribes5.jpg"
                    alt="Global tribe identity"
                    width={380}
                    height={260}
                    className="hero-image-card-img"
                  />
                  <p>Global tribe identity and presence</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.36 }}
              className="herocta herocta-vertical"
            >
              <Link href="/reserve" className="btn btn-primary">
                Reserve Founding Art
              </Link>
              <button
                type="button"
                className="hero-menu-toggle"
                aria-expanded={heroMenuOpen}
                aria-controls="heroVerticalMenu"
                onClick={() => setHeroMenuOpen((prev) => !prev)}
              >
                {heroMenuOpen ? 'Close Menu' : 'Open Menu'}
              </button>

              {heroMenuOpen && (
                <motion.div
                  className="hero-menu-shell"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div id="heroVerticalMenu" className="hero-menu-stack">
                    <Link href="/" className="hero-menu-link hero-menu-item">
                      Home
                    </Link>
                    <Link href="/reserve" className="hero-menu-link hero-menu-item">
                      Reserve
                    </Link>
                    <Link href="/surviving-miami" className="hero-menu-link hero-menu-item">
                      Kurogami World
                    </Link>
                    <Link href="/nights" className="hero-menu-link hero-menu-item">
                      Nights
                    </Link>
                    <Link href="/lore" className="hero-menu-link hero-menu-item">
                      Lore
                    </Link>
                    <Link href="/token" className="hero-menu-link hero-menu-item">
                      $KRG
                    </Link>
                    <Link href="/solana" className="hero-menu-link hero-menu-item">
                      Solana
                    </Link>
                    <Link href="/gta6" className="hero-menu-link hero-menu-item">
                      GTA6
                    </Link>
                  </div>
                  <div className="hero-menu-scroll-indicator" aria-hidden>
                    ↓
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        <Rain />
        <Particles />
        <HeroParallax />
      </section>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-32 sm:px-8 lg:px-10">
        <section id="nestedContent" className="nested-section section">
          <div className="panel-card p-10">
            <div className="mb-8 flex flex-wrap items-center gap-4 rounded-[1.2rem] border border-white/10 bg-black/20 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f1c96a]/25 bg-white/10 p-2">
                <Image src="/images/kurogami-load.jpg" alt="Kurogami World logo" width={42} height={42} className="h-full w-full rounded-full object-contain" />
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#f1c96a]">Kurogami World</p>
                <p className="text-sm text-white/65">A curated access layer for artists, holders, and collaborators</p>
              </div>
            </div>
            <div className="nested-tabs">
              <button
                type="button"
                onClick={() => showPanel('overview')}
                className={`nested-tab ${activePanel === 'overview' ? 'active' : ''}`}
              >
                Core Framing
              </button>
              <button
                type="button"
                onClick={() => showPanel('insight')}
                className={`nested-tab ${activePanel === 'insight' ? 'active' : ''}`}
              >
                The Model
              </button>
              <button
                type="button"
                onClick={() => showPanel('rights')}
                className={`nested-tab ${activePanel === 'rights' ? 'active' : ''}`}
              >
                Artist Rights
              </button>
              <button
                type="button"
                onClick={() => showPanel('compare')}
                className={`nested-tab ${activePanel === 'compare' ? 'active' : ''}`}
              >
                Comparison
              </button>
              <button
                type="button"
                onClick={() => showPanel('infrastructure')}
                className={`nested-tab ${activePanel === 'infrastructure' ? 'active' : ''}`}
              >
                Infrastructure
              </button>
              <button
                type="button"
                onClick={() => showPanel('offer')}
                className={`nested-tab ${activePanel === 'offer' ? 'active' : ''}`}
              >
                Founding Offer
              </button>
            </div>

            <div className="nested-panel mt-10">
              {activePanel === 'overview' && (
                <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
                  <div>
                    <p className="label">CORE FRAMING</p>
                    <h2 className="section-title mt-4">We are all artists.</h2>
                    <div className="divider" />
                    <p className="hero-copy mt-6">
                      Art is creation and growth. Every artist deserves an audience, Kurogami World is built to ensure you find one. Created by artists, for artists, our community welcomes creators from every walk of life.
                    </p>
                    <div className="hero-info-grid mt-8">
                      <div className="info-card">
                        <p className="info-label">What it means</p>
                        <p>
                          This is not a luxury object alone. It is a creative system where exposure, ownership, and community all live together.
                        </p>
                      </div>
                      <div className="info-card">
                        <p className="info-label">Who this is for</p>
                        <p>
                          Painters, streamers, designers, musicians, stylists, builders, anyone whose work deserves a world, not just a snapshot.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel-card p-8 bg-[#070b11]/85 border-white/10">
                    <p className="label">THE INSIGHT</p>
                    <h3 className="section-title mt-4">Artists from earlier eras would have killed for this position.</h3>
                    <div className="divider mb-6" />
                    <ul className="highlight-list">
                      <li>distribution</li>
                      <li>network</li>
                      <li>ownership</li>
                      <li>cultural infrastructure</li>
                    </ul>
                    <p className="hero-copy mt-6">
                      If Picasso had socials, he would have been massive. If Warhol had socials, he might have owned the timeline.
                    </p>
                    <p className="hero-copy mt-4">
                      Today the tools exist. What most artists still lack is a system that turns creation into presence, ownership, and continuity.
                    </p>
                  </div>
                </div>
              )}

              {activePanel === 'insight' && (
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
                  <div>
                    <p className="label">THE MODEL</p>
                    <h2 className="section-title mt-4">Core stack: art, key, network, infrastructure, rails.</h2>
                    <div className="divider" />
                    <p className="hero-copy mt-6">
                      Kurogami is built as a layered system where each part has a clear job and each layer unlocks the next.
                    </p>
                    <ul className="utility-list mt-8">
                      <li>ART (front value)</li>
                      <li>NFT KEY (access object)</li>
                      <li>KUROGAMI WORLD / OPEN STREAM NETWORK (public face)</li>
                      <li>KUROGAMI INFRASTRUCTURE (backend)</li>
                      <li>$KRG allocation + world layers + RWA rails</li>
                    </ul>
                  </div>
                  <div className="panel-card p-10">
                    <p className="label">PRESALE RULE</p>
                    <h3 className="mt-4 text-3xl font-semibold text-[var(--text-1)]">Founding art now, key at launch, allocation by NFT count.</h3>
                    <div className="divider my-6" />
                    <ul className="utility-list">
                      <li>Buy founding art now.</li>
                      <li>Receive NFT at launch.</li>
                      <li>$KRG allocation scales with number of NFTs held.</li>
                    </ul>
                    <div className="key-panel mt-8">
                      <p className="label">Holder Dynamics</p>
                      <p className="hero-copy mt-3">
                        This structure creates natural pressure to hold more than one key over time.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activePanel === 'rights' && (
                <div>
                  <div className="text-center mb-10">
                    <p className="label">ARTIST RIGHTS</p>
                    <h2 className="section-title mt-4">Artists in the system can receive</h2>
                    <div className="divider mx-auto" />
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <div className="utility-card">
                      <p className="utility-title">Open exposure</p>
                      <p className="utility-text">Built-in presence through the open streaming network and creative flow.</p>
                    </div>
                    <div className="utility-card">
                      <p className="utility-title">Server rights</p>
                      <p className="utility-text">Exclusive brand and promo rights inside the GTA6 RP server experience.</p>
                    </div>
                    <div className="utility-card">
                      <p className="utility-title">Creative placement</p>
                      <p className="utility-text">Priority rights for work to be used in NFT art, key visuals, and world design.</p>
                    </div>
                    <div className="utility-card">
                      <p className="utility-title">World positioning</p>
                      <p className="utility-text">Placement in a world built around creation, not just consumption.</p>
                    </div>
                  </div>
                </div>
              )}

              {activePanel === 'compare' && (
                <div>
                  <div className="text-center mb-10">
                    <p className="label">COMPARISON</p>
                    <h2 className="section-title mt-4">$10k Founding Art vs common alternatives</h2>
                    <div className="divider mx-auto" />
                  </div>
                  <div className="comparison-wrap overflow-x-auto">
                    <table className="comparison-table">
                      <thead>
                        <tr>
                          <th>$10k Put Into</th>
                          <th>What you usually get</th>
                          <th>Main limitation</th>
                          <th>What Kurogami founding art adds</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Blue-chip NFT flip</td>
                          <td>Image + community bet</td>
                          <td>Mostly speculative, weak ongoing utility</td>
                          <td>Art + key + network + future world access</td>
                        </tr>
                        <tr>
                          <td>Watch / luxury object</td>
                          <td>Physical flex asset</td>
                          <td>Illiquid, storage, little brand upside in you</td>
                          <td>Cultural asset plus ecosystem rights path</td>
                        </tr>
                        <tr>
                          <td>Sneaker / collectible box</td>
                          <td>Hype inventory</td>
                          <td>Trend risk, no system ownership</td>
                          <td>Tied to a building world, not a dead drop</td>
                        </tr>
                        <tr>
                          <td>Stock / index slice</td>
                          <td>Market exposure</td>
                          <td>No cultural upside, no direct artist relationship</td>
                          <td>Direct relationship to creators and IP</td>
                        </tr>
                        <tr>
                          <td>Course / mastermind</td>
                          <td>Information</td>
                          <td>Decays fast, no residual ownership</td>
                          <td>Ownership artifact + access, not just info</td>
                        </tr>
                        <tr>
                          <td>NIL / creator backing</td>
                          <td>Bet on a person’s brand</td>
                          <td>Often one person, one lane</td>
                          <td>Bet on artists + the platform forming around them</td>
                        </tr>
                        <tr>
                          <td>Private club deposit</td>
                          <td>Social access</td>
                          <td>Access can be soft and political</td>
                          <td>Access encoded through key + visible creative work</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activePanel === 'infrastructure' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <p className="label">INFRASTRUCTURE LAYER</p>
                    <h2 className="section-title mt-4">Blue-chip NFT infrastructure, not a replacement for the collection itself.</h2>
                    <div className="divider mx-auto" />
                  </div>

                  <div className="infrastructure-grid">
                    <div className="infrastructure-card">
                      <p className="label">POSITIONING</p>
                      <p className="hero-copy mt-4">
                        Kurogami is not competing to replace BAYC-class collections. It is the world and utility operating layer they can plug into.
                      </p>
                      <div className="infrastructure-stack mt-6">
                        <div className="infrastructure-surface">
                          <p className="utility-title">They keep</p>
                          <ul className="utility-list mt-3">
                            <li>Their PFP identity</li>
                            <li>Their community</li>
                            <li>Their brand</li>
                            <li>Their status</li>
                          </ul>
                        </div>
                        <div className="infrastructure-surface">
                          <p className="utility-title">They gain</p>
                          <ul className="utility-list mt-3">
                            <li>District / world access</li>
                            <li>Artist + event activation</li>
                            <li>Stream network presence</li>
                            <li>Future virtual placement paths</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="infrastructure-card">
                      <p className="label">KUROGAMI PROVIDES</p>
                      <ul className="utility-list mt-4">
                        <li>Keyed entry architecture</li>
                        <li>Live cultural activation</li>
                        <li>Artist systems</li>
                        <li>Optional economic modules</li>
                        <li>Long-form world expansion</li>
                      </ul>
                      <div className="quote-card mt-6">
                        <p className="support-text">Credibility bridge</p>
                        <p className="hero-copy mt-2">
                          People like the Golden Age / Ape-event DJ node help translate this into rooms that already trust NFT-as-access.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="infrastructure-card">
                    <p className="label">LIVESHARE INTEGRATION CONCEPT</p>
                    <p className="hero-copy mt-4">
                      Frank’s Liveshare angle becomes more serious when framed as infrastructure rather than another token on a page.
                    </p>
                    <div className="quote-card mt-6">
                      <p className="support-text">Liveshare as RWA MLS layer</p>
                      <p className="hero-copy mt-3">
                        Liveshare becomes the listing / matching / transaction coordination layer for tokenized real-world assets inside Kurogami’s broader market stack.
                      </p>
                    </div>
                    <div className="infrastructure-stack mt-6">
                      <div className="infrastructure-surface">
                        <p className="utility-title">Meaning</p>
                        <ul className="utility-list mt-3">
                          <li>Buy</li>
                          <li>Sell</li>
                          <li>Rent</li>
                          <li>List</li>
                        </ul>
                      </div>
                      <div className="infrastructure-surface">
                        <p className="utility-title">Interface logic</p>
                        <p className="hero-copy mt-3">
                          Physical or tokenized assets flow into a Liveshare-style coordination layer, then into Kurogami’s parcel and spatial layer, before reaching NFT key access and $KRG-backed participation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="infrastructure-card">
                    <p className="label">FULL LOOP</p>
                    <div className="loop-list mt-5">
                      <div className="loop-item"><span className="loop-number">1</span><span>Artist creates (Jay / Lens / Tom)</span></div>
                      <div className="loop-item"><span className="loop-number">2</span><span>Collector buys founding art (presale)</span></div>
                      <div className="loop-item"><span className="loop-number">3</span><span>NFT key issues at launch</span></div>
                      <div className="loop-item"><span className="loop-number">4</span><span>$KRG allocated by holdings</span></div>
                      <div className="loop-item"><span className="loop-number">5</span><span>Holder enters Kurogami World / network</span></div>
                      <div className="loop-item"><span className="loop-number">6</span><span>Blue-chip collections can plug into world layer</span></div>
                      <div className="loop-item"><span className="loop-number">7</span><span>Spatial / parcel layer displays and routes asset activity</span></div>
                      <div className="loop-item"><span className="loop-number">8</span><span>Liveshare-class infra coordinates list / buy / sell / rent</span></div>
                      <div className="loop-item"><span className="loop-number">9</span><span>Kurogami remains the cultural + access OS on top</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activePanel === 'offer' && (
                <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] items-center">
                  <div>
                    <p className="label">FOUNDING OFFER</p>
                    <h2 className="section-title mt-4">Starting at $10k: a founding access position, not a single finished artwork.</h2>
                    <p className="hero-copy mt-6">
                      The value is framed around the utility of the NFT key, not a specific art piece. Founding positions secure early access to Kurogami World, future allocation pathways, and cultural infrastructure while the art itself acts as the visible expression of entry into the system.
                    </p>
                    <ul className="why-list mt-8">
                      <li>Founding access position in Kurogami World</li>
                      <li>NFT utility key at launch</li>
                      <li>$KRG allocation scales with number of NFTs held</li>
                      <li>World access and future utility layers</li>
                    </ul>
                    <Link href="/reserve" className="btn btn-primary mt-8">
                      Reserve Founding Art
                    </Link>
                    <p className="support-text mt-4">Early cultural participation, not a fixed-yield product.</p>
                  </div>
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#020409]/80">
                    <Image
                      src="/images/kurogami-world-logo.jpg"
                      alt="Kurogami logo placeholder"
                      width={900}
                      height={900}
                      className="h-full w-full object-contain p-10 opacity-90"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Artists section: placed after utility/key section and before GTA6 preview */}
        <section className="section artists-section">
          <div className="panel-card p-10">
            <div>
              <p className="label">THE ARTISTS</p>
              <h2 className="section-title mt-4">Kurogami World is built by artists. These are the first.</h2>
              <div className="divider mx-auto" />
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {artists.map((a) => (
                <div key={a.id} className="artist-card">
                  <div className="artist-image-wrap">
                    <Image src={a.image} alt={a.name} width={600} height={400} className="artist-image" />
                  </div>
                  <div className="artist-body p-4">
                    <h3 className="artist-name">{a.name}</h3>
                    <p className="artist-role">{a.role}</p>
                    <p className="artist-bio mt-3">{a.bio}</p>
                    <div className="artist-tags mt-3">
                      {a.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>

                    <div className="artist-socials mt-4">
                      <a href={a.socials.instagram} target="_blank" rel="noreferrer" className="artist-social-link">Instagram</a>
                      {a.socials.x && (
                        <a href={a.socials.x} target="_blank" rel="noreferrer" className="artist-social-link">X</a>
                      )}
                    </div>

                    {a.portfolio.length > 0 && (
                      <div className="artist-portfolio mt-4">
                        <p className="artist-portfolio-label">Portfolio</p>
                        <div className="artist-portfolio-list">
                          {a.portfolio.map((item) => (
                            <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="artist-portfolio-item">
                              <span className="artist-portfolio-title">{item.title}</span>
                              <span className="artist-portfolio-format">{item.format}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="forge-row mt-4">
                      <div className="forge-info">
                        <div className="forge-score">{a.score}</div>
                        <div className="forge-labels">Founding · Creation</div>
                      </div>
                      <div className="forge-bar" aria-hidden>
                        <div className="forge-fill" style={{ width: `${a.score}%` }} />
                      </div>
                    </div>

                    <div className="mt-auto pt-4">
                      <button className="btn btn-ghost" onClick={() => setSelectedArtist(a.id)}>
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 support-text">Forge Index grades artists on creation, consistency, cultural signal, distribution, and systems capacity, helping match artists with aligned capital.</p>
          </div>
        </section>

        <section className="section">
          <div className="panel-card p-10">
            <p className="label">WEEKLY EVENTS</p>
            <h2 className="section-title mt-4">Where the artists build in public</h2>
            <div className="divider" />
            <p className="support-text mt-4">Kurogami is not only online. The work happens live.</p>
            <p className="hero-copy mt-6 max-w-4xl">
              Each week the founding artists appear in real rooms, painting, drawing, sound, and process in the open. These nights are part of the world: culture first, camera optional, creation continuous.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {weeklyEvents.map((event) => (
                <article
                  key={event.title}
                  className="rounded-[1.2rem] border border-[#f1c96a]/18 bg-[rgba(8,10,17,0.86)] p-5 transition-colors duration-200 hover:border-[#f1c96a]/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[var(--gold)]">{event.recurring}</p>
                    {event.thisWeek && (
                      <span className="rounded-full border border-[#f1c96a]/45 bg-[#f1c96a]/14 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-[#f1c96a]">
                        This week
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{event.title}</h3>
                  <div className="mt-4 space-y-1 text-sm text-white/78">
                    <p><span className="text-white/45">Venue:</span> {event.venue}</p>
                    <p><span className="text-white/45">City:</span> {event.city}</p>
                    <p><span className="text-white/45">Artists:</span> {event.artistsPresent}</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/75">{event.description}</p>
                </article>
              ))}
            </div>

            <p className="support-text mt-6">Lineups can expand. Follow @kurogamixyz for weekly updates.</p>
            <div className="herocta mt-7">
              <a href="https://x.com/kurogamixyz" target="_blank" rel="noreferrer" className="btn btn-secondary">
                Follow for event updates
              </a>
              <Link href="/nights" className="btn btn-primary">
                Explore Kurogami World Nights
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="panel-card p-10">
            <p className="label">STREAM ACCESS</p>
            <h2 className="section-title mt-4">Kurogami Streaming Box (Coming Soon)</h2>
            <div className="divider" />
            <p className="support-text mt-4">This will run as a native Kurogami streaming surface. No external platform required.</p>

            <div className="stream-shell mt-8">
              <div className="stream-player-wrap">
                <div className="stream-placeholder">
                  <p className="label">Coming Soon</p>
                  <p className="stream-placeholder-copy">The Kurogami streaming box is in production and will launch here soon.</p>
                </div>
              </div>

              <div className="stream-actions mt-6">
                <div className="gateway-grid">
                  <div className="gateway-card">
                    <p className="label">Gateway 1</p>
                    <h3 className="gateway-title">NFT Access Key</h3>
                    <p className="support-text">Unlock full network access, stream archives, community, and creator layers through founding art ownership.</p>
                    <button type="button" className="btn btn-primary mt-4" onClick={() => showPanel('offer')}>
                      Purchase NFT Access
                    </button>
                  </div>

                  <div className="gateway-card">
                    <p className="label">Gateway 2</p>
                    <h3 className="gateway-title">$200/mo Community Tier</h3>
                    <p className="support-text">Join the community with limited access for participation, discussion, and selected stream features.</p>
                    <a
                      className="btn btn-secondary mt-4"
                      href="mailto:kurogamiworld@gmail.com?subject=Kurogami%20Community%20Subscription%20%24200%2Fmo&body=I%20want%20to%20join%20the%20%24200%2Fmonth%20limited%20access%20community%20tier."
                    >
                      Subscribe for $200/mo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section gta6-preview">
          <div className="panel-card p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
              <div>
                <p className="label">GTA6 INTEGRATION</p>
                <h2 className="section-title mt-4">A curated GTA6 layer for creator ownership.</h2>
                <p className="hero-copy mt-6">
                  This GTA6 path is designed for premium narrative access, selected artist placement, and art-key gated entry into a private RP experience.
                </p>
                <ul className="utility-list mt-8">
                  <li>Private GTA6 server access tied to founding art ownership.</li>
                  <li>Artist roles, branded story placement, and visible creative footprint.</li>
                  <li>Selective invitation flow focused on quality and long-term cultural positioning.</li>
                </ul>
                <div className="herocta mt-10">
                  <Link href="/gta6" className="btn btn-primary">
                    Explore GTA6 Layer
                  </Link>
                  <button type="button" className="btn btn-secondary" onClick={() => showPanel('offer')}>
                    Reserve Founding Art
                  </button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#020409]/80">
                <Image
                  src="/images/GTA6.jpg"
                  alt="GTA6 curated layer"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="panel-card p-10">
            <p className="label">NAVIGATE THE SYSTEM</p>
            <h2 className="section-title mt-4">Explore each layer of Kurogami World.</h2>
            <div className="divider" />
            <div className="herocta mt-8">
              <Link href="/surviving-miami" className="btn btn-secondary">
                Kurogami World
              </Link>
              <Link href="/lore" className="btn btn-secondary">
                The Lore
              </Link>
              <Link href="/token" className="btn btn-token">
                $KRG Token
              </Link>
              <Link href="/solana" className="btn btn-token">
                Solana Rails
              </Link>
              <Link href="/gta6" className="btn btn-gta6">
                GTA6 Layer
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="panel-card p-10 text-center">
            <p className="label">NEXT ACTION</p>
            <h2 className="section-title mt-4">Enter the key stack.</h2>
            <div className="divider mx-auto" />
            <p className="support-text mt-4">Reserve founding art, understand the monetary layer, and position early in the world system.</p>
            <div className="herocta mt-8 justify-center">
              <button type="button" className="btn btn-primary" onClick={() => showPanel('offer')}>
                Reserve Founding Art
              </button>
              <Link href="/token" className="btn btn-token">
                Explore $KRG
              </Link>
              <Link href="/surviving-miami" className="btn btn-secondary">
                Kurogami World
              </Link>
            </div>
          </div>
        </section>
      </div>

      {selectedArtistProfile && (
        <div className="artist-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="artistProfileTitle" onClick={() => setSelectedArtist(null)}>
          <div className="artist-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="artist-modal-close" aria-label="Close profile" onClick={() => setSelectedArtist(null)}>
              Close
            </button>

            <div className="artist-modal-grid">
              <div className="artist-modal-image-wrap">
                <Image
                  src={selectedArtistProfile.image}
                  alt={selectedArtistProfile.name}
                  width={900}
                  height={700}
                  className="artist-modal-image"
                />
              </div>

              <div>
                <p className="label">FOUNDING PROFILE</p>
                <h3 id="artistProfileTitle" className="section-title mt-3">{selectedArtistProfile.name}</h3>
                <p className="artist-role mt-2">{selectedArtistProfile.role}</p>
                <div className="divider" />
                <p className="artist-modal-bio">{selectedArtistProfile.fullBio}</p>

                <div className="artist-tags mt-4">
                  {selectedArtistProfile.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="artist-socials mt-5">
                  <a href={selectedArtistProfile.socials.instagram} target="_blank" rel="noreferrer" className="artist-social-link">Instagram</a>
                  {selectedArtistProfile.socials.x && (
                    <a href={selectedArtistProfile.socials.x} target="_blank" rel="noreferrer" className="artist-social-link">X</a>
                  )}
                </div>

                <div className="artist-modal-forge mt-6">
                  <p className="label">FORGE INDEX</p>
                  <div className="forge-headline">{selectedArtistProfile.score} / 100 · Founding</div>

                  <div className="forge-breakdown mt-4">
                    <div className="forge-breakdown-row">
                      <span>Creation</span>
                      <span>{selectedArtistProfile.breakdown.creation}</span>
                    </div>
                    <div className="forge-breakdown-row">
                      <span>Consistency</span>
                      <span>{selectedArtistProfile.breakdown.consistency}</span>
                    </div>
                    <div className="forge-breakdown-row">
                      <span>Cultural Signal</span>
                      <span>{selectedArtistProfile.breakdown.culturalSignal}</span>
                    </div>
                    <div className="forge-breakdown-row">
                      <span>Distribution</span>
                      <span>{selectedArtistProfile.breakdown.distribution}</span>
                    </div>
                    <div className="forge-breakdown-row">
                      <span>Systems</span>
                      <span>{selectedArtistProfile.breakdown.systems}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

