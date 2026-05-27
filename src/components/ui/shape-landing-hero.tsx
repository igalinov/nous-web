'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import CTALink from '@/components/CTALink'

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-white/[0.05]',
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'border border-white/[0.06]',
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric() {
  const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, delay, ease },
    },
  })

  return (
    <div className="relative flex-1 w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={-15}
          gradient="from-[#BE5504]/[0.10]"
          className="-top-[5%] left-[-15%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={15}
          gradient="from-white/[0.05]"
          className="top-[10%] right-[-12%]"
        />
        <ElegantShape
          delay={0.7}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#BE5504]/[0.07]"
          className="bottom-[20%] left-[5%]"
        />
        <ElegantShape
          delay={0.9}
          width={200}
          height={60}
          rotate={20}
          gradient="from-white/[0.04]"
          className="bottom-[30%] right-[10%]"
        />
        <ElegantShape
          delay={1.1}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#BE5504]/[0.06]"
          className="top-[40%] left-[25%]"
        />
      </div>

      {/* Soft radial overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-5" style={{ maxWidth: '640px', width: '100%' }}>

        {/* Badge */}
        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 mb-10"
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
          variants={fadeUp(0.65)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-serif)',
            letterSpacing: '-3px',
            margin: '0 0 40px',
          }}
          className="text-[clamp(42px,8.5vw,92px)] leading-[1.02]"
        >
          <span className="block text-white">delegar es fácil.</span>
          <span className="block text-white/30">pensar, cada vez menos.</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={fadeUp(0.8)}
          initial="hidden"
          animate="visible"
          className="h-px bg-white/[0.06] mb-10"
        />

        {/* Eyebrow */}
        <motion.p
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: '#BE5504',
            letterSpacing: '0.12em',
            marginBottom: '20px',
          }}
        >
          ¿qué es noüs?
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp(1.0)}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-serif)',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: '1.4',
            letterSpacing: '-0.3px',
            marginBottom: '36px',
          }}
          className="text-[clamp(18px,2.8vw,24px)]"
        >
          una app para que tu criterio<br />siga siendo tuyo.<br />
          <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.75em' }}>
            siete minutos al día. cada día.
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp(1.1)}
          initial="hidden"
          animate="visible"
        >
          <CTALink />
        </motion.div>

      </div>
    </div>
  )
}
