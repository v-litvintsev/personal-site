import classNames from 'classnames'
import { FC, useEffect, useRef } from 'react'
import { ProjectsSectionBgTextSvg } from '../../../../../assets/svgs/bg-text/ProjectsSectionBgTextSvg'
import appState from '../../../../../services/store/appState'
import styles from './ProjectsBgText.module.scss'

export const ProjectsBgText: FC = () => {
  const isDesktop = appState.viewportWidth === 'desktop'

  const problemAnimationBlockRef = useRef<HTMLDivElement | null>(null)

  // DIRTY HACK
  useEffect(() => {
    setTimeout(() => {
      if (problemAnimationBlockRef.current && isDesktop) {
        problemAnimationBlockRef.current.style.animation =
          'projects-block-text-animation 22s linear infinite'
      }
    }, 1000)
  }, [isDesktop])

  if (isDesktop) {
    return (
      <div className={classNames(styles.wrapper)}>
        <div className={styles.bgText}>
          <div className={styles.line} ref={problemAnimationBlockRef}>
            <ProjectsSectionBgTextSvg />
          </div>
        </div>
      </div>
    )
  }

  return null
}
