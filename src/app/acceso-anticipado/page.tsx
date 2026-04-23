import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata: Metadata = {
  title: 'acceso anticipado — noüs',
  description: 'Sé el primero en acceder a noüs. La práctica diaria de la independencia cognitiva.',
}

export default function AccesoAnticipado() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'var(--obsidian)',
    }}>

      <Nav active="acceso-anticipado" dark />

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
        <div style={{ maxWidth: '640px', width: '100%' }}>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--ginger)',
            letterSpacing: '0.18em',
            marginBottom: '24px',
          }}>
            noüs está en camino
          </p>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 6vw, 56px)',
            color: '#ffffff',
            letterSpacing: '-1.5px',
            lineHeight: '1.1',
            marginBottom: '20px',
          }}>
            sé el primero en acceder.
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '400px',
            margin: '0 auto 40px',
            lineHeight: '1.75',
            fontFamily: 'var(--font-sans)',
          }}>
            estamos construyendo algo que no existía:
            la práctica diaria de la independencia cognitiva.
          </p>

          <div id="waitlist" style={{ width: '100%' }}>
            <WaitlistForm dark />
          </div>

        </div>
      </section>

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
