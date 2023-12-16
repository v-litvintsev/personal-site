import { IProject } from '../../types/content'
import rayPreview from '../../assets/images/projects/ray.jpg'
import { RayBgTextSvg } from '../../assets/svgs/bg-text/projects/RayBgTextSvg'
import timingwebPreview from '../../assets/images/projects/timingweb.png'
import { TimingWebBgTextSvg } from '../../assets/svgs/bg-text/projects/TimingWebBgTextSvg'

const PROJECT_TAGS = {
  design: 'UI / UX Design',
  frontend: 'Frontend',
  backend: 'Backend',
  chatBot: 'Chat bot',
}

export const PROJECTS_SECTION_ITEMS: IProject[] = [
  {
    domain: 'ray024.ru',
    link: 'https://ray024.ru',
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
]

export const PROJECTS_VIEW_LIVE_TEXT = 'view live'

export const PROJECTS_PREVIEW_TEXT = 'preview'
