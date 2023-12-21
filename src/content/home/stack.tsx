import { BackendBgTextSvg } from '../../assets/svgs/bg-text/stack/BackendBgTextSvg'
import { FrontendBgTextSvg } from '../../assets/svgs/bg-text/stack/FrontendBgTextSvg'
import { GSAPLogoSvg } from '../../assets/svgs/stack/GSAPLogoSvg'
import { StrapiLogoSvg } from '../../assets/svgs/stack/StrapiLogoSvg'
import { NestJsLogoSvg } from '../../assets/svgs/stack/NestJsLogoSvg'
import { NextJsLogoSvg } from '../../assets/svgs/stack/NextJsLogoSvg'
import { TelegrafJsLogoSvg } from '../../assets/svgs/stack/TelegrafJsLogoSvg'
import { IStackTechnologies } from '../../types/content'
import { ThreeJsLogoSvg } from '../../assets/svgs/stack/ThreeJsLogoSvg'

export const STACK_SECTION_TITLE = 'technologies stack'

export const STACK_TECHNOLOGIES: IStackTechnologies = {
  FRONTEND: {
    bgText: <FrontendBgTextSvg />,
    technologies: [
      {
        name: 'next js',
        siteLink: 'https://nextjs.org/',
        icon: <NextJsLogoSvg />,
      },
      {
        name: 'three js',
        siteLink: 'https://mobx.js.org/README.html',
        icon: <ThreeJsLogoSvg />,
      },
      {
        name: 'gsap',
        siteLink: 'https://greensock.com/gsap/',
        icon: <GSAPLogoSvg />,
      },
    ],
  },
  BACKEND: {
    bgText: <BackendBgTextSvg />,
    technologies: [
      {
        name: 'nest js',
        siteLink: 'https://nestjs.com/',
        icon: <NestJsLogoSvg />,
      },
      {
        name: 'Strapi',
        siteLink: 'https://strapi.io/',
        icon: <StrapiLogoSvg />,
      },
      {
        name: 'telegraf js',
        siteLink: 'https://telegraf.js.org/',
        icon: <TelegrafJsLogoSvg />,
      },
    ],
  },
}
