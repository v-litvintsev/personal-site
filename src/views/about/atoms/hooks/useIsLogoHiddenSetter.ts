import { useEffect } from 'react'
import appState from '../../../../services/store/appState'

export const useIsLogoHiddenSetter = () => {
  useEffect(() => {
    appState.setIsLogoHidden(true)

    return () => {
      appState.setIsLogoHidden(false)
    }
  }, [])
}
