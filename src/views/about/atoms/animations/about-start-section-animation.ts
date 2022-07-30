import { getClassNamesByString } from '../../../../services/utils/getClassNamesByString'
import { indicateTheEndOfTheAnimation } from '../../../../services/utils/indicateTheEndOfTheAnimation'
import { ABOUT_START_SECTION_ANIMATION_CLASSNAMES } from '../constants/start-about-section-classnames'
import gsap, { Power4 } from 'gsap'

export const aboutStartSectionAnimation = (
  isHomeStartAnimationPlayed: boolean
) => {
  const classNames = getClassNamesByString<
    typeof ABOUT_START_SECTION_ANIMATION_CLASSNAMES
  >(ABOUT_START_SECTION_ANIMATION_CLASSNAMES)

  const timeline = gsap.timeline()

  if (!isHomeStartAnimationPlayed) {
    // timeline.fromTo(
    //   classNames.descriptiveTextSymbol1,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 0.3,
    //     stagger: 0.05,
    //     ease: Power4.easeIn,
    //     delay: 1.6,
    //   }
    // )

    // timeline.fromTo(
    //   classNames.mainTextElement,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     x: 0,
    //     duration: 0.4,
    //     stagger: 0.4,
    //     delay: 0.9,
    //   }
    // )

    // timeline.fromTo(
    //   classNames.descriptiveTextSymbol2,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 0.3,
    //     stagger: 0.05,
    //     ease: Power4.easeIn,
    //     delay: 0.35,
    //   }
    // )

    // timeline.to([classNames.decor1, classNames.decor2], {
    //   scaleX: 1,
    //   ease: Power4.easeOut,
    //   duration: 1.3,
    //   delay: 0.7,
    // })

    timeline.to(classNames.bgText, {
      opacity: 1,
      duration: 1.3,
      delay: -1.3,
    })

    // timeline.fromTo(
    //   classNames.secondaryElement,
    //   {
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     opacity: 1,
    //     duration: 1.3,
    //     pointerEvents: 'all',
    //     onStart: indicateTheEndOfTheAnimation,
    //   }
    // )

    // timeline.fromTo(
    //   classNames.scrollDownSymbol,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 0.3,
    //     stagger: 0.05,
    //     ease: Power4.easeIn,
    //     delay: 5,
    //   }
    // )
  } else {
    timeline.to([classNames.nameDecor1, classNames.nameDecor2], {
      scaleX: 1,
      ease: Power4.easeOut,
      duration: 1.3,
      delay: 0.8,
      onStart: indicateTheEndOfTheAnimation,
    })

    timeline.to(classNames.bgText, {
      opacity: 1,
      duration: 1.3,
      delay: -1.3,
      onComplete: () => console.log('asd'),
    })

    // timeline.fromTo(
    //   classNames.scrollDownSymbol,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 0.3,
    //     stagger: 0.06,
    //     ease: Power4.easeIn,
    //     delay: 5,
    //   }
    // )
  }
}
