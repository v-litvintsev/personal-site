import { useEffect } from 'react'
import appState from '../store/appState'

// the component in which the hook is used must be wrapped in an Mobx observer

type TCallback = (() => void) | (() => () => void)

export const useAnimationSetter = (callback: TCallback) => {
  const isMobile = appState.screenType === 'touchpad'

  useEffect(() => {
    if (isMobile || appState.hasScrollTriggerBeenInitialized) {
      const onUnmountHandler = callback()

      if (onUnmountHandler) {
        return onUnmountHandler
      }
    }
    // eslint-disable-next-line
  }, [callback, appState.hasScrollTriggerBeenInitialized])
}
