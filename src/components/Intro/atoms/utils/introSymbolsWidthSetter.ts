import symbolsStyles from '../styles/intro-symbols.module.scss'

export const introSymbolsWidthSetter = (item: string): string | null => {
  switch (item.toLowerCase()) {
    case 't':
      return symbolsStyles.t
    case 'v':
      return symbolsStyles.v
    case 'e':
      return symbolsStyles.e
    case 'a':
      return symbolsStyles.a
    default:
      return null
  }
}
