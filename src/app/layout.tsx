import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/context/ThemeContext'
import PostHogProvider from '@/components/PostHogProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'noüs',
  description: 'La práctica diaria de seguir pensando por ti mismo en la era de la inteligencia artificial. Siete minutos. Cada día. Para que tus ideas sigan siendo tuyas.',
  metadataBase: new URL('https://noüs.es'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'noüs',
    description: 'La práctica diaria de la independencia cognitiva en la era de la IA.',
    url: 'https://noüs.es',
    siteName: 'noüs',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'noüs',
    description: 'La práctica diaria de la independencia cognitiva en la era de la IA.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Prevent flash of wrong theme before React hydrates */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('nous-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);})();` }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <PostHogProvider />
        <Analytics />
      </body>
    </html>
  )
}
