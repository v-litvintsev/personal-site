import { FC, useEffect } from 'react'
import appState from '../../../../services/store/appState'
import styles from './InDevelopmentPlaceholder.module.scss'

export const InDevelopmentPlaceholder: FC = () => {
  useEffect(() => {
    appState.setIsStartAnimationPlayed(true)
  }, [])

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.message}>Coming soon...</h1>
    </section>
  )
}
