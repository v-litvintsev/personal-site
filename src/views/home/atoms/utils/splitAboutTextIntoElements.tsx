import { ReactElement } from 'react'

export const splitAboutTextIntoElements = (
  inputString: string,
  wordClassName: string
): ReactElement => {
  const wordsArray = inputString.split(' ')

  return (
    <>
      {wordsArray.map((word, index) => (
        <span key={index} className={wordClassName}>
          {word}{' '}
        </span>
      ))}
    </>
  )
}
