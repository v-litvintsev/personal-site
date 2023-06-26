import classNames from 'classnames'
import { FC, useCallback, useEffect, useState } from 'react'
import MailLinkIcon from '../../../../assets/svgs/MailLinkIcon'
import MessagesCrossIcon from '../../../../assets/svgs/MessagesCrossIcon'
import NotificationBell from '../../../../assets/svgs/NotificationBell'
import { MY_MAIL } from '../../../../content/general-content'
import { START_SECTION_CONTENT } from '../../../../content/home/start'
import appState from '../../../../services/store/appState'
import { eventPropagationStopHandler } from '../../../../services/utils/eventPropagationStopHandler'
import { localStorageUtility } from '../../../../services/utils/localStorageUtility'
import {
  ELocalStorageFields,
  LOCAL_STORAGE_VALUES,
} from '../../../../types/local-storage'
import styles from './AttractiveNotification.module.scss'

export const AttractiveNotification: FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [isNotChecked, setIsNotChecked] = useState(false)

  const closeNotification = useCallback(() => setIsActive(false), [])

  useEffect(() => {
    setIsNotChecked(
      !localStorageUtility.get(ELocalStorageFields.isNotificationMessageChecked)
    )

    appState.addClosePopupFunction(closeNotification)
  }, [closeNotification])

  const handleOpenButtonClick = () => {
    setIsNotChecked(false)
    localStorageUtility.set(
      ELocalStorageFields.isNotificationMessageChecked,
      LOCAL_STORAGE_VALUES.isNotificationMessageChecked.checked
    )
    setIsActive(true)
  }

  return (
    <div
      className={classNames(
        styles.container,
        isActive && styles.container_active
      )}
      onClick={eventPropagationStopHandler}
    >
      <div
        className={classNames(
          styles.openButtonContainer,
          isActive && styles.openButtonContainer_hidden
        )}
      >
        <span
          className={classNames(
            styles.buttonRippleDecor,
            isNotChecked && styles.buttonRippleDecor_notChecked
          )}
        />
        <div className={styles.buttonWrapper}>
          <button
            className={classNames(
              styles.button,
              isNotChecked && styles.button_notChecked
            )}
            onClick={handleOpenButtonClick}
          >
            <span className={styles.bellIconWrapper}>
              <NotificationBell />
            </span>
            <span
              className={classNames(
                styles.buttonDecor,
                isNotChecked && styles.buttonDecor_active
              )}
            />
          </button>
        </div>
      </div>
      <article
        className={classNames(
          styles.messageContainer,
          isActive && styles.messageContainer_active
        )}
      >
        <div
          className={classNames(
            styles.crossContainer,
            isActive && styles.crossContainer_active
          )}
        >
          <div className={styles.buttonWrapper}>
            <button
              tabIndex={isActive ? 0 : -1}
              className={styles.crossButton}
              onClick={closeNotification}
            >
              <MessagesCrossIcon />
            </button>
          </div>
        </div>
        <div className={styles.message}>
          <p className={styles.messageText}>
            {START_SECTION_CONTENT.attractiveNotification}
          </p>
          <p className={styles.messageText}>Tell me about your project</p>
          <div className={styles.messageMail}>
            <a href={`mailto:${MY_MAIL.actual}`}>
              <MailLinkIcon />
              <span className={styles.messageMailText}>
                {MY_MAIL.visible}
                <span className={styles.messageMailDecor} />
              </span>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
