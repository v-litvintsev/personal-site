import { MutableRefObject, useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SMOOTH_SCROLL_CONTAINER_CLASS_NAME } from '../constants/classNames'
import appState from '../../../../services/store/appState'

let isScrollInitialized = false

export const useSmoothScrollSetter =
  (): MutableRefObject<HTMLDivElement | null> => {
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      let scroll: any = null

      if (wrapperRef.current && !isScrollInitialized) {
        ;(async () => {
          isScrollInitialized = true

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          scroll = new LocomotiveScroll({
            el: wrapperRef.current,
            smooth: true,
            smoothMobile: false,
            lerp: 0.08,
          })

          scroll.on('scroll', ScrollTrigger.update)

          ScrollTrigger.defaults({ scroller: scroll.el })
          ScrollTrigger.scrollerProxy(
            `.${SMOOTH_SCROLL_CONTAINER_CLASS_NAME}`,
            {
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
            }
          )

          ScrollTrigger.addEventListener('refresh', () => scroll.update())
          ScrollTrigger.refresh()

          appState.setHasScrollTriggerBeenInitialized(true)
        })()
      }

      return () => {
        if (scroll) {
          scroll.destroy()
          scroll = null
        }
      }
    }, [wrapperRef])

    return wrapperRef
  }
