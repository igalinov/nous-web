import Nav from '@/components/Nav'

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
      <section className="page-pad" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
      }}>
        <div style={{ maxWidth: '640px', width: '100%' }}>

          <h1 className="hero-h1" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(42px, 8.5vw, 92px)',
            lineHeight: '1.02',
            margin: '0 0 40px',
          }}>
            <span style={{ display: 'block', color: '#ffffff' }}>
              delegar es fácil.
            </span>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.32)' }}>
              pensar, cada vez menos.
            </span>
          </h1>

          <div style={{
            height: '1px',
            background: 'rgba(255,255,255,0.06)',
            marginBottom: '40px',
          }} />

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--ginger)',
            letterSpacing: '0.12em',
            marginBottom: '20px',
          }}>
            ¿qué es noüs?
          </p>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(18px, 2.8vw, 24px)',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: '1.4',
            letterSpacing: '-0.3px',
            marginBottom: '32px',
          }}>
            una app para que tu criterio<br />
            siga siendo tuyo.<br />
            siete minutos al día. cada día.
          </p>

          <a href="/acceso-anticipado" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--ginger)',
            letterSpacing: '0.08em',
            textDecoration: 'none',
          }}>
            quiero acceso anticipado →
          </a>

        </div>
      </section>

    </main>
  )
}
