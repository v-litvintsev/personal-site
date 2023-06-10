import { ReactElement } from 'react'
import classNames from 'classnames'

export const splitIntoElements = (
  inputArray: string[],
  elementClassName: string,
  conditionalElementClassNameHandler?: (item: string) => string | null
): ReactElement => (
  <>
    {inputArray.map((item, index) => (
      <span
        key={index}
        className={classNames(
          elementClassName,
          conditionalElementClassNameHandler?.(item)
        )}
      >
        {item}
      </span>
    ))}
  </>
)
