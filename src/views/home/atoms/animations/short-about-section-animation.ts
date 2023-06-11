import gsap, { Power1, Power4 } from 'gsap'
import appState from '../../../../services/store/appState'
import { getClassNamesByString } from '../../../../services/utils/getClassNamesByString'
import { SHORT_ABOUT_SECTION_ANIMATION_CLASSNAMES } from '../constants/short-about-section-animation-classnames'
import { START_SECTION_ANIMATION_CLASSNAMES } from '../constants/start-section-animation-classnames'

const startSectionFadeOutElement = `.${START_SECTION_ANIMATION_CLASSNAMES.fadeOutOnScrollElement}`

export const shortAboutSectionAnimation = () => {
  const classNames = getClassNamesByString<
    typeof SHORT_ABOUT_SECTION_ANIMATION_CLASSNAMES
  >(SHORT_ABOUT_SECTION_ANIMATION_CLASSNAMES)

  const isDesktop = appState.viewportWidth === 'desktop'
  const isTablet = appState.viewportWidth === 'tablet'
  const isMobile = appState.viewportWidth === 'mobile'

  const setIsHeaderHidden = (value: boolean) => {
    isDesktop && appState.setIsHeaderHidden(value)
  }

  const wordsAnimation = gsap.fromTo(
    classNames.word,
    {
      opacity: 0,
      y: isDesktop ? '3.5vh' : '0',
    },
    {
      opacity: 1,
      y: 0,
      stagger: isDesktop ? 0.7 : 0.4,
      ease: Power4.easeOut,
      duration: 10,
      scrollTrigger: {
        trigger: classNames.section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onEnter: () => setIsHeaderHidden(true),
        onEnterBack: () => setIsHeaderHidden(true),
        onLeave: () => setIsHeaderHidden(false),
        onLeaveBack: () => setIsHeaderHidden(false),
      },
    }
  )

  const startSectionFadeOutAnimation = gsap.to(startSectionFadeOutElement, {
    opacity: 0,
    ease: Power1.easeOut,
    scrollTrigger: {
      trigger: classNames.section,
      start: 'top',
      end: 'center-=40%',
      scrub: isDesktop ? 1 : true,
    },
  })

  const textFadeOutAnimation =
    (isDesktop || isTablet) &&
    gsap.fromTo(
      classNames.text,
      {
        yPercent: -50,
        y: '30vh',
      },
      {
        y: '0',
        ease: Power1.easeOut,
        scrollTrigger: {
          trigger: classNames.section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    )

  const desktopTextPinAnimation =
    isDesktop &&
    gsap.to(document.documentElement, {
      scrollTrigger: {
        trigger: classNames.contentWrapper,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
      },
    })

  const tabletAndMobileTextPinAnimation =
    (isTablet || isMobile) &&
    gsap.to(document.documentElement, {
      scrollTrigger: {
        trigger: classNames.section,
        start: 'top top',
        end: 'bottom bottom',
        pin: classNames.contentWrapper,
      },
    })

  return () => {
    ;[
      wordsAnimation,
      startSectionFadeOutAnimation,
      textFadeOutAnimation,
      desktopTextPinAnimation,
      tabletAndMobileTextPinAnimation,
    ].forEach((animation) => animation && animation.pause().kill())
  }
}
