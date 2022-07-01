import { NextPage } from 'next'
import SmoothScrollWrapper from '../components/SmoothScrollWrapper'
import Home from '../views/home'

const HomePage: NextPage = () => (
  <SmoothScrollWrapper>
    <Home />
  </SmoothScrollWrapper>
)

export default HomePage
