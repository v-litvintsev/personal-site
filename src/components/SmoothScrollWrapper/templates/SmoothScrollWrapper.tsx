import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import appState from '../../../services/store/appState'
import { DesktopScroll } from '../molecules/DesktopScroll'

interface IProps {
  children: ReactElement | ReactElement[]
}

export const SmoothScrollWrapper: FC<IProps> = observer(({ children }) =>
  appState.screenType === 'mouse' && appState.viewportWidth === 'desktop' ? (
    <DesktopScroll>{children}</DesktopScroll>
  ) : (
    <>{children}</>
  )
)
