import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { AboutBgTextSvg } from '../../../../../assets/svgs/bg-text/AboutBgTextSvg'
import appState from '../../../../../services/store/appState'
import styles from './AboutStartBgText.module.scss'

export const AboutStartBgText: FC = observer(() => {
  const isMobile = appState.viewportWidth === 'mobile'
  const isTablet = appState.viewportWidth === 'tablet'
  const isDesktop = appState.viewportWidth === 'desktop'

  if (isMobile) {
    return (
      <div className={styles.wrapper}>
        <div className={classNames(styles.line, styles.line1)}>
          <AboutBgTextSvg />
        </div>
        <div className={classNames(styles.line, styles.line2)}>
          <AboutBgTextSvg />
        </div>
        <div className={classNames(styles.line, styles.line3)}>
          <AboutBgTextSvg />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className={styles.wrapper}>
        <div className={classNames(styles.line, styles.line1)}>
          <AboutBgTextSvg />
        </div>
        <div className={classNames(styles.line, styles.line2)}>
          <AboutBgTextSvg />
        </div>
      </div>
    )
  }

  if (isDesktop) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.line1}>
          <AboutBgTextSvg />
        </div>
      </div>
    )
  }

  return null
})
