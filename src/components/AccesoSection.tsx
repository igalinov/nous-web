'use client'

import { motion } from 'framer-motion'
import WaitlistForm from '@/components/WaitlistForm'

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export default function AccesoSection() {
  return (
    <section
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ginger glow behind the form */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(190,85,4,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease }}
        style={{
          position: 'absolute',
          top: 0,
          left: '40px',
          right: '40px',
          height: '1px',
          background: 'rgba(255,255,255,0.07)',
          transformOrigin: 'left',
        }}
      />

      <div
        className="acceso-pad"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '640px',
          textAlign: 'center',
          paddingTop: '100px',
          paddingBottom: '100px',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: '#BE5504',
            letterSpacing: '0.16em',
            marginBottom: '28px',
          }}
        >
          sé el primero en acceder.
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(44px, 8.5vw, 88px)',
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: '0.96',
            marginBottom: '28px',
          }}
        >
          está en camino.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: 'rgba(255,255,255,0.38)',
            lineHeight: '1.5',
            letterSpacing: '-0.1px',
            maxWidth: '400px',
            margin: '0 auto 52px',
          }}
        >
          estamos construyendo algo que no existía:<br />
          la práctica diaria de la independencia cognitiva.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.07)',
            marginBottom: '48px',
            transformOrigin: 'center',
          }}
        />

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          <WaitlistForm dark />
        </motion.div>
      </div>
    </section>
  )
}
