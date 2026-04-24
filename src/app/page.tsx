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
        <div style={{ maxWidth: '840px', width: '100%' }}>

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

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(17px, 2.5vw, 24px)',
            color: 'var(--ginger)',
            letterSpacing: '-0.3px',
            lineHeight: '1.3',
          }}>
            siete minutos al día. para seguir siendo tú.
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
      </footer>

    </main>
  )
}
