'use client'

import { useState, FormEvent } from 'react'

export default function WaitlistForm({ dark }: { dark?: boolean }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email || state === 'loading') return

    setState('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setState('success')
        setMessage(data.message || 'Bienvenido.')
      } else {
        setState('error')
        setMessage(data.error || 'Algo fue mal. Inténtalo de nuevo.')
      }
    } catch {
      setState('error')
      setMessage('Error de conexión. Inténtalo de nuevo.')
    }
  }

  if (state === 'success') {
    return (
      <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--ginger)',
          letterSpacing: '0.14em',
          marginBottom: '16px',
        }}>
          ya estás dentro.
        </p>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '22px',
          color: dark ? '#ffffff' : 'var(--obsidian)',
          letterSpacing: '-0.3px',
          lineHeight: '1.3',
          marginBottom: '16px',
        }}>
          te avisamos cuando noüs esté listo.
        </p>
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
          {message}
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
