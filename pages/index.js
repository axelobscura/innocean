import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>INNOCEAN MÉXICO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap" rel="stylesheet" /> 
      </Head>

      <div className="entrada">
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
          <img src="/images/logo-blanco.png" alt="" title="" />
        </Link>
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
          <h2>
            <span>
              <span style={{color: '#fff'}}>[</span> DISCOVER BEYOND <span style={{color: '#fff'}}>]</span>
            </span>
          </h2>
        </Link>
      </div>
    </div>
    
  )
}
