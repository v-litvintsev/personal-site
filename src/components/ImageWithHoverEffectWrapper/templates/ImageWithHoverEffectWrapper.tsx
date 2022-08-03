import { FC, useRef } from 'react'
import { useImageHoverEffectSetter } from '../atoms/hooks/useImageHoverEffectSetter'
import { IImageHoverEffectWrapperProps } from '../atoms/types/props'
import styles from './ImageWithHoverEffectWrapper.module.scss'

export const ImageWithHoverEffectWrapper: FC<IImageHoverEffectWrapperProps> = (
  props
) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useImageHoverEffectSetter({ parentNode: containerRef.current, ...props })

  return <div ref={containerRef} className={styles.container} />
}
