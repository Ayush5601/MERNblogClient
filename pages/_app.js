//to avoid warning of metadata use in _document file
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp