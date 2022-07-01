import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import appState from '../../../services/store/appState'
import Logo from '../organisms/Logo'
import Nav from '../organisms/Nav'
import styles from './Header.module.scss'

export const Header: FC = observer(() => (
  <header
    className={classNames(
      styles.header,
      !appState.isScrolledUp && styles.header_disabled
    )}
  >
    <Logo />
    <Nav />
  </header>
))
