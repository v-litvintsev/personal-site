import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC, useEffect, useRef, useState } from 'react'
import MessagesCrossIcon from '../../../../assets/svgs/MessagesCrossIcon'
import { linkHoverEnterAnimation } from '../../../../services/animations/link-hover-enter'
import { OTHER_LANGUAGE_LINK } from '../../../../constants/other-language-link'
import appState from '../../../../services/store/appState'
import styles from './OtherLanguageLink.module.scss'
import { linkHoverExitAnimation } from '../../../../services/animations/link-hover-exit'
import { sessionStorageUtility } from '../../../../services/utils/sessionStorageUtility'
import {
  ESessionStorageFields,
  SESSION_STORAGE_VALUES,
} from '../../../../types/session-storage'

interface IProps {
  appearanceDelay: number
}

export const OtherLanguageLink: FC<IProps> = observer(({ appearanceDelay }) => {
  const [isActive, setIsActive] = useState(false)
  const isDesktop = appState.viewportWidth === 'desktop'
  const decorRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const isLinkClosedBefore = !!sessionStorageUtility.get(
      ESessionStorageFields.isOtherLanguageLinkClosed
    )

    if (appState.isStartAnimationPlayed) {
      setTimeout(() => {
        setIsActive(!isLinkClosedBefore)
      }, appearanceDelay * 1000)
    }

    // eslint-disable-next-line
  }, [appearanceDelay, appState.isStartAnimationPlayed])

  const handleClose = () => {
    sessionStorageUtility.set(
      ESessionStorageFields.isOtherLanguageLinkClosed,
      SESSION_STORAGE_VALUES.isOtherLanguageLinkClosed.closed
    )

    setIsActive(false)
  }

  const onLinkMouseEnter = () => linkHoverEnterAnimation(decorRef)
  const onLinkMouseLeave = () => linkHoverExitAnimation(decorRef)

  if (isDesktop) {
    return (
      <div
        className={classNames(
          styles.desktopContainer,
          isActive && styles.desktopContainer_active
        )}
      >
        <button className={styles.desktopCross} onClick={handleClose}>
          <MessagesCrossIcon />
        </button>
        <a
          className={styles.desktopLink}
          href={OTHER_LANGUAGE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={onLinkMouseEnter}
          onMouseLeave={onLinkMouseLeave}
        >
          <span className={styles.desktopLinkText}>ru версия</span>
          <span ref={decorRef} className={styles.desktopLinkDecor} />
        </a>
      </div>
    )
  }

  return (
    <div
      className={classNames(
        styles.container,
        isActive && styles.container_active
      )}
    >
      <div className={styles.crossWrapper}>
        <button className={styles.cross} onClick={handleClose}>
          <MessagesCrossIcon />
        </button>
      </div>
      <a
        className={styles.link}
        href={OTHER_LANGUAGE_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.linkBg} />
        <span className={styles.linkText}>
          ru версия<span className={styles.linkTextDecor}></span>
        </span>
      </a>
    </div>
  )
})
