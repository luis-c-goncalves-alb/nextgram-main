import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const requestedPath = request.nextUrl.pathname

  if (requestedPath.startsWith('/photos')) {
    const referer = request.headers.get('referer')
    
    if (referer === null || referer === request.nextUrl.href) {
      // it's a deeplink
      
      const hasInfoSearchParam = !!request.nextUrl.searchParams.get('info')

      if (hasInfoSearchParam) {
        console.log('entrou')
        return NextResponse.next()
      }

      // clone url
      const url = request.nextUrl.clone()

      // manipulate pathname
      url.pathname = '/for-you'

      // add info query string parameter with info path
      url.searchParams.set('info', request.nextUrl.pathname)

      return NextResponse.redirect(url)
    }
  }
}

export const config = {
  matcher: ['/((?!api|assets|_next/static|_next/image|favicon.ico).*)'],
}