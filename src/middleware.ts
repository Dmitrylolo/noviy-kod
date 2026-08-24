import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const LANG_COOKIE = 'nk_lang'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

/** Returns 'ua' for Ukrainian/Russian browsers, 'en' for everything else */
function detectLang(acceptLanguage: string | null): 'ua' | 'en' {
  if (!acceptLanguage) return 'en'
  const langs = acceptLanguage.split(',').map(l => l.split(';')[0].trim().toLowerCase())
  for (const l of langs) {
    if (l.startsWith('uk') || l.startsWith('ru')) return 'ua'
    if (l !== '*') return 'en'
  }
  return 'en'
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Legacy: /?lang=en → /en, set cookie so future visits stay on EN
  if (url.searchParams.get('lang') === 'en') {
    url.searchParams.delete('lang')
    url.pathname = '/en'
    const res = NextResponse.redirect(url)
    res.cookies.set(LANG_COOKIE, 'en', { path: '/', maxAge: COOKIE_MAX_AGE, sameSite: 'lax' })
    return res
  }

  // Only auto-redirect from the root path
  if (url.pathname !== '/') return NextResponse.next()

  const saved = request.cookies.get(LANG_COOKIE)?.value as 'ua' | 'en' | undefined

  // Respect explicit user preference
  if (saved === 'en') {
    return NextResponse.redirect(new URL('/en', url))
  }
  if (saved === 'ua') {
    return NextResponse.next()
  }

  // First visit — detect from browser language
  const detected = detectLang(request.headers.get('accept-language'))
  const res = detected === 'en'
    ? NextResponse.redirect(new URL('/en', url))
    : NextResponse.next()

  res.cookies.set(LANG_COOKIE, detected, { path: '/', maxAge: COOKIE_MAX_AGE, sameSite: 'lax' })
  return res
}

export const config = {
  matcher: ['/((?!_next|favicon|sitemap|robots|api).*)'],
}
