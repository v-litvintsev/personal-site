import { FC, useState } from 'react'
import { useImageHoverEffectSetter } from '../atoms/hooks/useImageHoverEffectSetter'
import { IImageHoverEffectWrapperProps } from '../atoms/types/props'
import styles from './ImageWithHoverEffectWrapper.module.scss'

export const ImageWithHoverEffectWrapper: FC<IImageHoverEffectWrapperProps> = (
  props
) => {
  const [effectContainer, setEffectContainer] = useState<HTMLDivElement | null>(
    null
  )

  useImageHoverEffectSetter({ parentNode: effectContainer, ...props })

  return <div ref={setEffectContainer} className={styles.container} />
}
