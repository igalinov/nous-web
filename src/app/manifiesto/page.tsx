import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'manifiesto — noüs',
  description: 'Hay personas que piensan. Y hay personas que delegan su pensamiento. La diferencia no es la inteligencia. Es la práctica.',
}

const manifesto = [
  { text: 'hay personas que piensan.', muted: false },
  { text: 'y hay personas que delegan su pensamiento.', muted: true },
  { text: 'la diferencia no es la inteligencia.', muted: true },
  { text: 'es la práctica.', muted: false },
  { text: 'el cerebro es un músculo.', muted: false, spacer: true },
  { text: 'el único que no duele cuando se atrofia.', muted: true },
  { text: 'el único cuya pérdida no se nota', muted: true },
  { text: 'hasta que ya es demasiado tarde.', muted: true },
  { text: 'vivimos en la era de la delegación inteligente.', muted: false, spacer: true },
  { text: 'delegamos búsquedas.', muted: true },
  { text: 'delegamos resúmenes.', muted: true },
  { text: 'delegamos decisiones.', muted: true },
  { text: 'delegamos argumentos.', muted: true },
  { text: '¿hasta dónde estás dispuesto a delegar?', muted: false, accent: true },
  { text: 'no somos anti inteligencia artificial.', muted: false, spacer: true },
  { text: 'somos pro pensamiento propio.', muted: true },
  { text: 'la ia es una herramienta extraordinaria.', muted: true },
  { text: 'pero una herramienta no puede pensar por ti.', muted: false },
  { text: 'solo tú puedes hacer eso.', muted: true },
  { text: 'si no lo pierdes por el camino.', muted: false, accent: true },
  { text: 'noüs no es una app.', muted: false, spacer: true },
  { text: 'es la decisión de no rendirte.', muted: true },
  { text: 'de que tus ideas sean tuyas.', muted: true },
  { text: 'de que tu criterio tenga nombre propio.', muted: true },
  { text: 'de que cuando alguien te pregunte tu opinión,', muted: true },
  { text: 'tengas una.', muted: false },
  { text: 'siete minutos al día.', muted: false, spacer: true },
  { text: 'no para ser más listo.', muted: true },
  { text: 'para seguir siendo tú.', muted: true },
]

export default function Manifiesto() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'var(--obsidian)',
    }}>

      <Nav active="manifiesto" dark />

      {/* MANIFIESTO */}
      <section className="section-pad" style={{
        maxWidth: '640px',
        margin: '0 auto',
        width: '100%',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {manifesto.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(17px, 3vw, 24px)',
                lineHeight: '1.35',
                letterSpacing: '-0.2px',
                color: line.accent
                  ? 'var(--ginger)'
                  : line.muted
                  ? 'rgba(255,255,255,0.30)'
                  : 'rgba(255,255,255,0.85)',
                paddingTop: line.spacer ? '32px' : '0',
                paddingBottom: '14px',
                borderBottom: i < manifesto.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              {line.text}
            </p>
          ))}

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px, 5vw, 40px)',
            color: 'var(--ginger)',
            letterSpacing: '-1px',
            lineHeight: '1.1',
            paddingTop: '40px',
            textAlign: 'center',
          }}>
            piensa por ti mismo.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-pad" style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <a
          href="https://www.instagram.com/think.nous"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.50)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
          }}
        >
          @think.nous
        </a>

        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.50)',
          letterSpacing: '0.06em',
        }}>
          hecho con criterio propio.
        </span>
      </footer>

    </main>
  )
}
