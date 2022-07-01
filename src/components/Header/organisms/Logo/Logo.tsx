import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, MouseEventHandler } from 'react'
import styles from './Logo.module.scss'

export const Logo: FC = () => {
  const router = useRouter()

  const handleClick: MouseEventHandler = (event) => {
    if (router.pathname === '/') {
      event.preventDefault()

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <Link href={'/'} className={styles.link}>
      <a className={styles.link} onClick={handleClick}>
        <span className={styles.wrapper}>
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
}
