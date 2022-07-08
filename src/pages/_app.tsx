import { AppProps } from 'next/app'
import Head from 'next/head'
import Intro from '../components/Intro'
import { useInitialVariableSetter } from '../services/hooks/useInitialVariableSetter'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import '../styles/index.scss'
import Header from '../components/Header'
import { useWindowEventHandlersSetter } from '../services/hooks/useWindowEventHandlersSetter'
import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import SmoothScrollWrapper from '../components/SmoothScrollWrapper'
import { useRouter } from 'next/router'
import appState from '../services/store/appState'
import { unsetScrollVars } from '../components/SmoothScrollWrapper/atoms/hooks/useSmoothScrollSetter'

gsap.registerPlugin(ScrollTrigger)

const AppContainer: FC<AppProps> = observer(({ Component, pageProps }) => {
  const router = useRouter()

  useInitialVariableSetter()
  useWindowEventHandlersSetter()

  // Dirty hack
  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (appState.scroll) {
        appState.scroll.destroy()
        unsetScrollVars()
      }
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Vladimir Litvinstev | Creative web developer</title>
      </Head>
      <SmoothScrollWrapper>
        <Component {...pageProps} />
      </SmoothScrollWrapper>
      <Header />
      <Intro />
    </>
  )
})

export default AppContainer
