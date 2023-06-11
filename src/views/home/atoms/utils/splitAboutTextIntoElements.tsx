import classNames from 'classnames'
import { ReactElement } from 'react'
import { aboutTextWordsWidthSetter } from './aboutTextWordsWidthSetter'

export const splitAboutTextIntoElements = (
  inputString: string,
  wordClassName: string
): ReactElement => {
  const wordsArray = inputString.split(' ')

  return (
    <>
      {wordsArray.map((word, index) => (
        <span
          key={index}
          className={classNames(wordClassName, aboutTextWordsWidthSetter(word))}
        >
          {word}{' '}
        </span>
      ))}
    </>
  )
}
