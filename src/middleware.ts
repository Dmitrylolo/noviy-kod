import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const LANG_COOKIE = 'nk_lang'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

const handleI18nRouting = createMiddleware(routing)

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Explicit language switch via query param
  const forcedLang = url.searchParams.get('lang')
  if (forcedLang === 'en' || forcedLang === 'ua') {
    url.searchParams.delete('lang')
    url.pathname = forcedLang === 'en' ? '/en' : '/'
    const res = NextResponse.redirect(url)
    res.cookies.set(LANG_COOKIE, forcedLang, { path: '/', maxAge: COOKIE_MAX_AGE, sameSite: 'lax' })
    return res
  }

  return handleI18nRouting(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
