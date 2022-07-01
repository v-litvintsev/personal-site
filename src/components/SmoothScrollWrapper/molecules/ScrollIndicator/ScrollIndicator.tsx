import { FC, MutableRefObject, useEffect, useRef } from 'react'
import styles from './ScrollIndicator.module.scss'
import gsap from 'gsap'

interface IProps {
  scrollProgressRatio: number
}

export const ScrollIndicator: FC<IProps> = ({ scrollProgressRatio }) => {
  const thumbRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (thumbRef.current) {
      gsap.set(thumbRef.current, {
        scaleY: scrollProgressRatio,
      })
    }
  }, [scrollProgressRatio])

  return (
    <div className={styles.track}>
      <div className={styles.thumb} ref={thumbRef} />
    </div>
  )
}
