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
    const t = setInterval(() => setIdx(i => (i + 1) % rotating.length), 5000)
    return () => clearInterval(t)
  }, [])

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay, ease } },
  })

  return (
    <div className="relative w-full h-full flex-1 flex flex-col items-center justify-center overflow-hidden">

      {/* Viñeta radial — adapta al tema vía variables CSS */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 70% at 50% 50%, var(--vignette-a) 0%, var(--vignette-b) 55%, transparent 100%)',
        }}
      />

      <div className="relative z-10 text-center px-6" style={{ maxWidth: '600px', width: '100%' }}>

        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
        >
          {/* Línea estática */}
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px, 3.8vw, 50px)',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            color: 'var(--hero-static)',
            margin: '0 0 10px',
          }}>
            delegar tu pensamiento es fácil.
          </p>
        </motion.div>

        {/* Línea rotante — ginger, ciclo de 5s */}
        <div style={{ minHeight: 'clamp(36px, 5.5vw, 72px)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '36px' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={rotating[idx]}
              initial={{ opacity: 0, filter: 'blur(14px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(14px)', y: -12 }}
              transition={{ duration: 0.7, ease }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4.5vw, 60px)',
                letterSpacing: '-0.035em',
                lineHeight: '1.05',
                color: '#BE5504',
                margin: 0,
              }}
            >
              {rotating[idx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Subtítulo + CTA */}
        <motion.div
          variants={fadeUp(0.65)}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}
        >
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(13px, 1.4vw, 16px)',
            color: 'var(--hero-sub)',
            lineHeight: '1.5',
            letterSpacing: '-0.1px',
            margin: 0,
          }}>
            una app para que tu criterio siga siendo tuyo.
          </p>

          <CTALink />
        </motion.div>

      </div>
    </div>
  )
}
