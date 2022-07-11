import { useEffect } from 'react'
import appState from '../../../../services/store/appState'

export const useMobileScrollHandler = (isMobile: boolean) => {
  useEffect(() => {
    if (isMobile) {
      let previousScrollValue = 0

      const scrollHandler = () => {
        appState.setIsScrolledUp(window.scrollY <= previousScrollValue)

        previousScrollValue = window.scrollY
      }

      window.addEventListener('scroll', scrollHandler)

      return () => {
        window.removeEventListener('scroll', scrollHandler)
        previousScrollValue = 0
      }
    }
  }, [isMobile])
}
