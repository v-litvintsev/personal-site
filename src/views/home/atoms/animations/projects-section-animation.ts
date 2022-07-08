import gsap, { Power4 } from 'gsap'
import { getClassNamesByString } from '../../../../services/utils/getClassNamesByString'
import { PROJECTS_SECTION_ANIMATION_CLASSNAMES } from '../constants/projects-section-animation-classnames'

export const projectsSectionAnimation = (isDesktop: boolean) => {
  const classNames = getClassNamesByString<
    typeof PROJECTS_SECTION_ANIMATION_CLASSNAMES
  >(PROJECTS_SECTION_ANIMATION_CLASSNAMES)

  if (!isDesktop) {
    const decorAnimation = gsap.fromTo(
      classNames.decor,
      {
        scaleX: 0.3,
        opacity: 0,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.7,
        ease: Power4.easeOut,
        stagger: 1,
        scrollTrigger: {
          trigger: classNames.wrapper,
          start: 'top 85%',
        },
      }
    )

    const contentAnimation = gsap.fromTo(
      classNames.content,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2.3,
        ease: Power4.easeOut,
        stagger: 1,
        scrollTrigger: {
          trigger: classNames.wrapper,
          start: 'top 85%',
        },
      }
    )

    return () => {
      ;[decorAnimation, contentAnimation].forEach((animation) =>
        animation.pause().kill()
      )
    }
  }
}
