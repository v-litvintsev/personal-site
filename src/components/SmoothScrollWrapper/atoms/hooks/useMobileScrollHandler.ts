import { useEffect } from 'react'
import appState from '../../../../services/store/appState'

export const useMobileScrollHandler = () => {
  const isMobileOrTablet =
    appState.viewportWidth === 'mobile' || appState.viewportWidth === 'tablet'

  useEffect(() => {
    if (isMobileOrTablet) {
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
  }, [isMobileOrTablet])
}
