import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { FooterBgTextSvg } from '../../../../../assets/svgs/bg-text/FooterBgTextSvg'
import appState from '../../../../../services/store/appState'
import styles from './FooterBgText.module.scss'

export const FooterBgText: FC = observer(() => {
  const isMobile = appState.viewportWidth === 'mobile'

  if (isMobile) {
    return (
      <div className={styles.wrapper}>
        <div className={classNames(styles.line, styles.line1)}>
          <FooterBgTextSvg isMobile={isMobile} />
        </div>
        <div className={classNames(styles.line, styles.line2)}>
          <FooterBgTextSvg isMobile={isMobile} />
        </div>
        <div className={classNames(styles.line, styles.line3)}>
          <FooterBgTextSvg isMobile={isMobile} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.line, styles.line1)}>
        <FooterBgTextSvg isMobile={isMobile} />
      </div>
      <div className={classNames(styles.line, styles.line2)}>
        <FooterBgTextSvg isMobile={isMobile} />
      </div>
    </div>
  )
})
