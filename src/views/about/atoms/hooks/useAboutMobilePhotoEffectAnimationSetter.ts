import { useEffect } from 'react'
import { aboutPhotoEffectAnimation } from '../animations/about-photo-effect-animation'

export const useAboutMobilePhotoEffectAnimationSetter = (photoEffect: any) => {
  useEffect(() => {
    if (photoEffect) {
      const onUnmountHandler = aboutPhotoEffectAnimation(photoEffect)

      if (onUnmountHandler) {
        return onUnmountHandler
      }
    }
  }, [photoEffect])
}
