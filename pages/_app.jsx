import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/main.scss'
import { AnimatePresence } from 'framer-motion'


function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <link rel="shortcut icon" type="image/x-icon" href="" />
        <meta name="author" content="" />
        <meta property="og:title" content="The website of" />
        <meta property="og:image" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
        <AnimatePresence 
          exitBeforeEnter
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component
            key={router.route}
            {...pageProps}
          />
        </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
