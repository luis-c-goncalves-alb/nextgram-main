'use server'

import { cookies } from "next/headers"

export async function deleteInfoCookie() {
  'use server'

  const cookieStore = cookies()
  cookieStore.delete('info')
}
