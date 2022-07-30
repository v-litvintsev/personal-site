import classNames from 'classnames'
import { FC } from 'react'
import {
  CONTACT_LINKS,
  CONTACT_TEXT,
  FOOTER_SIGNATURE,
  MY_MAIL,
} from '../../../../content/general-content'
import FooterBgText from '../../atoms/components/FooterBgText'
import styles from './Contacts.module.scss'

export const Contacts: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.bgText}>
      <FooterBgText />
    </div>
    <a
      href={`mailto:${MY_MAIL}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.mailLink}
    >
      <span className={styles.mailText}>{MY_MAIL}</span>
      <span className={styles.mailDecors}>
        <span className={classNames(styles.mailDecor, styles.mailDecor_1)} />
        <span className={classNames(styles.mailDecor, styles.mailDecor_2)} />
      </span>
    </a>
    <div className={styles.bottomContainer}>
      <div className={styles.contactLinks}>
        <h3 className={styles.contactLinksHeader}>{CONTACT_TEXT}:</h3>
        <a
          href={`mailto:${MY_MAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(styles.inlineMailLink, styles.contactLink)}
        >
          <span className={styles.contactLinkText}>{MY_MAIL}</span>
          <span className={styles.contactLinkDecor} />
        </a>
        {CONTACT_LINKS.map(({ link, name }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <span className={styles.contactLinkText}>{name}</span>
            <span className={styles.contactLinkDecor} />
          </a>
        ))}
      </div>
      <h5 className={styles.signature}>{FOOTER_SIGNATURE}</h5>
    </div>
  </div>
)
