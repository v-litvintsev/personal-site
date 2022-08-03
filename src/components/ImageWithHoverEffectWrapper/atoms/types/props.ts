import { StaticImageData } from 'next/image'
import { Dispatch, SetStateAction } from 'react'

export interface IImageHoverEffectWrapperProps {
  image1: StaticImageData
  image2: StaticImageData
  displacementImage: StaticImageData
  setEffect?: Dispatch<SetStateAction<any>>
}

export interface IImageHoverEffectArgs extends IImageHoverEffectWrapperProps {
  parentNode: HTMLDivElement | null
}
