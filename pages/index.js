import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Marballin!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Coming soon!" />
        <p className="description">
          <code>:)</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
