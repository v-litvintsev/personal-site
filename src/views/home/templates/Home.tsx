import { FC } from 'react'
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
    <div style={{ height: '60vh', background: '#aaa' }} />
  </>
)
