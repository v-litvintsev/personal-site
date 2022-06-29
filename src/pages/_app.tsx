import { AppProps } from 'next/app'
import Head from 'next/head'
import Intro from '../components/Intro'
import SmoothScrollWrapper from '../components/SmoothScrollWrapper'
import { useInitialVariableSetter } from '../services/hooks/useInitialVariableSetter'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import '../styles/index.scss'
// import 'locomotive-scroll/dist/locomotive-scroll.css'

gsap.registerPlugin(ScrollTrigger)

const AppContainer = ({ Component, pageProps }: AppProps) => {
  useInitialVariableSetter()

  return (
    <>
      <Head>
        <title>Vladimir Litvinstev | Creative web developer</title>
      </Head>
      {/* WIP */}
      {/* <SmoothScrollWrapper> */}
      <Component {...pageProps} />
      {/* </SmoothScrollWrapper> */}
      <Intro />
    </>
  )
}

export default AppContainer
