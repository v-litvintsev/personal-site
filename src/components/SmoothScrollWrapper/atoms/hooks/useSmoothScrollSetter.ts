import { useCallback, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SMOOTH_SCROLL_CONTAINER_CLASS_NAME } from '../constants/classNames'
import appState from '../../../../services/store/appState'

let isScrollInitialized = false
let scroll: any = null

const unsetScrollVars = () => {
  isScrollInitialized = false
}

const SMOOTH_SCROLL_CONTAINER_SELECTOR = `.${SMOOTH_SCROLL_CONTAINER_CLASS_NAME}`

export const useSmoothScrollSetter = () => {
  const initializeLocomotiveScroll = useCallback(() => {
    if (!isScrollInitialized) {
      isScrollInitialized = true
      ;(async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default

        scroll = new LocomotiveScroll({
          el: document.querySelector(SMOOTH_SCROLL_CONTAINER_SELECTOR),
          smooth: true,
          lerp: 0.09,
          multiplier: 0.9,
          smoothMobile: false,
        })

        scroll.on(
          'scroll',
          ({ scroll: { y: scrollY }, limit: { y: scrollLimit } }: any) => {
            ScrollTrigger.update()

            appState.setScrollProgressRatio(scrollY / scrollLimit)
          }
        )

        ScrollTrigger.defaults({ scroller: scroll.el })
        ScrollTrigger.scrollerProxy(SMOOTH_SCROLL_CONTAINER_SELECTOR, {
          scrollTop(value) {
            return arguments.length
              ? scroll.scrollTo(value, 0, 0)
              : scroll.scroll.instance.scroll.y
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          },
          pinType: scroll.el.style.transform ? 'transform' : 'fixed',
        })

        ScrollTrigger.refresh()
        ScrollTrigger.addEventListener('refresh', () => scroll.update())

        appState.setHasScrollTriggerBeenInitialized(true)
        appState.setScroll(scroll)
      })()
    }
  }, [])

  useEffect(() => {
    initializeLocomotiveScroll()

    return () => {
      if (scroll) {
        scroll.destroy()
        unsetScrollVars()
      }
    }
  }, [initializeLocomotiveScroll])
}
