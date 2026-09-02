export type ArtistProfile = {
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
  ctaLabel?: string
  ctaLink?: string
}

export const artists: ArtistProfile[] = [
  {
    id: 'acey',
    name: 'Ac3y',
    role: 'Founder · Systems Architect · Kurogami World',
    bio: 'Builder with 11+ years across sales, ecommerce, renewable energy, AI automation, custom trading systems, and full-stack Web3 infrastructure. Architecting Kurogami World as a cultural-economic system with real-world access, liquidity, and world-building layers.',
    fullBio:
      'Builder with 11+ years of cross-industry execution across sales, ecommerce, renewable energy, AI automation, custom trading systems, and full-stack Web3 infrastructure. Currently architecting Kurogami World — a cultural-economic system combining founding art as access keys, real-world asset claim and liquidity rails, proprietary trading edge, artist-led public culture, and long-form world infrastructure. The Forge Index exists because revenue, followers, and short-term traction are incomplete measures. It grades operators by depth, execution, alignment, and ability to build systems that outlast cycles. Member of the first 100 via the clean OTC / proof-of-concept cohort, helping set the standard, structure, and early market behavior for the system.',
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
      'Lens is a multidisciplinary visual artist focused on live painting and videography. Rooted in movement, color, and energy, the work turns moments into art and experiences into memory, with a distinct Miami visual pulse. Lens also leads club operations, shaping the room, flow, and live experience of Kurogami World Nights.',
    tags: ['Live Painting', 'Visuals', 'Events', 'Club Operations'],
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
        link: 'https://instagram.com/lensvisuals',
      },
      {
        title: 'Street Pulse Visual Logs',
        format: 'Video / documentation',
        note: 'Cinematic captures translating Miami movement into collectible visual memory.',
        link: 'https://www.tiktok.com/@lensvisuals',
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
        link: 'https://www.instagram.com/tokeyodraws',
      },
      {
        title: 'Global Tribe Sketch Cycles',
        format: 'Illustration',
        note: 'Cross-style drawings that map faction identity, posture, and visual mythology.',
        link: 'https://www.instagram.com/tokeyodraws',
      },
    ],
  },
]
