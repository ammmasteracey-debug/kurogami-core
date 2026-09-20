import type { Artifact } from '../components/engine/ArtifactVisual'

/**
 * Protocol Artifacts — the visual language of the Kurogami system.
 * Six institutional artifacts. If an image assignment needs to change,
 * swap the src here and every surface updates.
 */
export const ARTIFACTS = {
  /** DNA helix — system intelligence / compounding */
  systemIntelligence: {
    src: '/images/cosmic-art.jpg',
    caption: 'System Intelligence',
    code: 'Artifact 01',
  },
  /** Crystal crater orb — Collateral Engine */
  collateralCore: {
    src: '/images/cosmic-art1.jpg',
    caption: 'Collateral Core',
    code: 'Artifact 02',
  },
  /** Glass vial with city / DNA / moon — Tokenization Engine */
  tokenizationEngine: {
    src: '/images/cosmic-art2.jpg',
    caption: 'Tokenization Engine',
    code: 'Artifact 03',
  },
  /** Ornate throne portal — Access / seats */
  accessPortal: {
    src: '/images/cosmic-art3.jpg',
    caption: 'Access Portal',
    code: 'Artifact 04',
  },
  /** Ankh vessel city with capital flow — Markets / RWA verticals */
  marketVessel: {
    src: '/images/cosmic-art4.jpg',
    caption: 'Market Vessel',
    code: 'Artifact 05',
  },
  /** Crystal key with city in the bow — Intake / membership */
  genesisKey: {
    src: '/images/cosmic-art5.jpg',
    caption: 'Genesis Key',
    code: 'Artifact 06',
  },
} satisfies Record<string, Artifact>

export const ALL_ARTIFACTS: Artifact[] = Object.values(ARTIFACTS)
