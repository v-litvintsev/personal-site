import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import appState from '../../../../services/store/appState'
import {
  LINK_NAME_BY_PREVIOUS_PATHNAME,
  LINK_PATH_BY_PREVIOUS_PATHNAME,
} from '../../atoms/constants/paths'
import DesktopNavLink from '../../molecules/DesktopNavLink'
import styles from './Nav.module.scss'

export const Nav: FC = observer(() => {
  const router = useRouter()

  const isMobile = appState.viewportWidth !== 'desktop'

  if (isMobile) {
    const linkName = LINK_NAME_BY_PREVIOUS_PATHNAME[router.pathname]
    const linkPath = LINK_PATH_BY_PREVIOUS_PATHNAME[router.pathname] ?? ''

    return (
      <nav>
        <Link href={linkPath}>
          <a className={styles.mobileLink}>
            {linkName}
            <span className={styles.mobileLinkDecor} />
          </a>
        </Link>
      </nav>
    )
  }

  return (
    <nav className={styles.nav}>
      <DesktopNavLink name="home" path="/" />
      <DesktopNavLink name="about" path="/about" />
    </nav>
  )
})
