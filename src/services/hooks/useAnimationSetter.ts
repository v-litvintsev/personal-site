import { useEffect } from 'react'
import appState from '../store/appState'

// the component in which the hook is used must be wrapped in an Mobx observer

export const useAnimationSetter = (callback: () => void) => {
  const mobile = appState.screenType === 'touchpad'

  useEffect(() => {
    if (mobile || appState.hasScrollTriggerBeenInitialized) {
      callback()
    }
    // eslint-disable-next-line
  }, [callback, appState.hasScrollTriggerBeenInitialized])
}
