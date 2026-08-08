import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl

  // Only run this middleware for the root path
  if (pathname !== '/') return NextResponse.next()

  // Allow the loading page itself to load
  const hasCookie = req.cookies.get('kurogami_shown_loading')
  if (!hasCookie) {
    const url = req.nextUrl.clone()
    url.pathname = '/loading'
    url.search = `?to=${encodeURIComponent(pathname + search)}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
