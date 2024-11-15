import Link from "next/link";

export default function Explore() {
    let photos = Array.from({ length: 6 }, (_, i) => i + 7);

  return (
    <>
    <h1>EXPLORE</h1>
    <section className="cards-container">    
    {photos.map((id) => (
        <Link className="card" key={id} href={`/photos/${id}`} passHref>
        {id}
      </Link>
    ))}
  </section>
    </>
  )
}
