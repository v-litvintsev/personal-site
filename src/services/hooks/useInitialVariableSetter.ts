import { useEffect } from 'react'
import { VIEWPORT_WIDTH_VALUES } from '../../constants/viewport-width-values'
import appState from '../store/appState'
import { setTheme } from '../utils/setTheme'

export const useInitialVariableSetter = () => {
  useEffect(() => {
    // theme
    const isDarkTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    if (isDarkTheme) {
      setTheme('dark')
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
