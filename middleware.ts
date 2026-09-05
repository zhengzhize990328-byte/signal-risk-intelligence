import { NextRequest, NextResponse } from 'next/server'

const protectedPath = /^\/(zh|en)\/dashboard(?:\/|$)/

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const matchesLocaleDashboard = protectedPath.test(pathname)
  const matchesLegacyDashboard = pathname === '/dashboard' || pathname.startsWith('/dashboard/')
  if (!matchesLocaleDashboard && !matchesLegacyDashboard) return NextResponse.next()
  if (request.cookies.get('signal-demo-auth')?.value === '1') return NextResponse.next()
  const locale = pathname.startsWith('/en') ? 'en' : 'zh'
  const loginUrl = request.nextUrl.clone()
  loginUrl.pathname = `/${locale}/login`
  loginUrl.search = ''
  loginUrl.searchParams.set('returnTo', `${pathname}${request.nextUrl.search}`)
  return NextResponse.redirect(loginUrl)
}

export const config = { matcher: ['/dashboard/:path*', '/zh/dashboard/:path*', '/en/dashboard/:path*'] }
