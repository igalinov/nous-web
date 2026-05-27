'use client'

import { useState, useEffect, FormEvent } from 'react'


export default function WaitlistForm({ dark }: { dark?: boolean }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [referredBy, setReferredBy] = useState('')
  const [referralCode, setReferralCode] = useState('')
  const [userNumber, setUserNumber] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    if (ref) {
      setReferredBy(ref)
    } else {
      try {
        const stored = sessionStorage.getItem('nous_ref')
        if (stored) setReferredBy(stored)
      } catch {}
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email || state === 'loading') return

    setState('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, referredBy: referredBy || undefined }),
      })

      const data = await res.json()

      if (res.ok) {
        setReferralCode(data.referralCode || '')
        setUserNumber(data.userNumber || 0)
        setState('success')
        try { sessionStorage.removeItem('nous_ref') } catch {}
      } else {
        setState('error')
        setErrorMsg(data.error || 'Algo fue mal. Inténtalo de nuevo.')
      }
    } catch {
      setState('error')
      setErrorMsg('Error de conexión. Inténtalo de nuevo.')
    }
  }

  const copyLink = async () => {
    const url = `${window.location.origin}/acceso-anticipado?ref=${referralCode}`
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  if (state === 'success') {
    const displayUrl = `noüs.es/acceso-anticipado?ref=${referralCode}`

    return (
      <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--ginger)',
          letterSpacing: '0.14em',
          marginBottom: '20px',
        }}>
          ya estás dentro.
        </p>

        {userNumber > 0 && (
          <>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '72px',
              color: 'var(--ginger)',
              letterSpacing: '-4px',
              lineHeight: '1.0',
              margin: '0 0 10px',
            }}>
              {userNumber}
            </p>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '15px',
              color: dark ? 'rgba(255,255,255,0.70)' : 'var(--obsidian)',
              letterSpacing: '-0.2px',
              margin: '0 0 6px',
            }}>
              tu posición en la lista.
            </p>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '13px',
              color: dark ? 'rgba(255,255,255,0.30)' : 'var(--ink-3)',
              letterSpacing: '-0.1px',
              margin: '0 0 32px',
            }}>
              por cada persona que invites, subes 5 posiciones.
            </p>
          </>
        )}

        <div style={{
          height: '1px',
          background: dark ? 'rgba(255,255,255,0.06)' : 'var(--border)',
          marginBottom: '28px',
        }} />

        {referralCode && (
          <>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--ginger)',
              letterSpacing: '0.12em',
              marginBottom: '14px',
            }}>
              comparte tu link.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '16px',
              flexWrap: 'wrap',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: dark ? 'rgba(255,255,255,0.70)' : 'var(--obsidian)',
                letterSpacing: '0.02em',
                background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(10,10,10,0.04)',
                border: `1px solid ${dark ? 'rgba(255,255,255,0.10)' : 'var(--border)'}`,
                borderRadius: '8px',
                padding: '10px 14px',
                margin: 0,
              }}>
                {displayUrl}
              </p>
              <button
                onClick={copyLink}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: copied ? 'rgba(255,255,255,0.40)' : 'var(--ginger)',
                  background: 'transparent',
                  border: `1px solid ${copied ? 'rgba(255,255,255,0.10)' : 'var(--ginger)'}`,
                  borderRadius: '8px',
                  padding: '10px 16px',
                  cursor: 'pointer',
                  letterSpacing: '0.06em',
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap',
                }}
              >
                {copied ? 'copiado.' : 'copiar'}
              </button>
            </div>

            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '14px',
              color: dark ? 'rgba(255,255,255,0.40)' : 'var(--ink-3)',
              letterSpacing: '-0.1px',
              lineHeight: '1.7',
              marginBottom: '32px',
            }}>
              los primeros en entrar prueban la app antes que nadie<br />
              y llevan su número de usuario para siempre en su perfil.<br />
              invita a 3 personas para garantizarlo.
            </p>

            <div style={{
              height: '1px',
              background: dark ? 'rgba(255,255,255,0.06)' : 'var(--border)',
              marginBottom: '24px',
            }} />
          </>
        )}

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: dark ? 'rgba(255,255,255,0.22)' : 'var(--ink-3)',
          lineHeight: '1.6',
          letterSpacing: '0.02em',
        }}>
          si no ves nuestro email, revisa la carpeta de spam.<br />
          somos una startup y a veces llegamos por ahí primero.
        </p>

      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '480px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
          disabled={state === 'loading'}
          style={{
            flex: '1 1 240px',
            minWidth: '220px',
            background: dark ? 'rgba(255,255,255,0.06)' : 'var(--white)',
            border: `1px solid ${dark ? 'rgba(255,255,255,0.12)' : 'var(--border)'}`,
            borderRadius: '10px',
            padding: '14px 20px',
            fontSize: '15px',
            color: dark ? '#ffffff' : 'var(--obsidian)',
            fontFamily: 'var(--font-sans)',
            outline: 'none',
            transition: 'border-color 0.15s',
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--ginger)'}
          onBlur={(e) => e.target.style.borderColor = dark ? 'rgba(255,255,255,0.12)' : 'var(--border)'}
        />
        <button
          type="submit"
          disabled={state === 'loading' || !email}
          style={{
            background: state === 'loading'
              ? 'rgba(255,255,255,0.15)'
              : dark ? 'var(--ginger)' : 'var(--obsidian)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            padding: '14px 24px',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'var(--font-sans)',
            cursor: state === 'loading' ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap',
            transition: 'background 0.15s',
            letterSpacing: '-0.1px',
          }}
        >
          {state === 'loading' ? '...' : 'quiero acceso anticipado'}
        </button>
      </div>

      {state === 'error' && (
        <p style={{
          textAlign: 'center',
          marginTop: '12px',
          fontSize: '13px',
          color: dark ? '#E07070' : '#A32D2D',
          fontFamily: 'var(--font-mono)',
        }}>
          {errorMsg}
        </p>
      )}

      <p style={{
        textAlign: 'center',
        marginTop: '14px',
        fontSize: '12px',
        color: dark ? 'rgba(255,255,255,0.25)' : 'var(--ink-3)',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.04em',
      }}>
        sin spam · sin ruido · solo te avisamos cuando esté listo
      </p>
    </form>
  )
}
