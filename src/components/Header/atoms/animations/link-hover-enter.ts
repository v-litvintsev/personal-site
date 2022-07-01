import { MutableRefObject } from 'react'
import gsap, { Power4 } from 'gsap'

export const linkHoverEnterAnimation = (
  decorRef: MutableRefObject<HTMLSpanElement | null>
) => {
  if (decorRef.current) {
    gsap.fromTo(
      decorRef.current,
      {
        transformOrigin: 'left',
        scaleX: 0,
      },
      {
        ease: Power4.easeOut,
        duration: 0.7,
        scaleX: 1,
      }
    )
  }
}
