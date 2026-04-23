import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

const welcomeEmail = (email: string) => ({
  from: process.env.RESEND_FROM_EMAIL!,
  to: email,
  subject: 'Ya estás dentro.',
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body style="font-family: Georgia, serif; background-color: #f5f4f0; color: #0a0a0a; margin: 0; padding: 40px 20px;">
      <div style="max-width: 520px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden;">
        <div style="background: #0a0a0a; padding: 40px;">
          <p style="font-family: monospace; font-size: 11px; color: #BE5504; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 16px;">noüs · lista de espera</p>
          <h1 style="font-family: Georgia, serif; font-size: 36px; color: #ffffff; letter-spacing: -1px; line-height: 1.1; margin: 0;">Ya estás<br>dentro.</h1>
        </div>
        <div style="padding: 40px;">
          <p style="font-size: 15px; color: #555; line-height: 1.75; margin: 0 0 24px;">
            Gracias por apuntarte.<br><br>
            Estamos construyendo noüs — la práctica diaria de la independencia cognitiva en la era de la IA.<br><br>
            No te vamos a saturar. Solo te escribiremos cuando tengamos algo que valga la pena decir. Y cuando noüs esté listo para ti.
          </p>
          <div style="background: #f5f4f0; border-radius: 12px; padding: 24px; margin: 0 0 24px;">
            <p style="font-family: monospace; font-size: 10px; color: #BE5504; letter-spacing: 0.12em; text-transform: uppercase; margin: 0 0 12px;">mientras tanto, un ejercicio</p>
            <p style="font-family: Georgia, serif; font-size: 16px; color: #0a0a0a; line-height: 1.5; margin: 0;">La próxima vez que vayas a preguntarle algo a una IA, para un momento. Inténtalo tú primero. Aunque sea durante 30 segundos. Aunque tu respuesta no sea perfecta.</p>
          </div>
          <p style="font-size: 14px; color: #999; line-height: 1.7; margin: 0 0 32px;">Ese esfuerzo es exactamente lo que noüs va a entrenar.</p>
          <p style="font-size: 14px; color: #0a0a0a; margin: 0;">— el equipo de noüs</p>
        </div>
        <div style="padding: 20px 40px; border-top: 1px solid rgba(10,10,10,0.09);">
          <p style="font-family: Georgia, serif; font-size: 16px; color: #0a0a0a; margin: 0; display: inline;">noüs</p>
          <a href="https://xn--nos-ioa.es" style="font-family: monospace; font-size: 11px; color: #BE5504; text-decoration: none; letter-spacing: 0.08em; float: right;">noüs.es</a>
        </div>
      </div>
    </body>
    </html>
  `,
})

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    const normalizedEmail = email.toLowerCase().trim()

    // Fix 406: use maybeSingle() instead of single() to avoid error when no row found
    const { data: existing } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', normalizedEmail)
      .maybeSingle()

    if (existing) {
      return NextResponse.json({ message: 'Ya estás en la lista.' }, { status: 200 })
    }

    // Insert into Supabase
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{
        email: normalizedEmail,
        created_at: new Date().toISOString(),
        source: 'noüs.es',
      }])

    if (dbError) {
      console.error('Supabase insert error:', dbError)
      throw dbError
    }

    // Send welcome email via Resend
    const { error: emailError } = await resend.emails.send(welcomeEmail(normalizedEmail))

    if (emailError) {
      console.error('Resend error:', JSON.stringify(emailError))
      // Don't fail the request — user is registered even if email fails
    }

    return NextResponse.json({ message: 'Bienvenido.' }, { status: 200 })

  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json({ error: 'Error interno. Inténtalo de nuevo.' }, { status: 500 })
  }
}