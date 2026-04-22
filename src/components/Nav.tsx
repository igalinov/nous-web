export default function Nav({ active }: { active?: 'manifiesto' }) {
  return (
    <nav style={{
      padding: '4px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      background: 'rgba(245,244,240,0.95)',
      backdropFilter: 'blur(12px)',
      zIndex: 100,
    }}>
      <a href="/" style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '48px',
        letterSpacing: '-0.5px',
        color: 'var(--obsidian)',
        textDecoration: 'none',
      }}>
        noüs
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <a href="/manifiesto" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: active === 'manifiesto' ? 'var(--obsidian)' : 'var(--ink-3)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          manifiesto
        </a>
        <a href="#waitlist" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--ginger)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          acceso anticipado
        </a>
      </div>
    </nav>
  )
}
