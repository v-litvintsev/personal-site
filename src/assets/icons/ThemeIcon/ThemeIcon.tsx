import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import appState from '../../../services/store/appState'
import styles from './ThemeIcon.module.scss'

export const ThemeIcon: FC = observer(() => {
  const isMobile = appState.viewportWidth === 'mobile'
  const size = isMobile ? 25 : 32

  return (
    <svg
      className={styles.icon}
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.path}
        d="M1.5 16C1.5 7.99187 7.99187 1.5 16 1.5H16.8132C17.6433 1.5 18.4562 1.56961 19.2466 1.70307C16.3805 3.79206 14.5118 7.17711 14.5118 11C14.5118 17.3527 19.6693 22.5 26.0191 22.5C27.4659 22.5 28.8532 22.2322 30.132 21.7426C27.9071 26.896 22.7793 30.5 16.8132 30.5H16C7.99187 30.5 1.5 24.0081 1.5 16Z"
        stroke="var(--primary)"
        strokeWidth="3"
      />
    </svg>
  )
})
