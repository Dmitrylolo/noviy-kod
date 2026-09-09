import { SUPPORTED_LANGS, type Lang } from '@/lib/types'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
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
    default: 'Новий коd_ — Документальний проєкт',
    template: '%s | Новий коd_',
  },
  description:
    'Документальний проєкт про українських військових з творчим минулим, які під час війни продовжують творити і змінюють культурний код країни.',
  keywords: ['документальний фільм', 'Україна', 'військові', 'культура', 'мистецтво', 'war', 'documentary'],
  authors: [{ name: 'Новий коd_' }],
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    alternateLocale: 'en_US',
    url: 'https://newcode.com.ua',
    siteName: 'Новий коd_',
    title: 'Новий коd_ — Документальний проєкт',
    description:
      'Документальний проєкт про українських військових з творчим минулим.',
    images: [
      {
        url: 'https://newcode.com.ua/og-image-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Новий коd_ — Документальний проєкт',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Новий коd_ — Документальний проєкт',
    description: 'Документальний проєкт про українських військових з творчим минулим.',
    images: ['https://newcode.com.ua/og-image-2.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const requestedLocale = await getLocale()
  const messages = await getMessages()
  const locale: Lang = SUPPORTED_LANGS.includes(requestedLocale as Lang) ? (requestedLocale as Lang) : 'ua'
  const htmlLang = locale === 'ua' ? 'uk' : locale

  return (
    <html lang={htmlLang} className={`${oswald.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
