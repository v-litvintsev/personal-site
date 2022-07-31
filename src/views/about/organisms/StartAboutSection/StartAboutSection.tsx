import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import { ABOUT_START_CONTENT } from '../../../../content/about/start'
import { MY_INITIALS } from '../../../../content/general-content'
import { useStartSectionAnimationsInitializer } from '../../../../services/hooks/useStartSectionAnimationsInitializer'
import appState from '../../../../services/store/appState'
import { aboutStartSectionAnimation } from '../../atoms/animations/about-start-section-animation'
import StartAboutBgText from '../../atoms/components/StartAboutBgText'
import { ABOUT_START_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/start-about-section-classnames'
import styles from './StartAboutSection.module.scss'

export const StartAboutSection: FC = observer(() => {
  useStartSectionAnimationsInitializer(aboutStartSectionAnimation)

  useEffect(() => {
    appState.setIsLogoHidden(true)

    return () => {
      appState.setIsLogoHidden(false)
    }
  }, [])

  return (
    <section className={styles.section}>
      <div
        className={classNames(
          styles.bgText,
          ABOUT_START_SECTION_ANIMATION_CLASSNAMES.bgText
        )}
      >
        <StartAboutBgText />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.name}>
            <h2 className={styles.nameRow}>
              <span
                className={classNames(
                  styles.namePart,
                  ABOUT_START_SECTION_ANIMATION_CLASSNAMES.namePart1
                )}
              >
                {MY_INITIALS.firstName}
              </span>
              <span
                className={classNames(
                  styles.nameDecor,
                  styles.nameDecor_1,
                  ABOUT_START_SECTION_ANIMATION_CLASSNAMES.nameDecor1
                )}
              />
            </h2>
            <h2 className={classNames(styles.nameRow, styles.nameRow_2)}>
              <span
                className={classNames(
                  styles.nameDecor,
                  styles.nameDecor_2,
                  ABOUT_START_SECTION_ANIMATION_CLASSNAMES.nameDecor2
                )}
              />
              <span
                className={classNames(
                  styles.namePart,
                  ABOUT_START_SECTION_ANIMATION_CLASSNAMES.namePart2
                )}
              >
                {MY_INITIALS.lastName}
              </span>
            </h2>
          </div>
          <div className={styles.info}>
            {ABOUT_START_CONTENT.infoItems.map((item) => (
              <p
                key={item}
                className={classNames(
                  styles.infoItem,
                  ABOUT_START_SECTION_ANIMATION_CLASSNAMES.infoItem
                )}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div
          className={classNames(
            styles.photo,
            ABOUT_START_SECTION_ANIMATION_CLASSNAMES.photo
          )}
        >
          <Image
            src={ABOUT_START_CONTENT.photo.src}
            alt={ABOUT_START_CONTENT.photo.alt}
            className={styles.photoImage}
          />
        </div>
      </div>
    </section>
  )
})
