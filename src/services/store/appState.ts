import { makeAutoObservable } from 'mobx'

export type TTheme = 'light' | 'dark'
type TViewportWidth = 'mobile' | 'tablet' | 'desktop' | null
type TScreenType = 'touchpad' | 'mouse' | null

class AppState {
  theme: TTheme = 'light'
  viewportWidth: TViewportWidth = null
  screenType: TScreenType = null
  isScrolledUp = true
  isIntroAnimationPlayed = false
  isStartAnimationPlayed = false
  isHeaderHidden = false
  isLogoHidden = false
  scrollProgressRatio = 0

  hasScrollTriggerBeenInitialized = false
  scroll: any = null
  hasBrowserBeenDetected = false

  closePopupFunctions: (() => void)[] = []

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

  setScroll(value: any) {
    this.scroll = value
  }

  setHasBrowserBeenDetected(value: boolean) {
    this.hasBrowserBeenDetected = value
  }

  addClosePopupFunction(action: () => void) {
    this.closePopupFunctions.push(action)
  }

  setIsIntroAnimationPlayed(value: boolean) {
    this.isIntroAnimationPlayed = value
  }

  setIsStartAnimationPlayed(value: boolean) {
    this.isStartAnimationPlayed = value
  }

  setIsLogoHidden(value: boolean) {
    this.isLogoHidden = value
  }

  setIsHeaderHidden(value: boolean) {
    this.isHeaderHidden = value
  }

  setScrollProgressRatio(value: number) {
    this.scrollProgressRatio = value
  }
}

export default new AppState()
