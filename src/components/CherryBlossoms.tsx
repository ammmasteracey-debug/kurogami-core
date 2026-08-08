"use client"

import { useEffect, useRef } from "react"

export default function CherryBlossoms({ count = 80 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext("2d")!

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    interface Petal { x: number; y: number; vx: number; vy: number; r: number; rot: number; vr: number; hue: number }
    const petals: Petal[] = []

    function rand(min: number, max: number) { return Math.random() * (max - min) + min }

    for (let i = 0; i < count; i++) {
      petals.push({
        x: rand(0, width),
        y: rand(-height, 0),
        vx: rand(-0.35, 0.35),
        vy: rand(0.6, 2.2),
        r: rand(6, 14),
        rot: rand(0, Math.PI * 2),
        vr: rand(-0.02, 0.02),
        hue: rand(320, 350)
      })
    }

    let raf = 0

    function drawPetal(p: Petal) {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.fillStyle = `hsla(${p.hue}, 85%, 80%, 0.95)`
      ctx.beginPath()
      ctx.ellipse(0, 0, p.r * 0.9, p.r * 0.55, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    function step() {
      ctx.clearRect(0, 0, width, height)
      for (const p of petals) {
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        if (p.y > height + 20 || p.x < -40 || p.x > width + 40) {
          p.x = rand(-20, width + 20)
          p.y = rand(-height * 0.5, -10)
          p.vx = rand(-0.4, 0.4)
          p.vy = rand(0.6, 2.4)
        }
        drawPetal(p)
      }
      raf = requestAnimationFrame(step)
    }

    function onResize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", onResize)
    raf = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [count])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" />
}
