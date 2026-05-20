'use client'

import { useEffect, useState } from 'react'

export default function CTALink() {
  const [href, setHref] = useState('/acceso-anticipado')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    if (ref) {
      try { sessionStorage.setItem('nous_ref', ref) } catch {}
      setHref(`/acceso-anticipado?ref=${ref}`)
    } else {
      try {
        const stored = sessionStorage.getItem('nous_ref')
        if (stored) setHref(`/acceso-anticipado?ref=${stored}`)
      } catch {}
    }
  }, [])

  return (
    <a href={href} style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--ginger)',
      letterSpacing: '0.08em',
      textDecoration: 'none',
    }}>
      quiero acceso anticipado →
    </a>
  )
}
