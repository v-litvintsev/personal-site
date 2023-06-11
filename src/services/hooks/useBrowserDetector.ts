import { useEffect } from 'react'
import appState from '../store/appState'

export const useBrowserDetector = () => {
  useEffect(() => {
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1

    if (isFirefox) {
      document.documentElement.setAttribute('firefox', '')
    }

    appState.setHasBrowserBeenDetected(true)
  }, [])
}
