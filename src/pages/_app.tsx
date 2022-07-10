import { AppProps } from 'next/app'
import Head from 'next/head'
import Intro from '../components/Intro'
import { useInitialVariableSetter } from '../services/hooks/useInitialVariableSetter'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import '../styles/index.scss'
import Header from '../components/Header'
import { useWindowEventHandlersSetter } from '../services/hooks/useWindowEventHandlersSetter'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import ScrollIndicator from '../components/SmoothScrollWrapper/molecules/ScrollIndicator'

gsap.registerPlugin(ScrollTrigger)

const AppContainer: FC<AppProps> = observer(({ Component, pageProps }) => {
  useInitialVariableSetter()
  useWindowEventHandlersSetter()

  return (
    <>
      <Head>
        <title>Vladimir Litvinstev | Creative web developer</title>
      </Head>
      <Component {...pageProps} />
      <ScrollIndicator />
      <Header />
      <Intro />
    </>
  )
})

export default AppContainer
