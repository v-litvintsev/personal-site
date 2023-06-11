import { FC } from 'react'
import { HEAD_CONTENT } from '../../../content/general-content'
import YandexMetrika from '../organisms/YandexMetrika'

export const HtmlHead: FC = () => (
  <>
    <title>{HEAD_CONTENT.title}</title>
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <meta name="description" content={HEAD_CONTENT.description} />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
    />
    <YandexMetrika />
  </>
)
