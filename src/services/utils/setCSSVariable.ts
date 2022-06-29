import { ECSSVariableFields } from '../../types/css-variables'

export const setCSSVariable = (key: ECSSVariableFields, value: string) => {
  document.documentElement.style.setProperty(key, value)
}
