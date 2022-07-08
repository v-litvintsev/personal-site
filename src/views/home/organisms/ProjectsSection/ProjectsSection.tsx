import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC, useEffect, useState } from 'react'
import { PROJECTS_SECTION_ITEMS } from '../../../../content/home/projects'
import { useAnimationSetter } from '../../../../services/hooks/useAnimationSetter'
import appState from '../../../../services/store/appState'
import { projectsSectionAnimation } from '../../atoms/animations/projects-section-animation'
import ProjectsBgText from '../../atoms/components/ProjectsBgText'
import { PROJECTS_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/projects-section-animation-classnames'
import DesktopProjectPreview from '../../molecules/DesktopProjectPreview'
import ProjectsItem from '../../molecules/ProjectsItem'
import styles from './ProjectsSection.module.scss'

export interface IPreviewCoords {
  x: number
  y: number
}

export const ProjectsSection: FC = observer(() => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null)
  const isDesktop = appState.viewportWidth === 'desktop'
  const [previewCoords, setPreviewCoords] = useState<IPreviewCoords>({
    x: 0,
    y: 0,
  })
  const [itemHeight, setItemHeight] = useState(0)

  useEffect(() => {
    setItemHeight(window.innerWidth * 0.11)
  }, [])

  useAnimationSetter(() => projectsSectionAnimation(isDesktop))

  const handleMouseEnterClosure = (index: number) => () =>
    setHoveredItemIndex(index)

  const handleMouseLeave = () => setHoveredItemIndex(null)

  return (
    <section
      className={classNames(
        styles.wrapper,
        PROJECTS_SECTION_ANIMATION_CLASSNAMES.wrapper
      )}
    >
      <div className={styles.bgTextWrapper}>
        <ProjectsBgText />
      </div>
      {PROJECTS_SECTION_ITEMS.map((project, index) => (
        <ProjectsItem
          key={index}
          decorClassName={styles.decor}
          decorActiveClassName={styles.decor_active}
          handleMouseEnter={handleMouseEnterClosure(index)}
          handleMouseLeave={handleMouseLeave}
          handleMouseMove={({ clientX, nativeEvent: { offsetY } }) => {
            setPreviewCoords({
              x: clientX,
              y: offsetY + itemHeight * index,
            })
          }}
          isDecorActive={
            hoveredItemIndex !== null &&
            (index === hoveredItemIndex || index - 1 === hoveredItemIndex)
          }
          {...project}
        />
      ))}
      <div className={styles.lastDecorContainer}>
        <div
          className={classNames(
            styles.decor,
            styles.decor_lastItem,
            hoveredItemIndex === PROJECTS_SECTION_ITEMS.length - 1 &&
              styles.decor_active,
            PROJECTS_SECTION_ANIMATION_CLASSNAMES.decor
          )}
        />
      </div>
      <DesktopProjectPreview
        isDesktop={isDesktop}
        coords={previewCoords}
        hoveredItemIndex={hoveredItemIndex}
      />
    </section>
  )
})
