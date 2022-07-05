import { FC, ReactElement } from 'react'

interface IArgsClassNames {
  word: string
  noWrapWord: string
}

interface IWordElementProps {
  text: string
  wordClassNames: IArgsClassNames
}

const WordComponent: FC<IWordElementProps> = ({ text, wordClassNames }) => (
  <span className={wordClassNames.word}>{text} </span>
)

export const shortAboutTextParser = (
  inputString: string,
  wordClassNames: IArgsClassNames
): ReactElement => {
  const wordsArray = inputString.split(' ')

  return (
    <>
      {wordsArray.map((word, index) => (
        <WordComponent
          key={index}
          text={word}
          wordClassNames={wordClassNames}
        />
      ))}
    </>
  )
}
