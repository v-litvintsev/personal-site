import { useEffect } from 'react'
import appState from '../store/appState'

// the component in which the hook is used must be wrapped in an Mobx observer

type TCallback = (() => void) | (() => () => void)

export const useAnimationSetter = (callback: TCallback) => {
  const isMobileOrTablet =
    appState.viewportWidth === 'mobile' || appState.viewportWidth === 'tablet'

  useEffect(() => {
    if (
      appState.hasBrowserBeenDetected &&
      (isMobileOrTablet || appState.hasScrollTriggerBeenInitialized)
    ) {
      const onUnmountHandler = callback()

      if (onUnmountHandler) {
        return onUnmountHandler
      }
    }
    // eslint-disable-next-line
  }, [
    callback,
    appState.hasScrollTriggerBeenInitialized,
    appState.hasBrowserBeenDetected,
    isMobileOrTablet,
  ])
}
