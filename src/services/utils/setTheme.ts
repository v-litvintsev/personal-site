import appState, { TTheme } from '../store/appState'
import { ECSSVariableFields } from '../../types/css-variables'
import { ELocalStorageFields } from '../../types/local-storage'
import { localStorageUtility } from './localStorageUtility'
import { setCSSVariable } from './setCSSVariable'

interface IThemeColors {
  [theme: string]: {
    [ECSSVariableFields.primary]: string
    [ECSSVariableFields.differencePrimary]: string
    [ECSSVariableFields.bgPrimary]: string
    [ECSSVariableFields.bgText]: string
    [ECSSVariableFields.grey1]: string
    [ECSSVariableFields.grey2]: string
  }
}

const THEME_COLORS: IThemeColors = {
  light: {
    '--primary': '#111',
    '--difference-primary': '#eaeaea',
    '--bg-primary': '#fbfbfb',
    '--bg-text': '#e5e5e5',
    '--grey-1': '#e7e7e7',
    '--grey-2': '#f4f4f4',
  },
  dark: {
    '--primary': '#f0f',
    '--difference-primary': '#735',
    '--bg-primary': '#00f',
    '--bg-text': '#f00',
    '--grey-1': '#0f0',
    '--grey-2': '#0ff',
  },
}

export const setTheme = (value: TTheme) => {
  const theme = THEME_COLORS[value]

  Object.entries(theme).forEach(([key, value]) => {
    const CSSField = key as ECSSVariableFields

    setCSSVariable(CSSField, value)
  })

  appState.setTheme(value)
  localStorageUtility.set(ELocalStorageFields.theme, value)
}
