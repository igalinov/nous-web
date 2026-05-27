'use client'

import { motion } from 'framer-motion'

const manifesto = [
  // BLOQUE 1 — el diagnóstico
  { text: 'hay algo que nadie te ha dicho.', muted: false },
  { text: 'o quizás sí te lo han dicho.', muted: true },
  { text: 'pero no lo has querido escuchar.', muted: true },

  { text: 'estás dejando de pensar.', muted: false, spacer: true },
  { text: 'no de golpe.', muted: true },
  { text: 'despacio.', muted: true },
  { text: 'tan despacio que casi no se nota.', muted: true },

  // BLOQUE 2 — el momento reconocible
  { text: 'lo notaste aquella vez que tardaste un segundo de más', muted: false, spacer: true },
  { text: 'en recordar cuál era tu opinión.', muted: true },
  { text: 'en una sala con personas mirándote.', muted: true },

  { text: 'lo notaste cuando alguien leyó algo que escribiste', muted: false, spacer: true },
  { text: 'y te dijo: esto no suena a ti.', muted: false, accent: true },
  { text: 'y tenía razón.', muted: true },

  { text: 'lo notaste cuando te preguntaron tu criterio sobre algo importante', muted: false, spacer: true },
  { text: 'y antes de responder', muted: true },
  { text: 'tuviste que recordar qué había pensado la IA al respecto.', muted: true },

  // BLOQUE 3 — la trampa
  { text: 'no es culpa tuya.', muted: false, spacer: true },
  { text: 'te dijeron que era eficiencia.', muted: true },
  { text: 'te dijeron que era productividad.', muted: true },
  { text: 'te dijeron que era inteligente.', muted: true },
  { text: 'y lo era.', muted: false },

  { text: 'pero nadie te dijo el precio.', muted: false, spacer: true },

  { text: 'cada vez que delegas un pensamiento', muted: true },
  { text: 'te ahorras un esfuerzo.', muted: true },
  { text: 'y pierdes un poco de algo', muted: true },
  { text: 'que tardaste años en construir.', muted: false },

  // BLOQUE 4 — la pregunta que duele
  { text: 'piensa en la persona que más admiras intelectualmente.', muted: false, spacer: true },
  { text: 'la que tiene criterio propio.', muted: true },
  { text: 'la que defiende sus ideas bajo presión.', muted: true },
  { text: 'la que cuando habla, vale la pena escuchar.', muted: true },

  { text: '¿esa persona delega su pensamiento?', muted: false, accent: true },

  { text: 'y tú — ¿en quién te estás convirtiendo?', muted: false, spacer: true },

  // BLOQUE 5 — la posición de noüs
  { text: 'no somos anti inteligencia artificial.', muted: false, spacer: true },
  { text: 'la IA es la herramienta más poderosa que ha existido.', muted: true },
  { text: 'úsala.', muted: false },

  { text: 'pero no dejes que piense por ti.', muted: false, spacer: true },
  { text: 'hay una diferencia enorme', muted: true },
  { text: 'entre usar la IA para hacer más', muted: true },
  { text: 'y usarla para pensar menos.', muted: true },

  { text: 'el cerebro es un músculo.', muted: false, spacer: true },
  { text: 'el único que no duele cuando se atrofia.', muted: true },
  { text: 'el único cuya pérdida no se nota', muted: true },
  { text: 'hasta que alguien te pregunta tu opinión', muted: true },
  { text: 'y tardas un segundo de más en encontrarla.', muted: false },

  // BLOQUE 6 — el futuro
  { text: 'algún día alguien te mirará', muted: false, spacer: true },
  { text: 'buscando saber cómo se piensa.', muted: true },
  { text: 'cómo se razona.', muted: true },
  { text: 'cómo se llega a una conclusión propia.', muted: true },

  { text: '¿qué van a ver?', muted: false, accent: true },

  // BLOQUE 7 — la decisión
  { text: 'noüs no es una app.', muted: false, spacer: true },
  { text: 'es la decisión de no rendirte.', muted: true },
  { text: 'de que tus ideas sigan siendo tuyas.', muted: true },
  { text: 'de que tu criterio tenga nombre propio.', muted: true },
  { text: 'de que cuando alguien te pregunte qué piensas,', muted: true },
  { text: 'lo sepas.', muted: false },
  { text: 'sin ayuda.', muted: false },

  { text: 'siete minutos al día.', muted: false, spacer: true },
  { text: 'no para ser más listo.', muted: true },
  { text: 'para seguir siendo tú.', muted: true },
]

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number]

export default function ManifestoSection() {
  return (
    <section
      style={{
        background: 'transparent',
        paddingBottom: '120px',
      }}
    >
      {/* Section header */}
      <div style={{
        maxWidth: '640px',
        margin: '0 auto',
        padding: '80px 40px 64px',
      }}>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '0px 0px -40px 0px' }}
          transition={{ duration: 0.8, ease }}
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.08)',
            transformOrigin: 'left',
            marginBottom: '40px',
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: '#BE5504',
            letterSpacing: '0.16em',
          }}
        >
          manifiesto
        </motion.p>
      </div>

      {/* Manifesto lines */}
      <div style={{
        maxWidth: '640px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {manifesto.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -30px 0px' }}
            transition={{ duration: 0.55, ease }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(17px, 3vw, 24px)',
              lineHeight: '1.35',
              letterSpacing: '-0.2px',
              color: (line as { accent?: boolean }).accent
                ? '#BE5504'
                : line.muted
                  ? 'rgba(255,255,255,0.24)'
                  : 'rgba(255,255,255,0.88)',
              paddingTop: (line as { spacer?: boolean }).spacer ? '40px' : '0',
              paddingBottom: '16px',
              borderBottom: i < manifesto.length - 1
                ? '1px solid rgba(255,255,255,0.05)'
                : 'none',
            }}
          >
            {line.text}
          </motion.p>
        ))}
      </div>

      {/* Closing line */}
      <div style={{
        maxWidth: '640px',
        margin: '64px auto 0',
        padding: '0 40px',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.06)',
            transformOrigin: 'center',
            marginBottom: '56px',
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 7vw, 72px)',
            color: '#BE5504',
            letterSpacing: '-2px',
            lineHeight: '1.0',
          }}
        >
          piensa por ti mismo.
        </motion.p>
      </div>
    </section>
  )
}
