import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import {
  STACK_SECTION_TITLE,
  STACK_TECHNOLOGIES,
} from '../../../../content/home/stack'
import { useAnimationSetter } from '../../../../services/hooks/useAnimationSetter'
import appState from '../../../../services/store/appState'
import { splitIntoElements } from '../../../../services/utils/splitIntoElements'
import { stackSectionAnimation } from '../../atoms/animations/stack-section-animation'
import { STACK_SECTION_ANIMATION_CLASSNAMES } from '../../atoms/constants/stack-section-animation-classnames'
import TechnologiesStackItem from '../../molecules/TechnologiesStackItem'
import styles from './StackSection.module.scss'

export const StackSection: FC = observer(() => {
  const isMobile = appState.viewportWidth === 'mobile'

  useAnimationSetter(() => stackSectionAnimation(isMobile))

  return (
    <section
      className={classNames(
        styles.sectionWrapper,
        STACK_SECTION_ANIMATION_CLASSNAMES.wrapper
      )}
    >
      <h1 className={styles.title}>
        {splitIntoElements(
          STACK_SECTION_TITLE.split(''),
          classNames(
            styles.titleSymbol,
            STACK_SECTION_ANIMATION_CLASSNAMES.titleSymbol
          )
        )}
      </h1>
      <div className={styles.content}>
        <TechnologiesStackItem {...STACK_TECHNOLOGIES.FRONTEND} />
        <div
          className={classNames(
            styles.decor,
            STACK_SECTION_ANIMATION_CLASSNAMES.decor
          )}
        />
        <TechnologiesStackItem {...STACK_TECHNOLOGIES.BACKEND} />
      </div>
    </section>
  )
})
