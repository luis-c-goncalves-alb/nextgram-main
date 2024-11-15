import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    //  console.log("REQUEST", request);
    const routePathname = request.nextUrl.pathname
    console.log("PATHNAME", routePathname);

    const nextURLFromHeaders = request.headers.get("next-url")
    console.log("NEXT-URL", nextURLFromHeaders);

    //ADD NEW HEADERS
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("pathname", routePathname)

    // const response = NextResponse.next();
    // response.headers.set('pathname', routePathname);
    // return response;    

    //if nextURLFromHeaders é porque vem da for-you, se for null foi
    // refresh ou deep linking
    if(nextURLFromHeaders === null){
      const response = NextResponse.redirect(new URL(`/for-you?info=${routePathname}`, request.url))
      //  response.headers.set('pathname', routePathname)
      return response
    }

    //TODO: eu acho que isto é que está mal, porque não vai entrar aqui
    // return NextResponse.next({
    //     request: {
    //       headers: requestHeaders,
    //     },
    //   })    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/photos/:id*',
}