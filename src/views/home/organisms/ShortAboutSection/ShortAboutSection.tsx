import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { SHORT_ABOUT_TEXT } from '../../../../content/home/short-about'
import { useAnimationSetter } from '../../../../services/hooks/useAnimationSetter'
import { shortAboutSectionAnimation } from '../../atoms/animations/short-about-section-animation'
import { SHORT_ABOUT_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/short-about-section-animation-classnames'
import { splitAboutTextIntoElements } from '../../atoms/utils/splitAboutTextIntoElements'
import styles from './ShortAboutSection.module.scss'

export const ShortAboutSection: FC = observer(() => {
  useAnimationSetter(shortAboutSectionAnimation)

  return (
    <section className={styles.sectionWrapper}>
      <div
        className={classNames(
          styles.content,
          SHORT_ABOUT_SECTION_ANIMATION_CLASSNAMES.wrapper
        )}
      >
        <div
          className={classNames(
            styles.text,
            SHORT_ABOUT_SECTION_ANIMATION_CLASSNAMES.text
          )}
        >
          {splitAboutTextIntoElements(
            SHORT_ABOUT_TEXT,
            classNames(
              styles.word,
              SHORT_ABOUT_SECTION_ANIMATION_CLASSNAMES.word
            )
          )}
        </div>
      </div>
    </section>
  )
})
