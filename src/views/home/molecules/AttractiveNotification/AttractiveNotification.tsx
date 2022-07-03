import classNames from 'classnames'
import { FC, useEffect, useState } from 'react'
import MailLinkIcon from '../../../../assets/svgs/MailLinkIcon'
import MessagesCrossIcon from '../../../../assets/svgs/MessagesCrossIcon'
import NotificationBell from '../../../../assets/svgs/NotificationBell'
import { MY_MAIL } from '../../../../constants/my-mail'
import { localStorageUtility } from '../../../../services/utils/localStorageUtility'
import {
  ELocalStorageFields,
  LOCAL_STORAGE_VALUES,
} from '../../../../types/local-storage'
import styles from './AttractiveNotification.module.scss'

interface IProps {
  appearanceDelay: number
}

export const AttractiveNotification: FC<IProps> = ({ appearanceDelay }) => {
  const [isActive, setIsActive] = useState(false)
  const [isNotChecked, setIsNotChecked] = useState(false)

  useEffect(() => {
    setIsNotChecked(
      !localStorageUtility.get(ELocalStorageFields.isNotificationMessageChecked)
    )
  }, [])

  const handleOpenButtonClick = () => {
    setIsNotChecked(false)
    localStorageUtility.set(
      ELocalStorageFields.isNotificationMessageChecked,
      LOCAL_STORAGE_VALUES.isNotificationMessageChecked.checked
    )
    setIsActive(true)
  }

  const handleCrossClick = () => setIsActive(false)

  return (
    <div
      className={classNames(
        styles.container,
        isActive && styles.container_active
      )}
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
            <button className={styles.crossButton} onClick={handleCrossClick}>
              <MessagesCrossIcon />
            </button>
          </div>
        </div>
        <div className={styles.message}>
          <p className={styles.messageText}>
            I&apos;m available for freelance work now
          </p>
          <p className={styles.messageText}>Tell me about your project</p>
          <div className={styles.messageMail}>
            <a href={`mailto:${MY_MAIL}`}>
              <MailLinkIcon />
              <span className={styles.messageMailText}>
                {MY_MAIL}
                <span className={styles.messageMailDecor} />
              </span>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
