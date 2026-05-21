import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Redirect /?lang=en to /en
  const url = request.nextUrl.clone()
  if (url.searchParams.get('lang') === 'en') {
    url.searchParams.delete('lang')
    url.pathname = '/en'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon|sitemap|robots|api).*)'],
}
