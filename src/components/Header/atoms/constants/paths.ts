import { IObject } from '../../../../types/globals'
import { EPaths } from '../../../../types/paths'

export const LINK_PATH_BY_PREVIOUS_PATHNAME: IObject = {
  [EPaths.home]: EPaths.about,
  [EPaths.about]: EPaths.home,
}

export const LINK_NAME_BY_PREVIOUS_PATHNAME: IObject = {
  [EPaths.home]: 'about',
  [EPaths.about]: 'home',
}
