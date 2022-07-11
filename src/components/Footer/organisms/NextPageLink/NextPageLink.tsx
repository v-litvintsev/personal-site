import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { IFooterNextPageLink } from '../../../../types/content'
import styles from './NextPageLink.module.scss'

export const NextPageLink: FC<IFooterNextPageLink> = ({ header, path }) => (
  <Link href={path}>
    <a className={styles.link}>
      <span className={styles.decors}>
        <span className={classNames(styles.decor, styles.decor_1)} />
        <span className={classNames(styles.decor, styles.decor_2)} />
      </span>
      <h2 className={styles.header}>{header}</h2>
      <span className={styles.desktopHoverDecor} />
    </a>
  </Link>
)
