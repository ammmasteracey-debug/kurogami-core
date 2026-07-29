'use client'

import { motion } from 'framer-motion'

const rainLines = Array.from({ length: 60 }, (_, index) => {
  const width = 1.5 + Math.random() * 1.8 // slightly thicker
  const left = Math.random() * 100
  const hue = Math.random() < 0.5 ? '#00f0ff' : '#ff2d55'
  const opacity = 0.12 + Math.random() * 0.4
  const duration = 3 + Math.random() * 5
  const delay = -Math.random() * 6

  return { id: index, left, width, hue, opacity, duration, delay }
})

export default function Rain() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {rainLines.map((line) => (
        <motion.span
          key={line.id}
          className={`absolute top-[-18px] rounded-full pointer-events-none w-[1.5px]`} 
          style={{
            left: `${line.left}%`,
            height: '28vh',
            opacity: line.opacity,
            backgroundImage: `linear-gradient(to bottom, transparent, ${line.hue} 40%, ${line.hue} 60%, transparent)`,
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
