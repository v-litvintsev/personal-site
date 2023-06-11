import wordsStyles from '../styles/short-about-words.module.scss'

export const aboutTextWordsWidthSetter = (item: string): string | null =>
  item.length && item.toLowerCase()[0] === 'a'
    ? wordsStyles.startsWithLetterA
    : null
