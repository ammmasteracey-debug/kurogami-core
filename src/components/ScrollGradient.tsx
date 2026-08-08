"use client"

import { useEffect, useState } from "react"

export default function ScrollGradient() {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      const h = window.innerHeight
      const o = Math.min(1, y / (h * 0.9))
      setOpacity(o)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      id="scroll-gradient"
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 z-10 mix-blend-screen"
    />
  )
}
