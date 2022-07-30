import { useEffect } from 'react'
import appState from '../store/appState'
import { sessionStorageUtility } from '../utils/sessionStorageUtility'
import { ESessionStorageFields } from '../../types/session-storage'

export const useStartSectionAnimationsInitializer = (
  startSectionAnimation: (isHomeStartAnimationPlayed: boolean) => void
) => {
  useEffect(() => {
    if (appState.isIntroAnimationPlayed) {
      const isHomeStartAnimationPlayed = !!sessionStorageUtility.get(
        ESessionStorageFields.isHomeStartAnimationPlayed
      )

      startSectionAnimation(isHomeStartAnimationPlayed)
    }
    // eslint-disable-next-line
  }, [appState.isIntroAnimationPlayed])
}
