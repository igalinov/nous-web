'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/context/ThemeContext'

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

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const themeRef = useRef(theme)

  useEffect(() => {
    themeRef.current = theme
  }, [theme])

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

    const N = 100
    const particles: Particle[] = []
    const pool: Array<Particle['type']> = [
      'ginger', 'ginger', 'ginger',
      'bright', 'bright', 'bright', 'bright',
      'dim', 'dim', 'dim', 'dim', 'dim', 'dim',
    ]

    for (let i = 0; i < N; i++) {
      const type = pool[Math.floor(Math.random() * pool.length)]
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: type === 'ginger'
          ? Math.random() * 2.5 + 2
          : type === 'bright'
            ? Math.random() * 1.5 + 0.8
            : Math.random() * 1 + 0.4,
        baseOpacity: type === 'ginger' ? 0.95 : type === 'bright' ? 0.40 : 0.16,
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

      // Leer el tema actual desde la ref para no reiniciar la animación
      const isLight = themeRef.current === 'light'

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

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
            ctx.strokeStyle = `rgba(190, 85, 4, ${strength * (isLight ? 0.25 : 0.35)})`
            ctx.lineWidth = 0.8
          } else {
            ctx.strokeStyle = isLight
              ? `rgba(10, 10, 10, ${strength * 0.06})`
              : `rgba(255, 255, 255, ${strength * 0.08})`
            ctx.lineWidth = 0.4
          }
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }

      for (const p of particles) {
        const pulse = Math.sin(t + p.phase) * 0.25 + 0.75
        const op = p.baseOpacity * pulse
        if (p.type === 'ginger') {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5)
          glow.addColorStop(0, `rgba(190, 85, 4, ${op * 0.4})`)
          glow.addColorStop(1, 'rgba(190, 85, 4, 0)')
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(190, 85, 4, ${Math.min(op, 1)})`
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = isLight
            ? `rgba(10, 10, 10, ${op})`
            : `rgba(255, 255, 255, ${op})`
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

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
