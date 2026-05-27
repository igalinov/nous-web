import ThemeToggle from '@/components/ThemeToggle'

export default function Nav() {
  return (
    <nav className="nav-wrap" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--nav-border)',
      position: 'sticky',
      top: 0,
      background: 'var(--nav-bg-color)',
      backdropFilter: 'blur(12px)',
      zIndex: 100,
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img
          src="/logo.svg"
          alt="noüs"
          className="nav-logo"
          style={{ display: 'block' }}
        />
      </a>

      <div className="nav-links">
        <a href="/#manifiesto" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--nav-link)',
          letterSpacing: '0.1em',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}>
          manifiesto
        </a>
        <a href="/#acceso-anticipado" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--nav-link)',
          letterSpacing: '0.1em',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
        }}>
          acceso anticipado
        </a>
        <ThemeToggle />
      </div>
    </nav>
  )
}
