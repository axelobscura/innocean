import Link from 'next/link'
export default function About() {
  return (
    <div className="about">
      <div>
        <h2>INNOCEAN WORLDWIDE</h2>
        <p>INNOCEAN Compañia global de comunicación y marketing con 18 operaciones en el mundo y más de 1,700 empleados.</p>
      </div>
      <div>
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a>HOME</a>
        </Link>
      </div>
    </div>
  )
}
