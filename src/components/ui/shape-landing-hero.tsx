'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CTALink from '@/components/CTALink'

const rotating = [
  'pensar, cada vez menos.',
  'despacio. sin darte cuenta.',
  'nadie te dijo el precio.',
  '¿en quién te estás convirtiendo?',
  'tu criterio, diluyéndose.',
]

export default function HeroGeometric() {
  const [idx, setIdx] = useState(0)
  const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % rotating.length), 3200)
    return () => clearInterval(t)
  }, [])

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, delay, ease } },
  })

  return (
    <div className="relative w-full h-full flex-1 flex flex-col items-center justify-center overflow-hidden">

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 70% at 50% 50%, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.40) 55%, transparent 100%)',
        }}
      />

      <div className="relative z-10 text-center px-6" style={{ maxWidth: '520px', width: '100%' }}>

        <motion.h1
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            margin: '0 0 24px',
          }}
        >
          {/* Static first line */}
          <span style={{
            display: 'block',
            color: '#ffffff',
            fontSize: 'clamp(24px, 3.5vw, 46px)',
            marginBottom: '4px',
          }}>
            delegar tu pensamiento es fácil.
          </span>

          {/* Rotating second line */}
          <span style={{
            display: 'block',
            color: 'rgba(255,255,255,0.28)',
            fontSize: 'clamp(22px, 3.2vw, 42px)',
            minHeight: '1.2em',
          }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={rotating[idx]}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.55, ease }}
                style={{ display: 'block' }}
              >
                {rotating[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Supporting line */}
        <motion.p
          variants={fadeUp(0.58)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(13px, 1.4vw, 16px)',
            color: 'rgba(255,255,255,0.28)',
            lineHeight: '1.5',
            letterSpacing: '-0.1px',
            marginBottom: '36px',
          }}
        >
          una app para que tu criterio siga siendo tuyo.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp(0.72)} initial="hidden" animate="visible">
          <CTALink />
        </motion.div>

      </div>
    </div>
  )
}
