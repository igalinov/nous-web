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

      <section className="acceso-pad" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
      }}>
        <div style={{ maxWidth: '640px', width: '100%' }}>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--ginger)',
            letterSpacing: '0.12em',
            marginBottom: '20px',
          }}>
            sé el primero en acceder.
          </p>

          <h1 className="acceso-h1" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 8vw, 80px)',
            color: '#ffffff',
            lineHeight: '1.0',
            marginBottom: '24px',
          }}>
            está en camino.
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 2vw, 17px)',
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
