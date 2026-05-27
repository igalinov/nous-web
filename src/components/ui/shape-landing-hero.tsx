'use client'

import { motion } from 'framer-motion'
import CTALink from '@/components/CTALink'

export default function HeroGeometric() {
  const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]
  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay, ease } },
  })

  return (
    <div className="relative w-full h-full flex-1 flex flex-col items-center justify-center overflow-hidden">

      {/* Radial dark center — text readability against the canvas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 70% at 50% 50%, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.40) 55%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6" style={{ maxWidth: '560px', width: '100%' }}>

        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-[10px] mb-12"
        >
          <div className="w-[5px] h-[5px] rounded-full bg-[#BE5504]" />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: '#BE5504',
            letterSpacing: '0.14em',
          }}>
            acceso anticipado
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp(0.56)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '-0.04em',
            lineHeight: '0.96',
            margin: '0 0 28px',
          }}
          className="text-[clamp(50px,9.5vw,104px)]"
        >
          <span className="block text-white">delegar es fácil.</span>
          <span className="block" style={{ color: 'rgba(255,255,255,0.26)' }}>
            pensar, cada vez menos.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.72)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(255,255,255,0.40)',
            lineHeight: '1.4',
            letterSpacing: '-0.15px',
            marginBottom: '44px',
          }}
        >
          una app para que tu criterio siga siendo tuyo.
        </motion.p>

        <motion.div variants={fadeUp(0.88)} initial="hidden" animate="visible">
          <CTALink />
        </motion.div>

      </div>
    </div>
  )
}
