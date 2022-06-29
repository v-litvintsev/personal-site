import { FC, ReactElement } from 'react'
import { SMOOTH_SCROLL_CONTAINER_CLASS_NAME } from '../atoms/constants/classNames'
import { useSmoothScrollSetter } from '../atoms/hooks/useSmoothScrollSetter'

interface IProps {
  children: ReactElement | ReactElement[]
}

export const DesktopScroll: FC<IProps> = ({ children }) => {
  const wrapperRef = useSmoothScrollSetter()

  return (
    <div ref={wrapperRef} className={SMOOTH_SCROLL_CONTAINER_CLASS_NAME}>
      {children}
    </div>
  )
}
