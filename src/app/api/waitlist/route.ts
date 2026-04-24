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
  subject: 'ya estás dentro.',
  html: `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>ya estás dentro.</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #111111;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #111111; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px; background: #0a0a0a; border: 1px solid rgba(255,255,255,0.06);">

              <!-- HEADER -->
              <tr>
                <td style="padding: 48px 40px 0;">
                  <p style="font-family: monospace; font-size: 11px; color: #BE5504; letter-spacing: 0.12em; margin: 0 0 28px;">noüs · acceso anticipado</p>
                  <p style="font-family: Georgia, serif; font-size: 44px; color: #ffffff; letter-spacing: -2px; line-height: 1.0; margin: 0;">ya estás</p>
                  <p style="font-family: Georgia, serif; font-size: 44px; color: rgba(255,255,255,0.28); letter-spacing: -2px; line-height: 1.0; margin: 0 0 48px;">dentro.</p>
                </td>
              </tr>

              <!-- DIVIDER -->
              <tr>
                <td style="padding: 0 40px;">
                  <div style="height: 1px; background-color: rgba(255,255,255,0.06);"></div>
                </td>
              </tr>

              <!-- BODY -->
              <tr>
                <td style="padding: 40px 40px 32px;">
                  <p style="font-family: Georgia, serif; font-size: 17px; color: rgba(255,255,255,0.80); line-height: 1.7; margin: 0 0 24px;">
                    te avisamos cuando noüs esté listo.
                  </p>
                  <p style="font-family: Georgia, serif; font-size: 15px; color: rgba(255,255,255,0.42); line-height: 1.8; margin: 0 0 32px;">
                    estamos construyendo algo que no existía: la práctica diaria de la independencia cognitiva en la era de la IA.<br><br>
                    no te vamos a saturar. solo te escribiremos cuando tengamos algo que valga la pena decir.
                  </p>

                  <p style="font-family: monospace; font-size: 10px; color: rgba(255,255,255,0.28); letter-spacing: 0.1em; margin: 0 0 10px;">mientras tanto.</p>
                  <p style="font-family: Georgia, serif; font-size: 14px; color: rgba(255,255,255,0.32); line-height: 1.75; margin: 0;">
                    la próxima vez que vayas a preguntarle algo a una IA, para un momento. inténtalo tú primero. aunque sea 30 segundos. aunque tu respuesta no sea perfecta. ese esfuerzo es exactamente lo que noüs va a entrenar.
                  </p>
                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="padding: 0 40px;">
                  <div style="height: 1px; background-color: rgba(255,255,255,0.06);"></div>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p style="font-family: Georgia, serif; font-size: 15px; color: #BE5504; margin: 0;">piensa por ti mismo.</p>
                      </td>
                      <td align="right">
                        <a href="https://xn--nos-ioa.es" style="font-family: monospace; font-size: 11px; color: rgba(255,255,255,0.35); text-decoration: none; letter-spacing: 0.08em;">noüs.es</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
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