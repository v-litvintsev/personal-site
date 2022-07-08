import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { StartSectionMobileBgText } from '../../../../../assets/svgs/bg-text/StartSectionBgTextSvg'
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
          <StartSectionMobileBgText />
        </div>
        <div className={styles.line2}>
          <StartSectionMobileBgText />
        </div>
        <div className={styles.line3}>
          <StartSectionMobileBgText />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.line1}>
          <StartSectionMobileBgText />
        </div>
        <div className={styles.line2}>
          <StartSectionMobileBgText />
        </div>
      </div>
    )
  }

  if (isDesktop) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.line1}>
          <StartSectionMobileBgText />
        </div>
      </div>
    )
  }

  return null
})
