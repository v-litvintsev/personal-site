import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { splitIntoElements } from '../../../../services/utils/splitIntoElements'
import HomeBgText from '../../atoms/components/HomeBgText'
import { START_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/start-section-animation-classnames'
import { useStartSectionAnimationsInitializer } from '../../atoms/hooks/useStartSectionAnimationsInitializer'
import AttractiveNotification from '../../molecules/AttractiveNotification'
import OtherLanguageLink from '../../molecules/OtherLanguageLink'
import ThemeCheckbox from '../../molecules/ThemeCheckbox'
import styles from './StartSection.module.scss'

export const StartSection: FC = observer(() => {
  useStartSectionAnimationsInitializer()

  return (
    <section className={styles.wrapper}>
      <div
        className={classNames(
          styles.bgText,
          START_SECTION_ANIMATION_CLASSNAMES.bgText
        )}
      >
        <HomeBgText />
      </div>
      <div className={styles.decorWrapper}>
        <div
          className={classNames(
            styles.decor,
            styles.decor_1,
            START_SECTION_ANIMATION_CLASSNAMES.decor1
          )}
        />
        <div
          className={classNames(
            styles.decor,
            styles.decor_2,
            START_SECTION_ANIMATION_CLASSNAMES.decor2
          )}
        />
      </div>
      <div className={styles.mainInfo}>
        <h4 className={classNames(styles.secondary, styles.secondary_1)}>
          {splitIntoElements(
            'creative'.split(''),
            classNames(
              styles.animationSpanElement,
              START_SECTION_ANIMATION_CLASSNAMES.descriptiveTextSymbol1
            )
          )}
        </h4>
        <div className={styles.title}>
          <h1 className={styles.titleRow}>
            <span
              className={classNames(
                styles.titleElement,
                START_SECTION_ANIMATION_CLASSNAMES.mainTextElement
              )}
            >
              developer
            </span>
          </h1>
          <h1 className={styles.titleRow}>
            <span
              className={classNames(
                styles.titleElement,
                START_SECTION_ANIMATION_CLASSNAMES.mainTextElement
              )}
            >
              &{' '}
            </span>
            <span
              className={classNames(
                styles.titleElement,
                START_SECTION_ANIMATION_CLASSNAMES.mainTextElement
              )}
            >
              designer
            </span>
          </h1>
        </div>
        <h4 className={classNames(styles.secondary, styles.secondary_2)}>
          {splitIntoElements(
            'from russia'.split(''),
            classNames(
              styles.animationSpanElement,
              START_SECTION_ANIMATION_CLASSNAMES.descriptiveTextSymbol2
            )
          )}
        </h4>
      </div>
      <div className={styles.scrollDownMessage}>
        {splitIntoElements(
          'scroll down'.split(''),
          classNames(
            styles.animationSpanElement,
            START_SECTION_ANIMATION_CLASSNAMES.scrollDownSymbol
          )
        )}
      </div>
      <div
        className={classNames(
          styles.themeCheckbox,
          START_SECTION_ANIMATION_CLASSNAMES.secondaryElement
        )}
      >
        <ThemeCheckbox />
      </div>
      <div className={START_SECTION_ANIMATION_CLASSNAMES.secondaryElement}>
        <OtherLanguageLink appearanceDelay={2} />
      </div>
      <div className={START_SECTION_ANIMATION_CLASSNAMES.secondaryElement}>
        <AttractiveNotification />
      </div>
    </section>
  )
})
