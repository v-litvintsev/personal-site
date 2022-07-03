import { useEffect } from 'react'
import appState from '../../../../services/store/appState'
import { sessionStorageUtility } from '../../../../services/utils/sessionStorageUtility'
import {
  ESessionStorageFields,
  SESSION_STORAGE_VALUES,
} from '../../../../types/session-storage'
import { startSectionAnimation } from '../animations/start-section-animation'

export const useStartSectionAnimationsInitializer = () => {
  useEffect(() => {
    if (appState.isIntroAnimationPlayed) {
      const isHomeStartAnimationPlayed = !!sessionStorageUtility.get(
        ESessionStorageFields.isHomeStartAnimationPlayed
      )

      const indicateTheEndOfTheAnimation = () => {
        sessionStorageUtility.set(
          ESessionStorageFields.isHomeStartAnimationPlayed,
          SESSION_STORAGE_VALUES.isHomeStartAnimationPlayed.played
        )

        appState.setIsStartAnimationPlayed(true)
      }

      startSectionAnimation(
        indicateTheEndOfTheAnimation,
        isHomeStartAnimationPlayed
      )
    }
    // eslint-disable-next-line
  }, [appState.isIntroAnimationPlayed])
}
