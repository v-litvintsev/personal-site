import {
  ESessionStorageFields,
  SESSION_STORAGE_VALUES,
} from '../../types/session-storage'
import appState from '../store/appState'
import { sessionStorageUtility } from './sessionStorageUtility'

export const indicateTheEndOfTheAnimation = () => {
  sessionStorageUtility.set(
    ESessionStorageFields.isHomeStartAnimationPlayed,
    SESSION_STORAGE_VALUES.isHomeStartAnimationPlayed.played
  )

  appState.setIsStartAnimationPlayed(true)
}
