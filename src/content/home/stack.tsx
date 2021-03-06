import { BackendBgTextSvg } from '../../assets/svgs/bg-text/stack/BackendBgTextSvg'
import { FrontendBgTextSvg } from '../../assets/svgs/bg-text/stack/FrontendBgTextSvg'
import { GSAPLogoSvg } from '../../assets/svgs/stack/GSAPLogoSvg'
import { MobxLogoSvg } from '../../assets/svgs/stack/MobxLogoSvg'
import { MongoDBLogoSvg } from '../../assets/svgs/stack/MongoDBLogoSvg'
import { NestJsLogoSvg } from '../../assets/svgs/stack/NestJsLogoSvg'
import { NextJsLogoSvg } from '../../assets/svgs/stack/NextJsLogoSvg'
import { TelegrafJsLogoSvg } from '../../assets/svgs/stack/TelegrafJsLogoSvg'
import { IStackTechnologies } from '../../types/content'

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
        name: 'mobx',
        siteLink: 'https://mobx.js.org/README.html',
        icon: <MobxLogoSvg />,
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
        name: 'mongodb',
        siteLink: 'https://www.mongodb.com/',
        icon: <MongoDBLogoSvg />,
      },
      {
        name: 'telegraf js',
        siteLink: 'https://telegraf.js.org/',
        icon: <TelegrafJsLogoSvg />,
      },
    ],
  },
}
