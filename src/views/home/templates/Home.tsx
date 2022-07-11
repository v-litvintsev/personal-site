import { FC } from 'react'
import Footer from '../../../components/Footer'
import { FOOTER_NEXT_PAGE_LINKS } from '../../../content/home/footer'
import ProjectsSection from '../organisms/ProjectsSection'
import ShortAboutSection from '../organisms/ShortAboutSection'
import StackSection from '../organisms/StackSection'
import StartSection from '../organisms/StartSection'

export const Home: FC = () => (
  <>
    <StartSection />
    <ShortAboutSection />
    <ProjectsSection />
    <StackSection />
    <Footer {...FOOTER_NEXT_PAGE_LINKS.ABOUT} />
  </>
)
