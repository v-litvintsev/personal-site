import { getClassNamesByString } from '../../../../services/utils/getClassNamesByString'
import { ABOUT_TEXT_SECTION_ANIMATION_CLASSNAMES } from '../constants/about-text-section-classnames'
import gsap, { Power2 } from 'gsap'

export const aboutTextSectionAnimation = () => {
  const classNames = getClassNamesByString<
    typeof ABOUT_TEXT_SECTION_ANIMATION_CLASSNAMES
  >(ABOUT_TEXT_SECTION_ANIMATION_CLASSNAMES)

  const wordsAnimation = gsap.fromTo(
    classNames.word,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      stagger: 1,
      duration: 10,
      ease: Power2.easeOut,
      scrollTrigger: {
        trigger: classNames.wrapper,
        scrub: true,
        start: 'top-=25% center',
        end: 'bottom-=20% center',
      },
    }
  )

  return () => {
    ;[wordsAnimation].forEach((animation) => animation.pause().kill())
  }
}
