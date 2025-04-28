import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import '../styles/globals.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Bojana Mijatović</title>
        <meta name="description" content="Portfolio Bojana Mijatović" />
      </Head>

      <main>
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
