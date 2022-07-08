import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { START_SECTION_CONTENT } from '../../../../content/home/start'
import { splitIntoElements } from '../../../../services/utils/splitIntoElements'
import HomeBgText from '../../atoms/components/HomeBgText'
import { START_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/start-section-animation-classnames'
import { useStartScrollBlocker } from '../../atoms/hooks/useStartScrollBlocker'
import { useStartSectionAnimationsInitializer } from '../../atoms/hooks/useStartSectionAnimationsInitializer'
import AttractiveNotification from '../../molecules/AttractiveNotification'
import OtherLanguageLink from '../../molecules/OtherLanguageLink'
import ThemeCheckbox from '../../molecules/ThemeCheckbox'
import styles from './StartSection.module.scss'

export const StartSection: FC = observer(() => {
  useStartSectionAnimationsInitializer()
  useStartScrollBlocker()

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
      <div
        className={classNames(
          styles.decorWrapper,
          START_SECTION_ANIMATION_CLASSNAMES.fadeOutOnScrollElement
        )}
      >
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
      <div
        className={classNames(
          styles.mainInfo,
          START_SECTION_ANIMATION_CLASSNAMES.fadeOutOnScrollElement
        )}
      >
        <h4 className={classNames(styles.secondary, styles.secondary_1)}>
          {splitIntoElements(
            START_SECTION_CONTENT.mainInfo.secondaryText1.split(''),
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
              {START_SECTION_CONTENT.mainInfo.titlePart1}
            </span>
          </h1>
          <h1 className={styles.titleRow}>
            <span
              className={classNames(
                styles.titleElement,
                START_SECTION_ANIMATION_CLASSNAMES.mainTextElement
              )}
            >
              {START_SECTION_CONTENT.mainInfo.titlePart2}
            </span>
            <span
              className={classNames(
                styles.titleElement,
                START_SECTION_ANIMATION_CLASSNAMES.mainTextElement
              )}
            >
              {START_SECTION_CONTENT.mainInfo.titlePart3}
            </span>
          </h1>
        </div>
        <h4 className={classNames(styles.secondary, styles.secondary_2)}>
          {splitIntoElements(
            START_SECTION_CONTENT.mainInfo.secondaryText2.split(''),
            classNames(
              styles.animationSpanElement,
              START_SECTION_ANIMATION_CLASSNAMES.descriptiveTextSymbol2
            )
          )}
        </h4>
      </div>
      <div
        className={classNames(
          styles.scrollDownMessage,
          START_SECTION_ANIMATION_CLASSNAMES.fadeOutOnScrollElement
        )}
      >
        {splitIntoElements(
          START_SECTION_CONTENT.scrollDown.split(''),
          classNames(
            styles.animationSpanElement,
            START_SECTION_ANIMATION_CLASSNAMES.scrollDownSymbol
          )
        )}
      </div>
      <div
        className={classNames(
          styles.themeCheckbox,
          START_SECTION_ANIMATION_CLASSNAMES.secondaryElement,
          START_SECTION_ANIMATION_CLASSNAMES.fadeOutOnScrollElement
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
