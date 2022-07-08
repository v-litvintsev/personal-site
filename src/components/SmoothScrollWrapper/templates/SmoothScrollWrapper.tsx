import { observer } from 'mobx-react-lite'
import { FC, ReactElement, useEffect, useState } from 'react'
import appState from '../../../services/store/appState'
import { SMOOTH_SCROLL_CONTAINER_CLASS_NAME } from '../atoms/constants/classNames'
import { useMobileScrollHandler } from '../atoms/hooks/useMobileScrollHandler'
import { useSmoothScrollSetter } from '../atoms/hooks/useSmoothScrollSetter'
import ScrollIndicator from '../molecules/ScrollIndicator'

interface IProps {
  children: ReactElement | ReactElement[]
}

export const SmoothScrollWrapper: FC<IProps> = observer(({ children }) => {
  const isMobile = appState.screenType === 'touchpad'
  const [scrollProgressRatio, setScrollProgressRatio] = useState(0)
  const wrapperRef = useSmoothScrollSetter(setScrollProgressRatio)

  useMobileScrollHandler(isMobile)

  return (
    <>
      <div ref={wrapperRef} className={SMOOTH_SCROLL_CONTAINER_CLASS_NAME}>
        {children}
      </div>
      <ScrollIndicator scrollProgressRatio={scrollProgressRatio} />
    </>
  )
})
