import { FC } from 'react'
import { ThemeCheckbox } from '../../molecules/ThemeCheckbox'
import styles from './StartSection.module.scss'

export const StartSection: FC = () => (
  <section className={styles.wrapper}>
    <div className={styles.themeCheckbox}>
      <ThemeCheckbox />
    </div>
  </section>
)
