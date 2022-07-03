import { MouseEventHandler } from 'react'

export const eventPropagationStopHandler: MouseEventHandler = (event) => {
  event.stopPropagation()
}
