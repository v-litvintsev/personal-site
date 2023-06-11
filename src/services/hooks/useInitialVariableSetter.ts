import { useEffect } from 'react'
import { VIEWPORT_WIDTH_VALUES } from '../../constants/viewport-width-values'
import { ELocalStorageFields } from '../../types/local-storage'
import appState from '../store/appState'
import { localStorageUtility } from '../utils/localStorageUtility'
import { setTheme } from '../utils/setTheme'

export const useInitialVariableSetter = () => {
  useEffect(() => {
    // theme
    const storageTheme = localStorageUtility.get(ELocalStorageFields.theme)

    if (storageTheme == 'dark') {
      setTheme(storageTheme)
    }

    // screen params
    if (window.innerWidth > VIEWPORT_WIDTH_VALUES.DESKTOP) {
      appState.setViewportWidth('desktop')
    } else if (window.innerWidth > VIEWPORT_WIDTH_VALUES.TABLET) {
      appState.setViewportWidth('tablet')
    } else {
      appState.setViewportWidth('mobile')
    }

    const isTouchScreen =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )

    if (isTouchScreen) {
      appState.setScreenType('touchpad')
    } else {
      appState.setScreenType('mouse')
    }
  }, [])
}
