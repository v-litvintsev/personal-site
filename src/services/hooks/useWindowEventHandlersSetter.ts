import { useEffect } from 'react'
import appState from '../store/appState'

export const useWindowEventHandlersSetter = () => {
  useEffect(() => {
    const handleOrientationChange = () => window.location.reload()

    const handleDocumentClick = () => {
      appState.closePopupFunctions.forEach((action) => action())
    }

    window.addEventListener('orientationchange', handleOrientationChange)
    document.addEventListener('click', handleDocumentClick)

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange)
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])
}
