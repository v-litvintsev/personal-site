import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import appState from '../../../services/store/appState'
import { SMOOTH_SCROLL_CONTAINER_CLASS_NAME } from '../atoms/constants/classNames'
import { useMobileScrollHandler } from '../atoms/hooks/useMobileScrollHandler'
import { useSmoothScrollSetter } from '../atoms/hooks/useSmoothScrollSetter'

interface IProps {
  children: ReactElement | ReactElement[]
}

export const SmoothScrollWrapper: FC<IProps> = observer(({ children }) => {
  const isMobile = appState.screenType === 'touchpad'

  useSmoothScrollSetter()
  useMobileScrollHandler(isMobile)

  return <div className={SMOOTH_SCROLL_CONTAINER_CLASS_NAME}>{children}</div>
})
