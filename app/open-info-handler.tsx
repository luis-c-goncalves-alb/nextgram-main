'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { deleteInfoCookie } from "./actions"

export function OpenInfoHandler({url}:{url:string | undefined}) {
  const router = useRouter()
  // const pathname = usePathname()
  // const searchParams = useSearchParams()
  // const [infoPath, setInfoPath] = useState<string | null>(null)
  
  // useEffect(() => {
  //   // current url has info query string parameter?
  //   const qsInfo = searchParams.get('info')
  //   if (qsInfo && infoPath) {
  //     return
  //   }

  //   if (!qsInfo && infoPath) {
  //     router.push('')
  //     return
  //   }

  //   // clone search params and remove info query string parameter
  //   const newSearchParams = new URLSearchParams(searchParams)
  //   newSearchParams.delete('info')

  //   // replace the current url to remove the search parameter
  //   router.replace(`${pathname}?${newSearchParams}`)

  //   // save info url in state 
  //   setInfoPath(qsInfo)
  // }, [pathname, searchParams])

  // useEffect(() => {
  //   if (!infoPath) {
  //     return
  //   }

  //   // navigate to info
  //   router.push(infoPath)
  // }, [infoPath])

  useEffect(() => {
    if (url) {
      deleteInfoCookie()
      router.push(url)
    }
  }, [url])
  
  return null
}