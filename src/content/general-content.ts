import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'
import { IContactLink } from '../types/content'
import { EPaths } from '../types/paths'

export const MY_INITIALS = {
  firstName: 'vladimir',
  lastName: 'litvintsev',
}

interface IHeaderLink {
  name: string
  path: string
}

export const HEADER_LINKS: IHeaderLink[] = [
  {
    name: 'home',
    path: EPaths.home,
  },
  {
    name: 'about',
    path: EPaths.about,
  },
]

export const OTHER_LANGUAGE_LINK = {
  text: 'ru версия',
  path: 'ru.vlitvintsev.space',
}

export const MY_MAIL = 'hello@vlitvintsev.space'

export const CONTACT_TEXT = 'get in touch'

export const CONTACT_LINKS: IContactLink[] = [
  {
    name: 'telegram',
    link: 'https://t.me/v_litvintsev/',
  },
  {
    name: 'github',
    link: 'https://github.com/v-litvintsev/',
  },
  {
    name: 'instagram',
    link: 'https://instagram.com/vl_litvintsev/',
  },
]

export const FOOTER_SIGNATURE = '© Vladimir Litvintsev 2022'
// 'Thanks to Sergey Materukhin for the photos\n© Vladimir Litvintsev 2022'

export const HEAD_CONTENT = {
  title: 'Vladimir Litvinstev | Creative web developer',
  description: 'Fullstack TypeScript developer and UI/UX designer from Russia',
}

export const HTML_PROPS: DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHtmlElement>,
  HTMLHtmlElement
> = {
  translate: 'no',
  lang: 'en',
}
