import { useEffect } from 'react'
import { IImageHoverEffectArgs } from '../types/props'

export const useImageHoverEffectSetter = ({
  parentNode,
  image1: { src: image1 },
  image2: { src: image2 },
  displacementImage: { src: displacementImage },
  setEffect,
}: IImageHoverEffectArgs) => {
  useEffect(() => {
    ;(async () => {
      if (parentNode) {
        const HoverEffect = (await import('hover-effect')).default

        const effect = new HoverEffect({
          parent: parentNode,
          intensity: 0.17,
          image1,
          image2,
          displacementImage,
          speedIn: 1.4,
          speedOut: 1.1,
        })

        if (setEffect) {
          setEffect(effect)
        }
      }
    })()
  }, [image1, image2, displacementImage, parentNode, setEffect])
}
