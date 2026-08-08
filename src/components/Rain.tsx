'use client'

import { motion } from 'framer-motion'

const rainLines = Array.from({ length: 60 }, (_, index) => {
  const width = 1 + Math.random() * 1.4
  const left = Math.random() * 100
  const hue = Math.random() < 0.7 ? '#d9b76f' : '#8f9caf'
  const opacity = 0.08 + Math.random() * 0.2
  const duration = 4 + Math.random() * 6
  const delay = -Math.random() * 6

  return { id: index, left, width, hue, opacity, duration, delay }
})

export default function Rain() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {rainLines.map((line) => (
        <motion.span
          key={line.id}
          className="pointer-events-none absolute top-[-18px] rounded-full"
          style={{
            left: `${line.left}%`,
            width: `${line.width}px`,
            height: '28vh',
            opacity: line.opacity,
            backgroundImage: `linear-gradient(to bottom, transparent, ${line.hue} 36%, ${line.hue} 64%, transparent)`,
            filter: 'blur(1px)'
          }}
          animate={{ y: ['-12vh', '110vh'] }}
          transition={{
            duration: line.duration,
            ease: 'linear',
            repeat: Infinity,
            delay: line.delay
          }}
        />
      ))}
    </div>
  )
}
