'use client'

import { useState, FormEvent } from 'react'

export default function WaitlistForm() {
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
      <div style={{
        maxWidth: '480px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--ginger)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          ya estás dentro
        </p>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '22px',
          color: 'var(--obsidian)',
          letterSpacing: '-0.3px',
          lineHeight: '1.3',
          marginBottom: '16px',
        }}>
          te avisamos cuando noüs esté listo.
        </p>
        <p style={{
          fontSize: '14px',
          color: 'var(--ink-3)',
          lineHeight: '1.7',
        }}>
          mientras tanto, empieza a notar cuántas veces al día
          alguien — o algo — piensa por ti.
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
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '14px 20px',
            fontSize: '15px',
            color: 'var(--obsidian)',
            fontFamily: 'var(--font-sans)',
            outline: 'none',
            transition: 'border-color 0.15s',
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--ginger)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
        />
        <button
          type="submit"
          disabled={state === 'loading' || !email}
          style={{
            background: state === 'loading' ? 'var(--ink-3)' : 'var(--obsidian)',
            color: 'var(--white)',
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
          color: '#A32D2D',
          fontFamily: 'var(--font-mono)',
        }}>
          {message}
        </p>
      )}

      <p style={{
        textAlign: 'center',
        marginTop: '14px',
        fontSize: '12px',
        color: 'var(--ink-3)',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.04em',
      }}>
        sin spam · sin ruido · solo te avisamos cuando esté listo
      </p>
    </form>
  )
}
