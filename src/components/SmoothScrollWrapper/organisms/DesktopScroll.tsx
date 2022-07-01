import { FC, ReactElement, useState } from 'react'
import { SMOOTH_SCROLL_CONTAINER_CLASS_NAME } from '../atoms/constants/classNames'
import { useSmoothScrollSetter } from '../atoms/hooks/useSmoothScrollSetter'
import ScrollIndicator from '../molecules/ScrollIndicator'

interface IProps {
  children: ReactElement | ReactElement[]
}

export const DesktopScroll: FC<IProps> = ({ children }) => {
  const [scrollProgressRatio, setScrollProgressRatio] = useState(0)
  const wrapperRef = useSmoothScrollSetter(setScrollProgressRatio)

  return (
    <>
      <div ref={wrapperRef} className={SMOOTH_SCROLL_CONTAINER_CLASS_NAME}>
        {children}
      </div>
      <ScrollIndicator scrollProgressRatio={scrollProgressRatio} />
    </>
  )
}
