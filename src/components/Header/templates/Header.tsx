import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import appState from '../../../services/store/appState'
import Logo from '../organisms/Logo'
import Nav from '../organisms/Nav'
import styles from './Header.module.scss'

export const Header: FC = observer(() => {
  const isMobile = appState.screenType === 'touchpad'

  return (
    <header
      className={classNames(
        styles.header,
        !appState.isScrolledUp && isMobile && styles.header_disabled
      )}
    >
      <div className={styles.item}>
        <Logo />
      </div>
      <div className={styles.item}>
        <Nav />
      </div>
    </header>
  )
})
