import gsap, { Power2, Power4 } from 'gsap'
import { getClassNamesByString } from '../../../../services/utils/getClassNamesByString'
import { STACK_SECTION_ANIMATION_CLASSNAMES } from '../constants/stack-section-animation-classnames'

export const stackSectionAnimation = (isMobile: boolean) => {
  const classNames = getClassNamesByString<
    typeof STACK_SECTION_ANIMATION_CLASSNAMES
  >(STACK_SECTION_ANIMATION_CLASSNAMES)

  const titleAnimation = gsap.fromTo(
    classNames.titleSymbol,
    {
      opacity: 0,
    },
    {
      ease: Power2.easeOut,
      opacity: 1,
      duration: 0.7,
      stagger: 0.04,
      scrollTrigger: {
        trigger: classNames.wrapper,
        start: 'top+=20% bottom',
      },
    }
  )

  const decorAnimation = gsap.fromTo(
    classNames.decor,
    {
      scaleX: isMobile ? 0.3 : 1,
      opacity: 0,
    },
    {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      duration: 1.5,
      delay: 1,
      ease: Power4.easeOut,
      stagger: 1,
      scrollTrigger: {
        trigger: classNames.wrapper,
        start: 'top+=20% bottom',
      },
    }
  )

  return () => {
    ;[titleAnimation, decorAnimation].forEach((animation) =>
      animation.pause().kill()
    )
  }
}
