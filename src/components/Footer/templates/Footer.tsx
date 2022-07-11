import { FC } from 'react'
import { IFooterNextPageLink } from '../../../types/content'
import Contacts from '../organisms/Contacts'
import NextPageLink from '../organisms/NextPageLink'

export const Footer: FC<IFooterNextPageLink> = (nextPageLink) => (
  <footer>
    <NextPageLink {...nextPageLink} />
    <Contacts />
  </footer>
)
