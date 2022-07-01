import classNames from 'classnames'
import { FC } from 'react'
import { splitIntoElements } from '../../../../services/utils/splitIntoElements'
import ThemeCheckbox from '../../molecules/ThemeCheckbox'
import styles from './StartSection.module.scss'

export const StartSection: FC = () => (
  <section className={styles.wrapper}>
    <div className={styles.mainInfo}>
      <div className={classNames(styles.decor, styles.decor_1)} />
      <div className={classNames(styles.decor, styles.decor_2)} />
      <h4 className={classNames(styles.secondary, styles.secondary_1)}>
        creative
      </h4>
      <div className={styles.title}>
        <h1 className={styles.titleRow}>
          {splitIntoElements(
            'developer'.split(''),
            classNames(styles.titleSymbol)
          )}
        </h1>
        <h1 className={styles.titleRow}>
          {splitIntoElements(
            '& designer'.split(''),
            classNames(styles.titleSymbol)
          )}
        </h1>
      </div>
      <h4 className={classNames(styles.secondary, styles.secondary_2)}>
        from russia
      </h4>
    </div>
    <div className={styles.scrollDownMessage}>scroll down</div>
    <div className={styles.themeCheckbox}>
      <ThemeCheckbox />
    </div>
  </section>
)
