import { Html, Head, Main, NextScript } from 'next/document'
import { FC } from 'react'
import { HTML_PROPS } from '../content/general-content'

const Document: FC = () => (
  <Html {...HTML_PROPS}>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
