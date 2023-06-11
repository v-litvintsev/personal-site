import { observer } from 'mobx-react-lite'
import { FC, ReactElement } from 'react'
import { SMOOTH_SCROLL_CONTAINER_CLASS_NAME } from '../atoms/constants/classNames'
import { useMobileScrollHandler } from '../atoms/hooks/useMobileScrollHandler'
import { useSmoothScrollSetter } from '../atoms/hooks/useSmoothScrollSetter'

interface IProps {
  children: ReactElement | ReactElement[]
}

export const SmoothScrollWrapper: FC<IProps> = observer(({ children }) => {
  useSmoothScrollSetter()
  useMobileScrollHandler()

  return <div className={SMOOTH_SCROLL_CONTAINER_CLASS_NAME}>{children}</div>
})
