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
  [key: string]: {
    technologies: ITechnologyItem[]
    bgText: ReactElement
  }
}

export interface IFooterNextPageLink {
  header: string
  path: string
}

export interface IFooterNextPageLinks {
  [key: string]: IFooterNextPageLink
}

export interface IContactLink {
  name: string
  link: string
}
