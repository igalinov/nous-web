import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'var(--obsidian)',
    }}>

      <Nav dark />

      {/* HERO */}
      <section style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '32px 40px',
        width: '100%',
      }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--ginger)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            agudeza · criterio · consistencia
          </p>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(52px, 8.5vw, 92px)',
            color: '#ffffff',
            letterSpacing: '-3px',
            lineHeight: '1.0',
            marginBottom: '20px',
          }}>
            tu mente.<br />sin niebla.
          </h1>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '24px',
            flexWrap: 'wrap',
          }}>
            {(['7 min · diario', '4 áreas cognitivas', 'score 0 — 100'] as const).map((stat, i, arr) => (
              <span key={stat} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.08em',
                }}>
                  {stat}
                </span>
                {i < arr.length - 1 && (
                  <span style={{
                    width: '1px',
                    height: '10px',
                    background: 'rgba(255,255,255,0.12)',
                    display: 'inline-block',
                  }} />
                )}
              </span>
            ))}
          </div>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '460px',
            margin: '0 auto 32px',
            lineHeight: '1.7',
            fontFamily: 'var(--font-sans)',
          }}>
            la práctica diaria de seguir pensando por ti mismo
            en la era de la inteligencia artificial.
          </p>

          <div id="waitlist" style={{ width: '100%' }}>
            <WaitlistForm dark />
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '16px 40px',
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
          color: 'var(--ginger)',
          letterSpacing: '0.06em',
        }}>
          hecho con criterio propio.
        </span>
      </footer>

    </main>
  )
}
