import classNames from 'classnames'
import { FC } from 'react'
import { ProjectsSectionBgText } from '../../../../../assets/svgs/bg-text/ProjectsSectionBgTextSvg'
import appState from '../../../../../services/store/appState'
import styles from './ProjectsBgText.module.scss'

export const ProjectsBgText: FC = () => {
  const isDesktop = appState.viewportWidth === 'desktop'

  if (isDesktop) {
    return (
      <div className={classNames(styles.wrapper)}>
        <div className={styles.bgText}>
          <div className={styles.line}>
            <ProjectsSectionBgText />
          </div>
        </div>
      </div>
    )
  }

  return null
}
