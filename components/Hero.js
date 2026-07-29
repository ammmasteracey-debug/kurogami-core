"use client"
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/shadow-brickell.jpg')] bg-cover bg-center filter brightness-60"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>

      <div className="absolute inset-0 pointer-events-none rain"></div>
      <div className="absolute inset-0 pointer-events-none particles"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-sm text-kurocyaan tracking-widest mb-4">SHADOW BRICKELL · THE FRACTURE GATEWAY</p>

          <h1 className="font-extrabold text-white text-6xl md:text-8xl leading-tight">
            <span className="text-white">KURO</span>
            <span className="text-kuromagenta">GAMI</span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-300">Iconic collectibles of this cycle. Real assets. Real gameplay. Global Tribes awakening.</p>

          <div className="mt-8 flex gap-4 justify-center">
            <motion.a whileHover={{ scale: 1.03 }} href="#" className="px-6 py-3 bg-kuromagenta text-white rounded shadow-lg">JOIN THE WAITLIST</motion.a>
            <motion.a whileHover={{ scale: 1.03 }} href="/hub" className="px-6 py-3 border border-kurocyaan text-kurocyaan rounded">LEARN ABOUT GLOBAL TRIBES</motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
