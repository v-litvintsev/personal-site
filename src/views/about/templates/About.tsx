import { FC } from 'react'
import { FOOTER_NEXT_PAGE_LINKS } from '../../../content/home/footer'
import AboutStartSection from '../organisms/AboutStartSection'
import AboutTextSection from '../organisms/AboutTextSection'
import Footer from '../../../components/Footer'

export const About: FC = () => (
  <>
    <AboutStartSection />
    <AboutTextSection />
    <Footer {...FOOTER_NEXT_PAGE_LINKS.HOME} />
  </>
)
