'use client'

import { useState } from 'react'

/**
 * ArtifactVisual renders a single protocol artifact as an institutional object:
 * thin gold frame, quiet dark surround, light caption. No gallery treatment.
 */
export function ArtifactVisual({
  src,
  alt,
  caption,
  code,
  className = '',
}: {
  src: string
  alt: string
  caption: string
  /** Short mono code shown over the image, e.g. "Artifact 02" */
  code?: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <div className={`placeholder-panel ${className}`}>{caption} — visual pending</div>
  }

  return (
    <figure className={`artifact-frame ${className}`}>
      <div className="artifact-media">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="artifact-img"
        />
        {code && <span className="artifact-code">{code}</span>}
      </div>
      <figcaption className="artifact-caption">{caption}</figcaption>
    </figure>
  )
}

export type Artifact = {
  src: string
  caption: string
  code: string
  href?: string
}

/**
 * ArtifactStrip renders the full set of protocol artifacts in one quiet row.
 * On mobile it becomes a horizontal scroll strip rather than a grid dump.
 */
export function ArtifactStrip({
  artifacts,
  className = '',
}: {
  artifacts: Artifact[]
  className?: string
}) {
  return (
    <div className={`artifact-strip ${className}`}>
      {artifacts.map((artifact) => (
        <figure key={artifact.src} className="artifact-strip-item">
          <div className="artifact-media">
            <img src={artifact.src} alt={artifact.caption} loading="lazy" className="artifact-img" />
          </div>
          <figcaption className="artifact-caption">{artifact.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}
