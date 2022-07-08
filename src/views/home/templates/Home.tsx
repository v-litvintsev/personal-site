import { FC } from 'react'
import ProjectsSection from '../organisms/ProjectsSection'
import ShortAboutSection from '../organisms/ShortAboutSection'
import StartSection from '../organisms/StartSection'

export const Home: FC = () => (
  <>
    <StartSection />
    <ShortAboutSection />
    <ProjectsSection />
    <div style={{ height: '300vh' }} />
  </>
)
