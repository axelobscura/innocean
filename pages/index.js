import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
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
    </Layout>
    
  )
}
