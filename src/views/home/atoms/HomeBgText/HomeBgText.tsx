import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { StartSectionMobileBgText } from '../../../../assets/svgs/bg-text/StartSectionBgText'
import appState from '../../../../services/store/appState'
import styles from './HomeBgText.module.scss'

export const HomeBgText: FC = observer(() => {
  const isMobile = appState.viewportWidth === 'mobile'
  const isTablet = appState.viewportWidth === 'tablet'
  const isDesktop = appState.viewportWidth === 'desktop'

  if (isMobile) {
    return (
      <div className={styles.wrapper}>
        <StartSectionMobileBgText />
        <StartSectionMobileBgText />
        <StartSectionMobileBgText />
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className={styles.wrapper}>
        <StartSectionMobileBgText />
        <StartSectionMobileBgText />
      </div>
    )
  }

  if (isDesktop) {
    return (
      <div className={styles.wrapper}>
        <StartSectionMobileBgText />
      </div>
    )
  }

  return null
})
