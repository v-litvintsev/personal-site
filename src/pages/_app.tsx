import { AppProps } from 'next/app'
import Head from 'next/head'
import Intro from '../components/Intro'
import { useInitialVariableSetter } from '../services/hooks/useInitialVariableSetter'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import '../styles/index.scss'
import Header from '../components/Header'

gsap.registerPlugin(ScrollTrigger)

const AppContainer = ({ Component, pageProps }: AppProps) => {
  useInitialVariableSetter()

  return (
    <>
      <Head>
        <title>Vladimir Litvinstev | Creative web developer</title>
      </Head>
      <Component {...pageProps} />
      <Header />
      {/* <Intro /> */}
    </>
  )
}

export default AppContainer
