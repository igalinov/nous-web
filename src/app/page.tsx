import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>

      <Nav />

      {/* HERO */}
      <section style={{
        flex: 1,
        padding: '140px 40px 120px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--ginger)',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: '28px',
        }}>
          disponible pronto
        </p>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(64px, 11vw, 108px)',
          color: 'var(--obsidian)',
          letterSpacing: '-3px',
          lineHeight: '1.0',
          marginBottom: '32px',
        }}>
          tu mente.<br />sin niebla.
        </h1>

        <p style={{
          fontSize: '20px',
          color: 'var(--ink-3)',
          maxWidth: '480px',
          margin: '0 auto 56px',
          lineHeight: '1.75',
        }}>
          la práctica diaria de seguir pensando por ti mismo
          en la era de la inteligencia artificial.
        </p>

        <div id="waitlist">
          <WaitlistForm />
        </div>
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
