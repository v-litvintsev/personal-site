import { AppProps } from 'next/app'
import Intro from '../components/Intro'
import { useInitialVariableSetter } from '../services/hooks/useInitialVariableSetter'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import '../styles/index.scss'
import Header from '../components/Header'
import { useWindowEventHandlersSetter } from '../services/hooks/useWindowEventHandlersSetter'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useStartScrollBlocker } from '../services/hooks/useStartScrollBlocker'
import ScrollIndicator from '../components/SmoothScrollWrapper/molecules/ScrollIndicator'
import HtmlHead from '../components/HtmlHead'
import PageTransitionWrapper from '../components/PageTransitionWrapper'
import { useConsoleMessageSender } from '../services/hooks/useConsoleMessageSender'
import { useBrowserDetector } from '../services/hooks/useBrowserDetector'

gsap.registerPlugin(ScrollTrigger)

const AppContainer: FC<AppProps> = observer(({ Component, pageProps }) => {
  useInitialVariableSetter()
  useWindowEventHandlersSetter()
  useStartScrollBlocker()
  useConsoleMessageSender()
  useBrowserDetector()

  return (
    <>
      <HtmlHead />
      {/* WIP */}
      {/* <PageTransitionWrapper> */}
      <Component {...pageProps} />
      {/* </PageTransitionWrapper> */}
      <ScrollIndicator />
      <Header />
      <Intro />
    </>
  )
})

export default AppContainer
