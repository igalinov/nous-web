import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'noüs — piensa por ti mismo',
  description: 'La práctica diaria de seguir pensando por ti mismo en la era de la inteligencia artificial. Siete minutos. Cada día. Para que tus ideas sigan siendo tuyas.',
  metadataBase: new URL('https://noüs.es'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'noüs — piensa por ti mismo',
    description: 'La práctica diaria de la independencia cognitiva en la era de la IA.',
    url: 'https://noüs.es',
    siteName: 'noüs',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'noüs — piensa por ti mismo',
    description: 'La práctica diaria de la independencia cognitiva en la era de la IA.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
