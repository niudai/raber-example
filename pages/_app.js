import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider>
      <Head>
        <title>级大风级大风</title>

        <meta name="description" content="Make Your React App Visually Editable." />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
      </ChakraProvider>
      </>
  )
}
