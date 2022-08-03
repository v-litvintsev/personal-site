import gsap from 'gsap'
import appState from '../../../../services/store/appState'
import { ABOUT_START_SECTION_ANIMATION_CLASSNAMES } from '../constants/about-start-section-classnames'

const PHOTO_IMAGE_CLASS_NAME = `.${ABOUT_START_SECTION_ANIMATION_CLASSNAMES.photoImage}`

export const aboutPhotoEffectAnimation = (photoEffect: any) => {
  const isMobile = appState.viewportWidth === 'mobile'

  const photoEffectAnimation =
    isMobile &&
    gsap.to(PHOTO_IMAGE_CLASS_NAME, {
      scrollTrigger: {
        trigger: PHOTO_IMAGE_CLASS_NAME,
        start: 'center center',
        onEnter: () => photoEffect && photoEffect.next(),
        onLeaveBack: () => photoEffect && photoEffect.previous(),
      },
    })

  return () => {
    ;[photoEffectAnimation].forEach(
      (animation) => animation && animation.pause().kill()
    )
  }
}
