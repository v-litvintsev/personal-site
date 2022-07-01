import { IObject } from '../../../../types/globals'

export const LINK_PATH_BY_PREVIOUS_PATHNAME: IObject = {
  ['/']: '/about',
  ['/about']: '/',
}

export const LINK_NAME_BY_PREVIOUS_PATHNAME: IObject = {
  ['/']: 'about',
  ['/about']: 'home',
}
