import { FC } from 'react'
import { FOOTER_NEXT_PAGE_LINKS } from '../../../content/home/footer'
import StartAboutSection from '../organisms/StartAboutSection'
import AboutTextSection from '../organisms/AboutTextSection'
import Footer from '../../../components/Footer'
import InDevelopmentPlaceholder from '../organisms/InDevelopmentPlaceholder'

export const About: FC = () => (
  <>
    <StartAboutSection />
    <AboutTextSection />
    {/* <InDevelopmentPlaceholder /> */}
    <Footer {...FOOTER_NEXT_PAGE_LINKS.HOME} />
  </>
)
