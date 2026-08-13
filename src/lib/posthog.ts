import posthog from 'posthog-js'

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com'

let initialized = false

// Nunca lanza — sin NEXT_PUBLIC_POSTHOG_KEY (no hay cuenta PostHog todavía)
// se degrada a no-op silencioso, sin bloquear el render ni el build.
export function initPostHog(): void {
  if (initialized || typeof window === 'undefined' || !KEY) return
  try {
    posthog.init(KEY, {
      api_host: HOST,
      capture_pageview: true,
      autocapture: true,
      person_profiles: 'identified_only',
    })
    initialized = true
  } catch (err) {
    console.warn('[posthog] init falló (no bloqueante)', err)
  }
}

export function capture(event: string, properties?: Record<string, unknown>): void {
  if (!initialized) return
  try {
    posthog.capture(event, properties)
  } catch {
    // silencioso — la analítica nunca debe romper la experiencia
  }
}
