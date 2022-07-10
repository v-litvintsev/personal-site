import { FC, useEffect, useRef } from 'react'
import styles from './ScrollIndicator.module.scss'
import gsap from 'gsap'
import { observer } from 'mobx-react-lite'
import appState from '../../../../services/store/appState'

export const ScrollIndicator: FC = observer(() => {
  const thumbRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (thumbRef.current) {
      gsap.set(thumbRef.current, {
        scaleY: appState.scrollProgressRatio,
      })
    }
    // eslint-disable-next-line
  }, [appState.scrollProgressRatio])

  return (
    <div className={styles.track}>
      <div className={styles.thumb} ref={thumbRef} />
    </div>
  )
})
