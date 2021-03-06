import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useRef } from 'react'
import { linkHoverEnterAnimation } from '../../../../services/animations/link-hover-enter'
import { linkHoverExitAnimation } from '../../../../services/animations/link-hover-exit'
import styles from './DesktopNavLink.module.scss'

interface IProps {
  name: string
  path: string
}

export const DesktopNavLink: FC<IProps> = ({ name, path }) => {
  const decorRef = useRef<HTMLSpanElement | null>(null)
  const router = useRouter()

  const isLinkActive = router.pathname === path

  const onMouseEnter = () => linkHoverEnterAnimation(decorRef)
  const onMouseLeave = () => linkHoverExitAnimation(decorRef)

  return (
    <Link href={path}>
      <a
        className={classNames(styles.link, isLinkActive && styles.link_active)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span ref={decorRef} className={styles.decor} />
        {name}
      </a>
    </Link>
  )
}
