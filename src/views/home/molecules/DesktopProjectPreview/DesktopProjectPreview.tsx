import { FC, useEffect, useRef, useState } from 'react'
import { IPreviewCoords } from '../../organisms/ProjectsSection/ProjectsSection'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styles from './DesktopProjectPreview.module.scss'
import Image from 'next/image'
import classNames from 'classnames'
import { PROJECTS_SECTION_ITEMS } from '../../../../content/home/projects'
import { PROJECTS_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/projects-section-animation-classnames'
import gsap from 'gsap'

interface IProps {
  isDesktop: boolean
  coords: IPreviewCoords
  hoveredItemIndex: number | null
}

const TRANSITION_TIMING = 400

export const DesktopProjectPreview: FC<IProps> = ({
  isDesktop,
  coords,
  hoveredItemIndex,
}) => {
  const [previousItemIndex, setPreviousItemIndex] = useState(0)
  const previewRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (previewRef.current) {
      gsap.to(previewRef.current, {
        xPercent: -50,
        x: coords.x,
        y: coords.y,
      })
    }
  }, [coords.x, coords.y, previewRef])

  useEffect(() => {
    if (hoveredItemIndex !== null) {
      setPreviousItemIndex(hoveredItemIndex)
    }
  }, [hoveredItemIndex])

  if (isDesktop) {
    return (
      <div
        className={classNames(
          styles.preview,
          hoveredItemIndex === null && styles.preview_hidden,
          PROJECTS_SECTION_ANIMATION_CLASSNAMES.desktopPreview
        )}
        ref={previewRef}
      >
        <TransitionGroup>
          <CSSTransition
            key={
              hoveredItemIndex
                ? PROJECTS_SECTION_ITEMS[hoveredItemIndex].domain
                : PROJECTS_SECTION_ITEMS[previousItemIndex].domain
            }
            timeout={TRANSITION_TIMING}
            classNames={{
              enterActive: styles.previewWrapper_enterActive,
              exitActive: styles.previewWrapper_exitActive,
              enter: styles.previewWrapper_enter,
              exit: styles.previewWrapper_exit,
              appear: styles.previewWrapper_appear,
              appearActive: styles.previewWrapper_appearActive,
              exitDone: styles.previewWrapper_exitDone,
              enterDone: styles.previewWrapper_enterDone,
              appearDone: styles.previewWrapper_appearDone,
            }}
          >
            <span className={styles.previewWrapper}>
              <Image
                alt={
                  hoveredItemIndex
                    ? PROJECTS_SECTION_ITEMS[hoveredItemIndex].domain
                    : PROJECTS_SECTION_ITEMS[previousItemIndex].domain
                }
                src={
                  hoveredItemIndex
                    ? PROJECTS_SECTION_ITEMS[hoveredItemIndex].previewImage
                    : PROJECTS_SECTION_ITEMS[previousItemIndex].previewImage
                }
              />
            </span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }

  return null
}
