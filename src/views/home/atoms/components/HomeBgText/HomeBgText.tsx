import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { StartSectionMobileBgTextSvg } from '../../../../../assets/svgs/bg-text/StartSectionBgTextSvg'
import appState from '../../../../../services/store/appState'
import styles from './HomeBgText.module.scss'

export const HomeBgText: FC = observer(() => {
  const isMobile = appState.viewportWidth === 'mobile'
  const isTablet = appState.viewportWidth === 'tablet'
  const isDesktop = appState.viewportWidth === 'desktop'

  if (isMobile) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.line1}>
          <StartSectionMobileBgTextSvg />
        </div>
        <div className={styles.line2}>
          <StartSectionMobileBgTextSvg />
        </div>
        <div className={styles.line3}>
          <StartSectionMobileBgTextSvg />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.line1}>
          <StartSectionMobileBgTextSvg />
        </div>
        <div className={styles.line2}>
          <StartSectionMobileBgTextSvg />
        </div>
      </div>
    )
  }

  if (isDesktop) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.line1}>
          <StartSectionMobileBgTextSvg />
        </div>
      </div>
    )
  }

  return null
})
