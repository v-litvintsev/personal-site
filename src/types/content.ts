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

export interface ITechnologyItem {
  name: string
  icon: ReactElement
  siteLink: string
}

export interface IStackTechnologies {
  FRONTEND: {
    technologies: ITechnologyItem[]
    bgText: ReactElement
  }
  BACKEND: {
    technologies: ITechnologyItem[]
    bgText: ReactElement
  }
}
