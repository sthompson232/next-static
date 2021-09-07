import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/globals.scss'
import { ChakraProvider, ThemeProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
    <Navbar />
    <div className="container">
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </div>
    <Footer />
    </>
  )
}

export default MyApp
