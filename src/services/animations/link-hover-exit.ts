import { MutableRefObject } from 'react'
import gsap, { Power4 } from 'gsap'

export const linkHoverExitAnimation = (
  decorRef: MutableRefObject<HTMLSpanElement | null>
) => {
  if (decorRef.current) {
    gsap.fromTo(
      decorRef.current,
      {
        transformOrigin: 'right',
        scaleX: 1,
      },
      {
        ease: Power4.easeOut,
        duration: 0.7,
        scaleX: 0,
      }
    )
  }
}
