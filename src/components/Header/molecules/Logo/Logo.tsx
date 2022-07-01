import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, MouseEventHandler } from 'react'
import appState from '../../../../services/store/appState'
import styles from './Logo.module.scss'

export const Logo: FC = observer(() => {
  const router = useRouter()

  const isDarkTheme = appState.theme === 'dark'

  const handleClick: MouseEventHandler = (event) => {
    if (router.pathname === '/') {
      event.preventDefault()

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <Link href={'/'} className={styles.link}>
      <a className={styles.link} onClick={handleClick}>
        <span
          className={classNames(
            styles.wrapper,
            isDarkTheme && styles.wrapper_dark
          )}
        >
          <span className={classNames(styles.namePart, styles.namePart_1)}>
            vladimir
          </span>
          <span className={classNames(styles.namePart, styles.namePart_2)}>
            litvintsev
          </span>
        </span>
      </a>
    </Link>
  )
})
