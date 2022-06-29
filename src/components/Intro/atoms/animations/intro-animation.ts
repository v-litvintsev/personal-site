import gsap, { Power4 } from 'gsap'
import { IObject } from '../../../../types/globals'

interface IAnimationClassNames extends IObject {
  container: string
  contentWrapper: string
  nameLetter1: string
  nameLetter2: string
  decor1: string
  decor2: string
}

interface IIntroAnimationArgs {
  indicateTheEndOfTheAnimation: () => void
  classNames: IAnimationClassNames
}

export const introAnimation = ({
  indicateTheEndOfTheAnimation,
  classNames,
}: IIntroAnimationArgs) => {
  const timeline = gsap.timeline()

  timeline.delay(0.8)

  timeline.set(classNames.contentWrapper, {
    opacity: 1,
  })

  timeline.fromTo(
    classNames.nameLetter1,
    {
      opacity: 0,
      x: '3vw',
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.08,
    }
  )

  timeline.fromTo(
    classNames.nameLetter2,
    {
      opacity: 0,
      x: '3vw',
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.08,
      delay: -0.5,
    }
  )

  timeline.set(classNames.decor1, {
    transformOrigin: 'left',
  })

  timeline.to(classNames.decor1, {
    scaleX: 1,
    duration: 0.8,
    ease: Power4.easeOut,
    delay: -0.6,
  })

  timeline.set(classNames.decor2, {
    transformOrigin: 'left',
  })

  timeline.fromTo(
    classNames.decor2,
    {
      transformOrigin: 'left',
      scaleX: 0,
    },
    {
      scaleX: 1,
      duration: 0.8,
      ease: Power4.easeOut,
      delay: -0.8,
    }
  )

  timeline.set(classNames.decor1, {
    transformOrigin: 'right',
  })

  timeline.to(classNames.decor1, {
    scaleX: 0,
    duration: 0.8,
    ease: Power4.easeOut,
  })

  timeline.fromTo(
    classNames.decor2,
    {
      transformOrigin: 'right',
    },
    {
      scaleX: 0,
      duration: 0.8,
      ease: Power4.easeOut,
      delay: -0.8,
    }
  )

  timeline.to(classNames.container, {
    delay: -1.3,
    opacity: 0,
    duration: 1,
    ease: Power4.easeIn,
    onComplete: indicateTheEndOfTheAnimation,
  })
}
