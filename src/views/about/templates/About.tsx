import { FC } from 'react'
import Footer from '../../../components/Footer'
import { FOOTER_NEXT_PAGE_LINKS } from '../../../content/home/footer'
import InDevelopmentPlaceholder from '../organisms/InDevelopmentPlaceholder'

export const About: FC = () => (
  <>
    <InDevelopmentPlaceholder />
    <Footer {...FOOTER_NEXT_PAGE_LINKS.HOME} />
  </>
)
