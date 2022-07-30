import { FC } from 'react'
import { ABOUT_COMING_SOON_MESSAGE } from '../../../../content/about/start'
import styles from './InDevelopmentPlaceholder.module.scss'

export const InDevelopmentPlaceholder: FC = () => (
  <section className={styles.wrapper}>
    <h1 className={styles.message}>{ABOUT_COMING_SOON_MESSAGE}</h1>
  </section>
)
