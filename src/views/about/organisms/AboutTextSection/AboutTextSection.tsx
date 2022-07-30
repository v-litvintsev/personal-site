import { FC } from 'react'
import { ABOUT_TEXT } from '../../../../content/about/text'
import { splitAboutTextIntoElements } from '../../../home/atoms/utils/splitAboutTextIntoElements'
import styles from './AboutTextSection.module.scss'

export const AboutTextSection: FC = () => (
  <section className={styles.section}>
    <p className={styles.text}>
      {splitAboutTextIntoElements(ABOUT_TEXT, styles.word)}
    </p>
  </section>
)
