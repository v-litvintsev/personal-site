import { makeAutoObservable } from 'mobx'

export type TTheme = 'light' | 'dark'
type TViewportWidth = 'mobile' | 'tablet' | 'desktop'
type TScreenType = 'touchpad' | 'mouse'

class AppState {
  theme: TTheme = 'light'
  viewportWidth: TViewportWidth = 'mobile'
  screenType: TScreenType = 'touchpad'

  constructor() {
    makeAutoObservable(this)
  }

  setTheme(value: TTheme) {
    this.theme = value
  }

  setViewportWidth(value: TViewportWidth) {
    this.viewportWidth = value
  }

  setScreenType(value: TScreenType) {
    this.screenType = value
  }
}

export default new AppState()
