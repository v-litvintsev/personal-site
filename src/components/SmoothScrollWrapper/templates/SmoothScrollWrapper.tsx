import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import appState from '../../../services/store/appState'
import { useMobileScrollHandler } from '../atoms/hooks/useMobileScrollHandler'
import { DesktopScroll } from '../organisms/DesktopScroll'

interface IProps {
  children: ReactElement | ReactElement[]
}

export const SmoothScrollWrapper: FC<IProps> = observer(({ children }) => {
  const isDesktop = appState.screenType === 'mouse'
  const isMobile = appState.screenType === 'touchpad'

  useMobileScrollHandler(isMobile)

  return isDesktop ? <DesktopScroll>{children}</DesktopScroll> : <>{children}</>
})
