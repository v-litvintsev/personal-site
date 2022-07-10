import { FC, useEffect } from 'react'
import { ABOUT_COMING_SOON_MESSAGE } from '../../../../content/about/start'
import appState from '../../../../services/store/appState'
import styles from './InDevelopmentPlaceholder.module.scss'

export const InDevelopmentPlaceholder: FC = () => {
  useEffect(() => {
    appState.setIsStartAnimationPlayed(true)
  }, [])

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.message}>{ABOUT_COMING_SOON_MESSAGE}</h1>
    </section>
  )
}
