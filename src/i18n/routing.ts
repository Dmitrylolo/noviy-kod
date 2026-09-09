import { SUPPORTED_LANGS } from '@/lib/types'
import { defineRouting } from 'next-intl/routing'

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export const routing = defineRouting({
  locales: SUPPORTED_LANGS,
  defaultLocale: 'ua',
  localePrefix: 'as-needed',
  localeCookie: {
    name: 'nk_lang',
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
    path: '/',
  },
  alternateLinks: false,
})

export type AppLocale = (typeof routing.locales)[number]
