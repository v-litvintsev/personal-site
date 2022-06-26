import { AppProps } from 'next/app'
import Head from 'next/head'
import { useInitialVariableSetter } from '../hooks/useInitialVariableSetter'
import '../styles/index.scss'

const AppContainer = ({ Component, pageProps }: AppProps) => {
  useInitialVariableSetter()

  return (
    <>
      <Head>
        <title>Vladimir Litvinstev | Creative web developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default AppContainer
