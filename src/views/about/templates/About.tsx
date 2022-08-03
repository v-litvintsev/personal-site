import { FC } from 'react'
import { FOOTER_NEXT_PAGE_LINKS } from '../../../content/home/footer'
import AboutStartSection from '../organisms/AboutStartSection'
import AboutTextSection from '../organisms/AboutTextSection'
import Footer from '../../../components/Footer'
import { useIsLogoHiddenSetter } from '../atoms/hooks/useIsLogoHiddenSetter'

export const About: FC = () => {
  useIsLogoHiddenSetter()

  return (
    <>
      <AboutStartSection />
      <AboutTextSection />
      <Footer {...FOOTER_NEXT_PAGE_LINKS.HOME} />
    </>
  )
}
