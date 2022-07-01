import { NextPage } from 'next'
import SmoothScrollWrapper from '../components/SmoothScrollWrapper'
import About from '../views/about'

const AboutPage: NextPage = () => (
  <SmoothScrollWrapper>
    <About />
  </SmoothScrollWrapper>
)

export default AboutPage
