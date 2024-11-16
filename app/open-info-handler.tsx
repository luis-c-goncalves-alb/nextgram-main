'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function OpenInfoHandler() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    // current url has info query string parameter?
    const infoPath = searchParams.get('info')
    if (!infoPath) {
      return
    }

    // clone search params and remove info query string parameter
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.delete('info')

    // replace the current url to remove the search parameter
    router.replace(`${pathname}?${newSearchParams}`)

    // allow previous replace to take place before pushing new route
    setTimeout(() => router.push(infoPath), 100)
  }, [pathname, searchParams])
  
  return null
}