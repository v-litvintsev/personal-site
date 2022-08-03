import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC, useState } from 'react'
import ImageWithHoverEffectWrapper from '../../../../components/ImageWithHoverEffectWrapper'
import { ABOUT_START_CONTENT } from '../../../../content/about/start'
import { MY_INITIALS } from '../../../../content/general-content'
import { useStartSectionAnimationsInitializer } from '../../../../services/hooks/useStartSectionAnimationsInitializer'
import { aboutStartSectionAnimation } from '../../atoms/animations/about-start-section-animation'
import AboutStartBgText from '../../atoms/components/AboutStartBgText'
import { ABOUT_START_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/about-start-section-classnames'
import { useAboutMobilePhotoEffectAnimationSetter } from '../../atoms/hooks/useAboutMobilePhotoEffectAnimationSetter'
import styles from './AboutStartSection.module.scss'

export const AboutStartSection: FC = observer(() => {
  const [photoEffect, setPhotoEffect] = useState<any | null>(null)

  useStartSectionAnimationsInitializer(aboutStartSectionAnimation)
  useAboutMobilePhotoEffectAnimationSetter(photoEffect)

  return (
    <section className={styles.section}>
      <div
        className={classNames(
          styles.bgText,
          ABOUT_START_SECTION_ANIMATION_CLASSNAMES.bgText
        )}
      >
        <AboutStartBgText />
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
        <div className={styles.photoContainer}>
          <div className={styles.photo}>
            <div
              className={classNames(
                styles.photoImage,
                ABOUT_START_SECTION_ANIMATION_CLASSNAMES.photoImage
              )}
            >
              <ImageWithHoverEffectWrapper
                displacementImage={ABOUT_START_CONTENT.photo.displacementImage}
                image1={ABOUT_START_CONTENT.photo.image1}
                image2={ABOUT_START_CONTENT.photo.image2}
                setEffect={setPhotoEffect}
              />
            </div>
            <img
              alt={ABOUT_START_CONTENT.photo.alt}
              className={styles.photoInvisibleImage}
            />
            <span
              className={classNames(
                styles.photoCover,
                ABOUT_START_SECTION_ANIMATION_CLASSNAMES.photoCover
              )}
            ></span>
          </div>
        </div>
      </div>
    </section>
  )
})
