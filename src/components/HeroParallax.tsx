"use client"

import { useEffect, useRef } from "react"

export default function HeroParallax() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      el.style.setProperty("--px", `${x * 28}px`)
      el.style.setProperty("--py", `${y * 18}px`)
      el.style.setProperty("--qx", `${-x * 16}px`)
      el.style.setProperty("--qy", `${-y * 10}px`)
      el.style.setProperty("--rx", `${x * 8}px`)
      el.style.setProperty("--ry", `${y * 10}px`)
    }

    const onLeave = () => {
      el.style.setProperty("--px", "0px")
      el.style.setProperty("--py", "0px")
      el.style.setProperty("--qx", "0px")
      el.style.setProperty("--qy", "0px")
      el.style.setProperty("--rx", "0px")
      el.style.setProperty("--ry", "0px")
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <div ref={ref} className="hero-parallax">
      <span className="parallax-dot dot-a" />
      <span className="parallax-dot dot-b" />
      <span className="parallax-dot dot-c" />
      <span className="parallax-streak streak-a" />
      <span className="parallax-streak streak-b" />
    </div>
  )
}
