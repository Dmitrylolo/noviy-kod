import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://newcode.com.ua'),
  title: {
    default: 'Новий код — Документальний проєкт',
    template: '%s | Новий код',
  },
  description:
    'Документальний проєкт про українських військових з творчим минулим, які під час війни продовжують творити і змінюють культурний код країни.',
  keywords: ['документальний фільм', 'Україна', 'військові', 'культура', 'мистецтво', 'war', 'documentary'],
  authors: [{ name: 'Новий код' }],
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    alternateLocale: 'en_US',
    url: 'https://newcode.com.ua',
    siteName: 'Новий код',
    title: 'Новий код — Документальний проєкт',
    description:
      'Документальний проєкт про українських військових з творчим минулим.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Новий код',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Новий код — Документальний проєкт',
    description: 'Документальний проєкт про українських військових з творчим минулим.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
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
    <html lang="uk" className={`${oswald.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
