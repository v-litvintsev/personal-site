import { IProject } from '../../types/content'
import rayPreview from '../../assets/images/projects/ray.jpg'
import { RayBgTextSvg } from '../../assets/svgs/bg-text/projects/RayBgTextSvg'
import timingwebPreview from '../../assets/images/projects/timingweb.png'
import manskiyDistrictPreview from '../../assets/images/projects/manskiy-district.jpg'
// import zamanjePreview from '../../assets/images/projects/zamanje.jpg'
// import sktManskiyDistrictPreview from '../../assets/images/projects/skt.manskiy-district.jpg'
import { MasnkiyDistrictBgTextSvg } from '../../assets/svgs/bg-text/projects/ManskiyDistrictBgTextSvg'
// import { SktManskiyDistrictBgTextSvg } from '../../assets/svgs/bg-text/projects/SktManskiyDistrictBgTextSvg'
import { TimingWebBgTextSvg } from '../../assets/svgs/bg-text/projects/TimingWebBgTextSvg'
// import { ZamanjeBgTextSvg } from '../../assets/svgs/bg-text/projects/ZamanjeBgTextSvg'

const PROJECT_TAGS = {
  design: 'UI / UX Design',
  frontend: 'Frontend',
  backend: 'Backend',
  chatBot: 'Chat bot',
}

export const PROJECTS_SECTION_ITEMS: IProject[] = [
  {
    domain: 'ray024.ru',
    link: 'https://ray.chipsa.ru/html',
    tags: [PROJECT_TAGS.frontend],
    previewImage: rayPreview,
    mobileBgText: <RayBgTextSvg />,
  },
  {
    domain: 'timingweb.com',
    link: 'https://timingweb.com',
    tags: [PROJECT_TAGS.design, PROJECT_TAGS.frontend],
    previewImage: timingwebPreview,
    mobileBgText: <TimingWebBgTextSvg />,
  },
  // {
  //   domain: 'манский-район.рф',
  //   link: 'https://манский-район.рф',
  //   tags: [
  //     PROJECT_TAGS.design,
  //     PROJECT_TAGS.frontend,
  //     `${PROJECT_TAGS.backend} & ${PROJECT_TAGS.chatBot}`,
  //   ],
  //   previewImage: manskiyDistrictPreview,
  //   mobileBgText: <MasnkiyDistrictBgTextSvg />,
  //   isMobileBgTextNotCentered: true,
  // },
  // {
  //   domain: 'скт.манский-район.рф',
  //   link: 'https://скт.манский-район.рф',
  //   tags: [
  //     PROJECT_TAGS.frontend,
  //     `${PROJECT_TAGS.backend} & ${PROJECT_TAGS.chatBot}`,
  //   ],
  //   previewImage: sktManskiyDistrictPreview,
  //   mobileBgText: <SktManskiyDistrictBgTextSvg />,
  //   isMobileBgTextNotCentered: true,
  // },
  // {
  //   domain: 'заманье24.рф',
  //   link: 'https://заманье24.рф',
  //   tags: [PROJECT_TAGS.design, PROJECT_TAGS.frontend, PROJECT_TAGS.backend],
  //   previewImage: zamanjePreview,
  //   mobileBgText: <ZamanjeBgTextSvg />,
  // },
]

export const PROJECTS_VIEW_LIVE_TEXT = 'view live'

export const PROJECTS_PREVIEW_TEXT = 'preview'
