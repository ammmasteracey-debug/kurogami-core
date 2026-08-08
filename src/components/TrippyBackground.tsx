"use client"

export default function TrippyBackground() {
  return (
    <div aria-hidden className="trippy-bg fixed inset-0 z-[-10] pointer-events-none">
      <div className="trippy-layer layer-a" />
      <div className="trippy-layer layer-b" />
      <div className="trippy-layer layer-c" />
      <div className="trippy-layer layer-d" />
      <div className="trippy-vane" />
      <div className="trippy-grid" />
      <div className="trippy-noise" />
    </div>
  )
}
