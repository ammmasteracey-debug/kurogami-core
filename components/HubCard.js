"use client"
import { motion } from 'framer-motion'

export default function HubCard({ title }) {
  return (
    <motion.article whileHover={{ scale: 1.03 }} className="bg-gradient-to-b from-white/3 to-white/2 border border-white/5 rounded-lg p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">A premium module for {title} — click to explore more.</p>
    </motion.article>
  )
}
