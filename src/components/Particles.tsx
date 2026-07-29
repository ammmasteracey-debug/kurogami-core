'use client'

import { motion } from 'framer-motion'

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 1 + Math.random() * 3,
  hue: Math.random() < 0.5 ? '#00f0ff' : '#ff2d55',
  delay: Math.random() * 4
}))

export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full opacity-80"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size * 3}px`,
            height: `${particle.size * 3}px`,
            background: particle.hue,
            filter: 'blur(1px)'
          }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay
          }}
        />
      ))}
    </div>
  )
}
