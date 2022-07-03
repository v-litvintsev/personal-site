import { ESessionStorageFields } from '../../types/session-storage'

export const sessionStorageUtility = {
  set: (key: ESessionStorageFields, value: string) => {
    sessionStorage.setItem(key, value)
  },
  get: (key: ESessionStorageFields) => {
    return sessionStorage.getItem(key)
  },
  remove: (key: ESessionStorageFields) => {
    sessionStorage.removeItem(key)
  },
  clear: () => {
    sessionStorage.clear()
  },
}
