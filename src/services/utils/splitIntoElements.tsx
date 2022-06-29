import { ReactElement } from 'react'

export const splitIntoElements = (
  inputArray: string[],
  elementClassName: string
): ReactElement => (
  <>
    {inputArray.map((item, index) => (
      <span key={index} className={elementClassName}>
        {item}
      </span>
    ))}
  </>
)
