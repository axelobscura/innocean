import Link from 'next/link'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div className="about">
        <div>
          <h2>INNOCEAN WORLDWIDE</h2>
          <p><b>INNOCEAN</b> Compañia global de comunicación y marketing con 18 operaciones en el mundo y más de 1,700 empleados.</p>
          <p>En <b>INNOCEAN Worldwide México</b> creemos en proporcionar una gama completa de servicios<br/>con un enfoque claro para entregar valor a todos nuestros clientes.</p>
        </div>
        <div className="links">
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a>INICIO</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a>SERVICIOS</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a>MAPAS</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a>DIAGRAMAS</a>
          </Link>
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <a>TIMELINE</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
