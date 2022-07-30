import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, MouseEventHandler } from 'react'
import { MY_INITIALS } from '../../../../content/general-content'
import appState from '../../../../services/store/appState'
import { EPaths } from '../../../../types/paths'
import styles from './Logo.module.scss'

export const Logo: FC = observer(() => {
  const router = useRouter()

  const handleClick: MouseEventHandler = (event) => {
    if (router.pathname === EPaths.home) {
      event.preventDefault()

      const isDesktop = appState.viewportWidth === 'desktop'

      if (isDesktop && appState.scroll) {
        appState.scroll.scrollTo(0, { duration: 300 })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <Link href={EPaths.home} className={styles.link}>
      <a
        className={classNames(
          styles.link,
          appState.isLogoHidden && styles.link_hidden
        )}
        onClick={handleClick}
      >
        <span className={styles.wrapper}>
          <span className={classNames(styles.namePart, styles.namePart_1)}>
            {MY_INITIALS.firstName}
          </span>
          <span className={classNames(styles.namePart, styles.namePart_2)}>
            {MY_INITIALS.lastName}
          </span>
        </span>
      </a>
    </Link>
  )
})
