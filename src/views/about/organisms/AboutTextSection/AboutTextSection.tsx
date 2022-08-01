import classNames from 'classnames'
import { FC } from 'react'
import { ABOUT_TEXT } from '../../../../content/about/text'
import { useAnimationSetter } from '../../../../services/hooks/useAnimationSetter'
import { splitAboutTextIntoElements } from '../../../home/atoms/utils/splitAboutTextIntoElements'
import { aboutTextSectionAnimation } from '../../atoms/animations/about-text-section-animation'
import { ABOUT_TEXT_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/about-text-section-classnames'
import styles from './AboutTextSection.module.scss'

export const AboutTextSection: FC = () => {
  useAnimationSetter(aboutTextSectionAnimation)

  return (
    <section
      className={classNames(
        styles.section,
        ABOUT_TEXT_SECTION_ANIMATION_CLASSNAMES.wrapper
      )}
    >
      <p className={styles.text}>
        {splitAboutTextIntoElements(
          ABOUT_TEXT,
          classNames(styles.word, ABOUT_TEXT_SECTION_ANIMATION_CLASSNAMES.word)
        )}
      </p>
    </section>
  )
}
