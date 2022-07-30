import { FC } from 'react'
import { HEAD_CONTENT } from '../../../content/general-content'
import YandexMetrika from '../organisms/YandexMetrika'

export const HtmlHead: FC = () => (
  <>
    <title>{HEAD_CONTENT.title}</title>
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <meta name="description" content={HEAD_CONTENT.description} />
    <YandexMetrika />
  </>
)
