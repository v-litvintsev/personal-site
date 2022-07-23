import { FC } from 'react'
import YandexMetrika from '../organisms/YandexMetrika'

export const HtmlHead: FC = () => (
  <>
    <title>Vladimir Litvinstev | Creative web developer</title>
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <meta name="description" content="Creative developer from Russia" />
    <YandexMetrika />
  </>
)
