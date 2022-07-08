import { StaticImageData } from 'next/image'
import { ReactElement } from 'react'

export interface IProject {
  domain: string
  link: string
  tags: string[]
  previewImage: StaticImageData
  mobileBgText: ReactElement
  isMobileBgTextNotCentered?: boolean
}
