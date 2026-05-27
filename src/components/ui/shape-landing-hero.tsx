'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CTALink from '@/components/CTALink'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  baseOpacity: number
  phase: number
  type: 'ginger' | 'bright' | 'dim'
}

export default function HeroGeometric() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Build particle pool
    const N = 88
    const particles: Particle[] = []
    const pool: Array<Particle['type']> = [
      'ginger', 'ginger',
      'bright', 'bright', 'bright',
      'dim', 'dim', 'dim', 'dim', 'dim', 'dim',
    ]

    for (let i = 0; i < N; i++) {
      const type = pool[Math.floor(Math.random() * pool.length)]
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: type === 'ginger'
          ? Math.random() * 2.5 + 2
          : type === 'bright'
            ? Math.random() * 1.5 + 0.8
            : Math.random() * 1 + 0.4,
        baseOpacity: type === 'ginger' ? 0.9 : type === 'bright' ? 0.35 : 0.14,
        phase: Math.random() * Math.PI * 2,
        type,
      })
    }

    const MAX_DIST = 165
    let t = 0
    let animId: number

    const draw = () => {
      t += 0.007
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d2 = dx * dx + dy * dy
          if (d2 > MAX_DIST * MAX_DIST) continue

          const dist = Math.sqrt(d2)
          const strength = 1 - dist / MAX_DIST
          const hasGinger = particles[i].type === 'ginger' || particles[j].type === 'ginger'

          if (hasGinger) {
            ctx.strokeStyle = `rgba(190, 85, 4, ${strength * 0.3})`
            ctx.lineWidth = 0.75
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${strength * 0.07})`
            ctx.lineWidth = 0.4
          }
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }

      // Nodes
      for (const p of particles) {
        const pulse = Math.sin(t + p.phase) * 0.25 + 0.75
        const op = p.baseOpacity * pulse

        if (p.type === 'ginger') {
          // Soft outer glow
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5)
          glow.addColorStop(0, `rgba(190, 85, 4, ${op * 0.35})`)
          glow.addColorStop(1, 'rgba(190, 85, 4, 0)')
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
          // Core
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(190, 85, 4, ${Math.min(op, 1)})`
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${op})`
          ctx.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]
  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay, ease } },
  })

  return (
    <div className="relative w-full h-full flex-1 flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Neural canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial vignette — darkens center to make text float above the graph */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 62% 68% at 50% 50%, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.42) 55%, transparent 100%)',
          ].join(', '),
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6" style={{ maxWidth: '560px', width: '100%' }}>

        {/* Badge */}
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

        {/* Headline */}
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

        {/* Description — one line only */}
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

        {/* CTA */}
        <motion.div
          variants={fadeUp(0.88)}
          initial="hidden"
          animate="visible"
        >
          <CTALink />
        </motion.div>

      </div>
    </div>
  )
}
