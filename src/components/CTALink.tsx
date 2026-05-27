'use client'

import { useEffect, useState } from 'react'

export default function CTALink() {
  const [href, setHref] = useState('#acceso-anticipado')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    if (ref) {
      try { sessionStorage.setItem('nous_ref', ref) } catch {}
    }
    // Always scroll to the section — ref is preserved via URL or sessionStorage
    setHref('#acceso-anticipado')
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
