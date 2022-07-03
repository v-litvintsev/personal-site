import gsap, { Power4 } from 'gsap'
import { getClassNamesByString } from '../../../../services/utils/getClassNamesByString'
import { START_SECTION_ANIMATION_CLASSNAMES } from '../constants/start-section-animation-classnames'

export const startSectionAnimation = (
  indicateTheEndOfTheAnimation: () => void,
  isHomeStartAnimationPlayed: boolean
) => {
  const classNames = getClassNamesByString<
    typeof START_SECTION_ANIMATION_CLASSNAMES
  >(START_SECTION_ANIMATION_CLASSNAMES)

  const timeline = gsap.timeline()

  if (!isHomeStartAnimationPlayed) {
    timeline.delay(1.6)

    timeline.fromTo(
      classNames.descriptiveTextSymbol1,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        stagger: 0.07,
      }
    )

    timeline.fromTo(
      classNames.mainTextElement,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.55,
        delay: 0.65,
      }
    )

    timeline.fromTo(
      classNames.descriptiveTextSymbol2,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        stagger: 0.07,
        delay: 0.65,
      }
    )

    timeline.to([classNames.decor1, classNames.decor2], {
      scaleX: 1,
      ease: Power4.easeOut,
      duration: 1.3,
      delay: 0.8,
    })

    timeline.to(classNames.bgText, {
      opacity: 1,
      duration: 1.3,
      delay: -1.3,
    })

    timeline.fromTo(
      classNames.secondaryElement,
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        opacity: 1,
        duration: 1.3,
        pointerEvents: 'all',
        onStart: indicateTheEndOfTheAnimation,
      }
    )

    timeline.fromTo(
      classNames.scrollDownSymbol,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        stagger: 0.07,
        delay: 5,
      }
    )
  } else {
    timeline.delay(0.5)

    timeline.to([classNames.decor1, classNames.decor2], {
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
    })

    timeline.fromTo(
      classNames.scrollDownSymbol,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        stagger: 0.07,
        delay: 5,
      }
    )
  }
}
