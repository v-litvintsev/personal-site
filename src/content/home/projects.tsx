import { IProject } from '../../types/content'
import rayPreview from '../../assets/images/projects/ray.jpg'
import { RayBgTextSvg } from '../../assets/svgs/bg-text/projects/RayBgTextSvg'
import daigoPreview from '../../assets/images/projects/daigo.jpg'
import { DaigoBgTextSvg } from '../../assets/svgs/bg-text/projects/DaigoBgTextSvg'
import apexyPreview from '../../assets/images/projects/apexy.jpg'
import { ApexyBgTextSvg } from '../../assets/svgs/bg-text/projects/ApexyBgTextSvg'
import timingwebPreview from '../../assets/images/projects/timingweb.png'
import { TimingWebBgTextSvg } from '../../assets/svgs/bg-text/projects/TimingWebBgTextSvg'

const participatedInPrefix = (tag: string) => `${tag} participation`

const PROJECT_TAGS = {
  design: 'UI / UX Design',
  frontend: 'Frontend',
  backend: 'Backend',
  chatBot: 'Chat bot',
}

export const PROJECTS_SECTION_ITEMS: IProject[] = [
  {
    domain: 'apexy.team',
    link: 'https://apexy.team',
    tags: [PROJECT_TAGS.frontend],
    previewImage: apexyPreview,
    mobileBgText: <ApexyBgTextSvg />,
  },
  {
    domain: 'ray024.ru',
    link: 'https://ray024.ru',
    tags: [PROJECT_TAGS.frontend],
    previewImage: rayPreview,
    mobileBgText: <RayBgTextSvg />,
  },
  {
    domain: 'daigo.ru',
    link: 'https://daigo.ru',
    tags: [participatedInPrefix(PROJECT_TAGS.frontend)],
    previewImage: daigoPreview,
    mobileBgText: <DaigoBgTextSvg />,
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
