import { IProject } from '../../types/content'
import manskiyDistrictPreview from '../../assets/images/projects/manskiy-district.jpg'
import timingwebPreview from '../../assets/images/projects/timingweb.png'
import sktManskiyDistrictPreview from '../../assets/images/projects/skt.manskiy-district.jpg'
import { MasnkiyDistrictBgTextSvg } from '../../assets/svgs/bg-text/projects/ManskiyDistrictBgTextSvg'
import { SktManskiyDistrictBgTextSvg } from '../../assets/svgs/bg-text/projects/SktManskiyDistrictBgTextSvg'
import { TimingWebBgTextSvg } from '../../assets/svgs/bg-text/projects/TimingWebBgTextSvg'

const PROJECT_TAGS = {
  design: 'UI / UX Design',
  frontend: 'Frontend',
  backend: 'Backend',
  chatBot: 'Chat bot',
}

export const PROJECTS_SECTION_ITEMS: IProject[] = [
  {
    domain: 'манский-район.рф',
    link: 'https://манский-район.рф',
    tags: [
      PROJECT_TAGS.design,
      PROJECT_TAGS.frontend,
      `${PROJECT_TAGS.backend} & ${PROJECT_TAGS.chatBot}`,
    ],
    previewImage: manskiyDistrictPreview,
    mobileBgText: <MasnkiyDistrictBgTextSvg />,
    isMobileBgTextNotCentered: true,
  },
  {
    domain: 'timingweb.com',
    link: 'https://timingweb.com',
    tags: [PROJECT_TAGS.design, PROJECT_TAGS.frontend],
    previewImage: timingwebPreview,
    mobileBgText: <TimingWebBgTextSvg />,
  },
  {
    domain: 'скт.манский-район.рф',
    link: 'https://скт.манский-район.рф',
    tags: [
      PROJECT_TAGS.frontend,
      `${PROJECT_TAGS.backend} & ${PROJECT_TAGS.chatBot}`,
    ],
    previewImage: sktManskiyDistrictPreview,
    mobileBgText: <SktManskiyDistrictBgTextSvg />,
    isMobileBgTextNotCentered: true,
  },
]

export const PROJECTS_VIEW_LIVE_TEXT = 'view live'

export const PROJECTS_PREVIEW_TEXT = 'preview'
