import { useEffect, useState } from 'react'
import appState from '../../../../services/store/appState'
import { introAnimation } from '../animations/intro-animation'

export const useIntroInitializer = (): boolean => {
  const [isPlaying, setIsPlaying] = useState(true)

  const indicateTheEndOfTheAnimation = () => {
    setIsPlaying(false)
  }

  const startNextAnimationsPrepare = () => {
    appState.setIsIntroAnimationPlayed(true)
  }

  useEffect(() => {
    const isDesktop = appState.viewportWidth === 'desktop'

    introAnimation(
      indicateTheEndOfTheAnimation,
      startNextAnimationsPrepare,
      isDesktop
    )
  }, [])

  return isPlaying
}
