import gsap from 'gsap'
import { useEffect } from 'react'
import appState from '../../../../services/store/appState'

export const useStartScrollBlocker = () => {
  useEffect(() => {
    const isDesktop = appState.viewportWidth === 'desktop'

    if (!appState.isStartAnimationPlayed) {
      if (isDesktop && appState.scroll) {
        appState.scroll.stop()
      } else {
        gsap.set(document.body, {
          maxHeight: '100vh',
          overflow: 'hidden',
        })
      }
    } else {
      if (isDesktop && appState.scroll) {
        appState.scroll.start()
      } else {
        gsap.set(document.body, {
          maxHeight: 'auto',
          overflow: 'auto',
        })
      }
    }

    // eslint-disable-next-line
  }, [appState.isStartAnimationPlayed, appState.scroll])
}
