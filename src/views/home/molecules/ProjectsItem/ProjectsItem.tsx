import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { FC, MouseEventHandler, useRef, useState } from 'react'
import ProjectPreviewIcon from '../../../../assets/svgs/ProjectsPreviewIcon'
import {
  PROJECTS_PREVIEW_TEXT,
  PROJECTS_VIEW_LIVE_TEXT,
} from '../../../../content/home/projects'
import appState from '../../../../services/store/appState'
import { IProject } from '../../../../types/content'
import { PROJECTS_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/projects-section-animation-classnames'
import { IPreviewCoords } from '../../organisms/ProjectsSection/ProjectsSection'
import styles from './ProjectsItem.module.scss'

interface IProps extends IProject {
  decorClassName: string
  decorActiveClassName: string
  isDecorActive: boolean
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  handleMouseMove: MouseEventHandler
}

export const ProjectsItem: FC<IProps> = observer(
  ({
    domain,
    link,
    tags,
    mobileBgText,
    previewImage,
    isMobileBgTextNotCentered = false,
    decorClassName,
    decorActiveClassName,
    isDecorActive,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  }) => {
    const isDesktop = appState.viewportWidth === 'desktop'
    const [isPreviewActive, setIsPreviewActive] = useState(false)
    const previewImageRef = useRef<HTMLDivElement | null>(null)

    const handlePreviewClick = () => {
      setIsPreviewActive(!isPreviewActive)
    }

    if (isDesktop) {
      return (
        <article
          className={styles.item}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.desktopLink}
          >
            <div
              className={classNames(
                styles.desktopContent,
                PROJECTS_SECTION_ANIMATION_CLASSNAMES.content
              )}
            >
              <h3 className={styles.domain}>{domain}</h3>
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <div key={tag} className={styles.tagsItem}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={classNames(
                decorClassName,
                isDecorActive && decorActiveClassName,
                PROJECTS_SECTION_ANIMATION_CLASSNAMES.decor
              )}
            />
          </a>
        </article>
      )
    }

    return (
      <article className={styles.item}>
        <div
          className={classNames(
            styles.content,
            PROJECTS_SECTION_ANIMATION_CLASSNAMES.content
          )}
        >
          <div className={styles.mobileTitle}>
            <div
              className={classNames(
                styles.bgText,
                isMobileBgTextNotCentered && styles.bgText_notCentered
              )}
            >
              {mobileBgText}
            </div>
            <h3 className={styles.domain}>{domain}</h3>
          </div>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <div key={tag} className={styles.tagsItem}>
                {tag}
              </div>
            ))}
          </div>
          <div className={styles.preview}>
            <button
              className={styles.previewButton}
              onClick={handlePreviewClick}
            >
              <span
                className={classNames(
                  styles.previewButtonIcon,
                  isPreviewActive && styles.previewButtonIcon_active
                )}
              >
                <ProjectPreviewIcon />
              </span>
              <span className={styles.previewButtonText}>
                {PROJECTS_PREVIEW_TEXT}
              </span>
            </button>
            <div
              className={classNames(
                styles.previewImageWrapper,
                isPreviewActive && styles.previewImageWrapper_active
              )}
              onClick={handlePreviewClick}
              ref={previewImageRef}
              style={{
                height: isPreviewActive
                  ? previewImageRef.current?.scrollHeight ?? 0
                  : 0,
              }}
            >
              <Image
                className={styles.previewImage}
                alt={domain}
                src={previewImage}
              />
            </div>
          </div>
          <div className={styles.linkWrapper}>
            <button className={styles.linkButton}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span className={styles.linkText}>
                  {PROJECTS_VIEW_LIVE_TEXT}
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className={styles.decors}>
          <div
            className={classNames(
              styles.decor,
              PROJECTS_SECTION_ANIMATION_CLASSNAMES.decor
            )}
          />
        </div>
      </article>
    )
  }
)
