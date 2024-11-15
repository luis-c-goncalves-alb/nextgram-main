
import { headers } from "next/headers";
import Content from "./content";

export default function ForyouPage() { 
    const headersValue = headers()
    const value = headersValue.get('bananas')

    console.log("HEADER PATHNAME", value); 
  return (
    <>
    <h1>FOR-YOU</h1>
    <Content/>
    </>
  )
}
