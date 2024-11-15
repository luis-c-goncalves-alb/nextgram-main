"use client"

import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

export default function Content() {
    let photos = Array.from({ length: 6 }, (_, i) => i + 1);
    const searchParams = useSearchParams()

    useEffect(()=>{
        const info:string | null = searchParams.get("info") || null
        console.log("info", info);
        if(info){
            redirect(info!)
        }   
    },[])

  return (
    <section className="cards-container">    
      {photos.map((id) => (
        <Link className="card" key={id} href={`/photos/${id}`} passHref>
          {id}
        </Link>
      ))}
  </section>
  )
}
