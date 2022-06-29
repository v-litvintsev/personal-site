import { useEffect, useState } from 'react'
import { getClassNamesByString } from '../../../../services/utils/getClassNamesByString'
import { introAnimation } from '../animations/intro-animation'
import { INTRO_ANIMATION_CLASSNAMES } from '../constants/animation-classnames'

export const useIntroInitializer = (): boolean => {
  const [isPlaying, setIsPlaying] = useState(true)

  const indicateTheEndOfTheAnimation = () => setIsPlaying(false)

  useEffect(() => {
    introAnimation({
      indicateTheEndOfTheAnimation,
      classNames: getClassNamesByString<typeof INTRO_ANIMATION_CLASSNAMES>(
        INTRO_ANIMATION_CLASSNAMES
      ),
    })
  }, [])

  return isPlaying
}
