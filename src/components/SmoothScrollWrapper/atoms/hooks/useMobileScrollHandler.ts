import { useEffect } from 'react'
import appState from '../../../../services/store/appState'

export const useMobileScrollHandler = () => {
  useEffect(() => {
    const isMobileOrTablet =
      appState.viewportWidth === 'mobile' || appState.viewportWidth === 'tablet'

    if (isMobileOrTablet) {
      appState.setHasScrollTriggerBeenInitialized(true)

      let previousScrollValue = 0

      const scrollHandler = () => {
        appState.setIsScrolledUp(
          window.scrollY <= previousScrollValue || window.scrollY <= 0
        )

        previousScrollValue = window.scrollY
      }

      window.addEventListener('scroll', scrollHandler)

      return () => {
        window.removeEventListener('scroll', scrollHandler)
        previousScrollValue = 0
      }
    }
  }, [])
}
