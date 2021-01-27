import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>INNOCEAN MÉXICO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="example">
        Hello World.{' '}
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
          <a>About</a>
        </Link>
      </div>
    </div>
    
  )
}
