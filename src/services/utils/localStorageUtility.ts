import { ELocalStorageFields } from '../../types/local-storage'

export const localStorageUtility = {
  set: (key: ELocalStorageFields, value: string) => {
    localStorage.setItem(key, value)
  },
  get: (key: ELocalStorageFields) => {
    return localStorage.getItem(key)
  },
  remove: (key: ELocalStorageFields) => {
    localStorage.removeItem(key)
  },
  clear: () => {
    localStorage.clear()
  },
}
