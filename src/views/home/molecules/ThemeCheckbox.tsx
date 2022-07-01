import { observer } from 'mobx-react-lite'
import { ChangeEventHandler, FC } from 'react'
import ThemeIcon from '../../../assets/icons/ThemeIcon'
import appState from '../../../services/store/appState'
import { setTheme } from '../../../services/utils/setTheme'
import styles from './ThemeCheckbox.module.scss'

export const ThemeCheckbox: FC = observer(() => {
  const handleChange: ChangeEventHandler = () => {
    setTheme(appState.theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={styles.wrapper}>
      <label>
        <input
          onChange={handleChange}
          type="checkbox"
          className={styles.input}
        />
        <div className={styles.checkbox}>
          <div className={styles.checkboxIndicator} />
        </div>
      </label>
      <ThemeIcon />
    </div>
  )
})
