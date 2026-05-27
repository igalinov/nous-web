'use client'

import { motion } from 'framer-motion'
import CTALink from '@/components/CTALink'

export default function HeroGeometric() {
  const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]
  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay, ease } },
  })

  return (
    <div className="relative w-full h-full flex-1 flex flex-col items-center justify-center overflow-hidden">

      {/* Radial dark center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 70% at 50% 50%, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.40) 55%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6" style={{ maxWidth: '480px', width: '100%' }}>

        <motion.h1
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 52px)',
            letterSpacing: '-0.03em',
            lineHeight: '1.08',
            margin: '0 0 24px',
          }}
        >
          <span className="block text-white">delegar es fácil.</span>
          <span className="block" style={{ color: 'rgba(255,255,255,0.26)' }}>
            pensar, cada vez menos.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.56)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(14px, 1.5vw, 17px)',
            color: 'rgba(255,255,255,0.35)',
            lineHeight: '1.5',
            letterSpacing: '-0.1px',
            marginBottom: '36px',
          }}
        >
          una app para que tu criterio siga siendo tuyo.
        </motion.p>

        <motion.div variants={fadeUp(0.7)} initial="hidden" animate="visible">
          <CTALink />
        </motion.div>

      </div>
    </div>
  )
}
