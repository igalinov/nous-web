export default function Nav({ active, dark }: { active?: 'manifiesto' | 'acceso-anticipado'; dark?: boolean }) {
  return (
    <nav style={{
      padding: '4px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : 'var(--border)'}`,
      position: 'sticky',
      top: 0,
      background: dark ? 'rgba(10,10,10,0.97)' : 'rgba(245,244,240,0.95)',
      backdropFilter: 'blur(12px)',
      zIndex: 100,
    }}>
      <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img
          src="/logo.svg"
          alt="noüs"
          height={28}
          style={{
            filter: dark ? 'brightness(0) invert(1)' : 'none',
            display: 'block',
          }}
        />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <a href="/manifiesto" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: dark
            ? (active === 'manifiesto' ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.40)')
            : (active === 'manifiesto' ? 'var(--obsidian)' : 'var(--ink-3)'),
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}>
          manifiesto
        </a>
        <a href="/acceso-anticipado" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: dark
            ? (active === 'acceso-anticipado' ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.40)')
            : (active === 'acceso-anticipado' ? 'var(--obsidian)' : 'var(--ink-3)'),
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
