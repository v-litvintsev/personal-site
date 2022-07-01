import { FC } from 'react'
import { Logo } from '../molecules/Logo/Logo'
import { Nav } from '../molecules/Nav/Nav'
import styles from './Header.module.scss'

export const Header: FC = () => (
  <header className={styles.header}>
    <Logo />
    <Nav />
  </header>
)
