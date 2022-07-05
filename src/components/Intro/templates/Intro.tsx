import classNames from 'classnames'
import { FC } from 'react'
import styles from './Intro.module.scss'
import { splitIntoElements } from '../../../services/utils/splitIntoElements'
import { INTRO_ANIMATION_CLASSNAMES } from '../atoms/constants/animation-classnames'
import { useIntroInitializer } from '../atoms/hooks/useIntroInitializer'
import { observer } from 'mobx-react-lite'

export const Intro: FC = observer(() => {
  const isAnimationPlaying = useIntroInitializer()

  if (!isAnimationPlaying) {
    return null
  }

  return (
    <div
      className={classNames(
        styles.container,
        INTRO_ANIMATION_CLASSNAMES.container
      )}
    >
      <div
        className={classNames(
          styles.name,
          true && 'styles.name_loaded',
          INTRO_ANIMATION_CLASSNAMES.contentWrapper
        )}
      >
        <h2 className={styles.row}>
          <span className={styles.namePart}>
            {splitIntoElements(
              'vladimir'.split(''),
              classNames(
                INTRO_ANIMATION_CLASSNAMES.nameLetter1,
                styles.nameSymbol
              )
            )}
          </span>
          <span
            className={classNames(
              styles.decor,
              styles.decor_1,
              INTRO_ANIMATION_CLASSNAMES.decor1
            )}
          />
        </h2>
        <h2 className={classNames(styles.row, styles.row_second)}>
          <span
            className={classNames(
              styles.decor,
              styles.decor_2,
              INTRO_ANIMATION_CLASSNAMES.decor2
            )}
          />
          <span className={styles.namePart}>
            {splitIntoElements(
              'litvintsev'.split(''),
              classNames(
                INTRO_ANIMATION_CLASSNAMES.nameLetter2,
                styles.nameSymbol
              )
            )}
          </span>
        </h2>
      </div>
    </div>
  )
})
