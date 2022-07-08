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
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
]

export const OTHER_LANGUAGE_LINK = {
  text: 'ru версия',
  path: 'https://google.com',
}

export const MY_MAIL = 'vl.litvintsev@yandex.ru'
