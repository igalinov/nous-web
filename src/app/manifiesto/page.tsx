import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

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
    }}>

      <Nav active="manifiesto" />

      {/* MANIFIESTO */}
      <section style={{
        padding: '80px 40px',
        maxWidth: '640px',
        margin: '0 auto',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--ginger)',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: '48px',
          textAlign: 'center',
        }}>
          manifiesto
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {manifesto.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(18px, 3vw, 24px)',
                lineHeight: '1.35',
                letterSpacing: '-0.2px',
                color: line.accent
                  ? 'var(--ginger)'
                  : line.muted
                  ? 'var(--ink-3)'
                  : 'var(--obsidian)',
                paddingTop: line.spacer ? '32px' : '0',
                paddingBottom: '14px',
                borderBottom: i < manifesto.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              {line.text}
            </p>
          ))}

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 5vw, 40px)',
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

      {/* DIVIDER */}
      <div style={{
        width: '1px',
        height: '80px',
        background: 'var(--border)',
        margin: '0 auto',
      }} />

      {/* CTA */}
      <section id="waitlist" style={{
        padding: '80px 40px 100px',
        textAlign: 'center',
        maxWidth: '640px',
        margin: '0 auto',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--ginger)',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          noüs está en camino
        </p>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(24px, 4vw, 32px)',
          color: 'var(--obsidian)',
          letterSpacing: '-0.5px',
          lineHeight: '1.2',
          marginBottom: '16px',
        }}>
          sé el primero en acceder.
        </h2>

        <p style={{
          fontSize: '16px',
          color: 'var(--ink-3)',
          maxWidth: '400px',
          margin: '0 auto 40px',
          lineHeight: '1.75',
        }}>
          estamos construyendo algo que no existía:
          la práctica diaria de la independencia cognitiva.
        </p>

        <WaitlistForm />
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '24px 40px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--fog-mid)',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '18px',
          color: 'var(--obsidian)',
        }}>
          noüs
        </span>

        <a
          href="https://www.instagram.com/think.nous"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--ginger)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
          }}
        >
          @think.nous
        </a>

        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--ink-3)',
          letterSpacing: '0.06em',
        }}>
          hecho con criterio propio.
        </span>
      </footer>

    </main>
  )
}
