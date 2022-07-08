import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { SHORT_ABOUT_TEXT } from '../../../../content/home/short-about'
import { useAnimationSetter } from '../../../../services/hooks/useAnimationSetter'
import appState from '../../../../services/store/appState'
import { shortAboutSectionAnimation } from '../../atoms/animations/short-about-section-animation'
import { SHORT_ABOUT_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/short-about-section-animation-classnames'
import { shortAboutTextParser } from '../../atoms/utils/shortAboutTextParser'
import styles from './ShortAboutSection.module.scss'

export const ShortAboutSection: FC = observer(() => {
  const isDesktop =
    appState.viewportWidth === 'desktop' && appState.screenType === 'mouse'
  const isTablet = appState.viewportWidth === 'tablet'

  useAnimationSetter(() => shortAboutSectionAnimation(isDesktop, isTablet))

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
          {shortAboutTextParser(SHORT_ABOUT_TEXT, {
            word: classNames(
              styles.word,
              SHORT_ABOUT_SECTION_ANIMATION_CLASSNAMES.word
            ),
            noWrapWord: styles.word_noWrap,
          })}
        </div>
      </div>
    </section>
  )
})
