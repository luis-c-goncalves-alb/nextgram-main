"use client"
import Link from 'next/link';

export default function Deeplinking() {
  localStorage.setItem("deeplinking","false")

  return (
    <Link href={"/for-you"}>FOR-YOU</Link>
  )
}
