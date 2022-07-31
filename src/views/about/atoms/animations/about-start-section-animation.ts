import { getClassNamesByString } from '../../../../services/utils/getClassNamesByString'
import { indicateTheEndOfTheAnimation } from '../../../../services/utils/indicateTheEndOfTheAnimation'
import { ABOUT_START_SECTION_ANIMATION_CLASSNAMES } from '../constants/start-about-section-classnames'
import gsap, { Power4, Power2 } from 'gsap'
import appState from '../../../../services/store/appState'

export const aboutStartSectionAnimation = (
  isHomeStartAnimationPlayed: boolean
) => {
  const classNames = getClassNamesByString<
    typeof ABOUT_START_SECTION_ANIMATION_CLASSNAMES
  >(ABOUT_START_SECTION_ANIMATION_CLASSNAMES)

  const isMobile = appState.viewportWidth === 'mobile'

  const timeline = gsap.timeline()

  if (!isHomeStartAnimationPlayed) {
    timeline.set(classNames.namePart2, { opacity: 0 })

    timeline.fromTo(
      classNames.namePart1,
      {
        opacity: 0,
        x: '12%',
      },
      {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut,
        duration: 1.4,
        delay: 1.4,
      }
    )

    timeline.fromTo(
      classNames.namePart2,
      {
        x: '-12%',
      },
      {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut,
        duration: 1.4,
        delay: -1.4,
      }
    )

    if (isMobile) {
      timeline.fromTo(
        [classNames.nameDecor1, classNames.nameDecor2],
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          ease: Power4.easeOut,
          duration: 0.9,
          delay: -0.6,
        }
      )

      timeline.fromTo(
        classNames.infoItem,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: Power2.easeOut,
          stagger: 0.4,
        }
      )

      timeline.fromTo(
        classNames.photo,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: Power2.easeOut,
          delay: -0.2,
          duration: 1.8,
        }
      )

      timeline.to(classNames.bgText, {
        opacity: 1,
        duration: 0.8,
        delay: -1,
        onStart: indicateTheEndOfTheAnimation,
      })
    } else {
      timeline.fromTo(
        classNames.nameDecor2,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          ease: Power4.easeOut,
          duration: 0.9,
          delay: -0.6,
        }
      )

      timeline.fromTo(
        classNames.nameDecor1,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          ease: Power4.easeOut,
          duration: 1.8,
          delay: -0.9,
        }
      )

      timeline.fromTo(
        classNames.photo,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: Power2.easeOut,
          delay: -1.1,
          duration: 1.8,
        }
      )

      timeline.fromTo(
        classNames.infoItem,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
          ease: Power2.easeOut,
          delay: -1,
          stagger: 0.3,
        }
      )

      timeline.to(classNames.bgText, {
        opacity: 1,
        duration: 0.8,
        delay: 0.05,
        onStart: indicateTheEndOfTheAnimation,
      })
    }
  } else {
    timeline.set(classNames.photo, { opacity: 0 })

    if (isMobile) {
      timeline.fromTo(
        [classNames.nameDecor2, classNames.nameDecor1],
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          ease: Power4.easeOut,
          duration: 1.1,
          delay: 0.6,
        }
      )

      timeline.fromTo(
        classNames.photo,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: Power2.easeOut,
          delay: -1,
          duration: 1.8,
        }
      )

      timeline.to(classNames.bgText, {
        opacity: 1,
        duration: 1.3,
        delay: -1.8,
        onStart: indicateTheEndOfTheAnimation,
      })
    } else {
      timeline.fromTo(
        classNames.nameDecor2,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          ease: Power4.easeOut,
          duration: 0.9,
          delay: 0.8,
        }
      )

      timeline.fromTo(
        classNames.nameDecor1,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          ease: Power4.easeOut,
          duration: 1.8,
          delay: -0.9,
        }
      )

      timeline.fromTo(
        classNames.photo,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: Power2.easeOut,
          delay: -1,
          duration: 1.8,
        }
      )

      timeline.to(classNames.bgText, {
        opacity: 1,
        duration: 1.3,
        delay: -1.1,
        onStart: indicateTheEndOfTheAnimation,
      })
    }
  }
}
