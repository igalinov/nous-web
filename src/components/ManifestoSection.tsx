'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

type LineKind = 'big' | 'accent' | 'muted'

interface Line {
  text: string
  kind: LineKind
  gap?: boolean  // extra space before this line
}

const blocks: Line[][] = [
  // 1 — el diagnóstico
  [
    { text: 'estás dejando de pensar.', kind: 'big' },
    { text: 'no de golpe.', kind: 'muted' },
    { text: 'despacio.', kind: 'muted' },
    { text: 'tan despacio que casi no se nota.', kind: 'muted' },
  ],

  // 2 — la trampa
  [
    { text: 'te dijeron que era eficiencia. productividad. inteligente.', kind: 'muted' },
    { text: 'y lo era.', kind: 'muted' },
    { text: 'nadie te dijo el precio.', kind: 'big', gap: true },
    { text: 'cada vez que delegas un pensamiento, pierdes un poco de lo que tardaste años en construir.', kind: 'muted', gap: true },
  ],

  // 4 — la pregunta que duele
  [
    { text: 'piensa en quien más admiras. criterio propio. ideas bajo presión. cuando habla, vale la pena escuchar.', kind: 'muted' },
    { text: '¿esa persona delega su pensamiento?', kind: 'accent', gap: true },
    { text: 'y tú — ¿en quién te estás convirtiendo?', kind: 'muted' },
  ],

  // 5 — la posición
  [
    { text: 'no dejes que piense por ti.', kind: 'big' },
    { text: 'la IA es la herramienta más poderosa que ha existido. úsala.', kind: 'muted', gap: true },
    { text: 'pero hay una diferencia enorme entre usarla para hacer más y usarla para pensar menos.', kind: 'muted' },
  ],

  // 6 — el futuro
  [
    { text: 'algún día alguien te mirará buscando saber cómo se piensa. cómo se razona. cómo se llega a una conclusión propia.', kind: 'muted' },
    { text: '¿qué van a ver?', kind: 'accent', gap: true },
  ],

  // 7 — la decisión
  [
    { text: 'noüs no es una app.', kind: 'big' },
    { text: 'es la decisión de no rendirte. de que tus ideas sigan siendo tuyas. de que tu criterio tenga nombre propio.', kind: 'muted', gap: true },
    { text: 'siete minutos al día. para seguir siendo tú.', kind: 'accent', gap: true },
  ],
]

const styles: Record<LineKind, React.CSSProperties> = {
  big: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(38px, 6.5vw, 76px)',
    color: 'var(--manifesto-big)',
    letterSpacing: '-0.04em',
    lineHeight: '1.02',
    marginBottom: '24px',
  },
  accent: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(26px, 4vw, 52px)',
    color: '#BE5504',
    letterSpacing: '-0.03em',
    lineHeight: '1.1',
    marginBottom: '18px',
  },
  muted: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(15px, 1.8vw, 19px)',
    color: 'var(--text-muted)',
    letterSpacing: '-0.1px',
    lineHeight: '1.6',
    marginBottom: '8px',
  },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}

const line = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

export default function ManifestoSection() {
  return (
    <section style={{ position: 'relative' }}>

      {/* Bloques — cada uno ocupa un viewport completo */}
      {blocks.map((block, bi) => (
        <div
          key={bi}
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 40px',
          }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            style={{ maxWidth: '640px', margin: '0 auto', width: '100%' }}
          >
            {block.map((l, li) => (
              <motion.p
                key={li}
                variants={line}
                style={{
                  ...styles[l.kind],
                  ...(l.gap ? { paddingTop: '36px' } : {}),
                }}
              >
                {l.text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      ))}

      {/* Cierre */}
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 40px 140px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          style={{ height: '1px', background: 'var(--border-subtle)', transformOrigin: 'center', marginBottom: '60px' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 6.5vw, 72px)',
            color: '#BE5504',
            letterSpacing: '-0.04em',
            lineHeight: '1.0',
          }}
        >
          piensa por ti mismo.
        </motion.p>
      </div>

    </section>
  )
}
