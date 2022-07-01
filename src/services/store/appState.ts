import { makeAutoObservable } from 'mobx'

export type TTheme = 'light' | 'dark'
type TViewportWidth = 'mobile' | 'tablet' | 'desktop' | null
type TScreenType = 'touchpad' | 'mouse' | null

class AppState {
  theme: TTheme = 'light'
  viewportWidth: TViewportWidth = null
  screenType: TScreenType = null
  isScrolledUp = true

  hasScrollTriggerBeenInitialized = false

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

  setHasScrollTriggerBeenInitialized(value: boolean) {
    this.hasScrollTriggerBeenInitialized = value
  }

  setIsScrolledUp(value: boolean) {
    this.isScrolledUp = value
  }
}

export default new AppState()
