import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const useSmoothScrollSetter =
  (): MutableRefObject<HTMLDivElement | null> => {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const [scroll, setScroll] = useState<any>(null)

    useEffect(() => {
      if (!wrapperRef.current || scroll) {
        return
      }

      let locoScroll: any = null
      ;(async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default

        locoScroll = new LocomotiveScroll({
          el: wrapperRef.current,
          smooth: true,
          smoothMobile: false,
          resetNativeScroll: true,
        })

        setScroll(locoScroll)

        locoScroll.on('scroll', ScrollTrigger.update)

        ScrollTrigger.defaults({ scroller: locoScroll.el })
        ScrollTrigger.scrollerProxy(wrapperRef.current, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            }
          },
          pinType: locoScroll.el.style.transform ? 'transform' : 'fixed',
        })

        const syncLocoWithGSAP = () => {
          locoScroll && locoScroll.update()
        }

        ScrollTrigger.addEventListener('refresh', syncLocoWithGSAP)
        ScrollTrigger.refresh()
      })()
      return () => {
        if (locoScroll) {
          locoScroll.destroy()
          locoScroll = null
        }
      }
    }, [wrapperRef])

    return wrapperRef
  }
