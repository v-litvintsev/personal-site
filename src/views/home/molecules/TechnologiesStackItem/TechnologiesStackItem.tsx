import classNames from 'classnames'
import Link from 'next/link'
import { FC, ReactElement, useState } from 'react'
import { ITechnologyItem } from '../../../../types/content'
import styles from './TechnologiesStackItem.module.scss'

interface IProps {
  bgText: ReactElement
  technologies: ITechnologyItem[]
}

export const TechnologiesStackItem: FC<IProps> = ({ bgText, technologies }) => {
  const [hoveredTechnologyIndex, setHoveredTechnologyIndex] = useState<
    null | number
  >(null)

  const handleTechnologyItemMouseLeave = () => setHoveredTechnologyIndex(null)

  const handleTechnologyItemMouseEnterClosure = (index: number) => () =>
    setHoveredTechnologyIndex(index)

  return (
    <article className={styles.item}>
      <div
        className={classNames(
          styles.bgText,
          hoveredTechnologyIndex !== null && styles.bgText_hidden
        )}
      >
        {bgText}
      </div>
      <div className={styles.technologies}>
        {technologies.map(({ name, siteLink, icon }, index) => (
          <a
            className={styles.technology}
            key={name}
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseLeave={handleTechnologyItemMouseLeave}
            onMouseEnter={handleTechnologyItemMouseEnterClosure(index)}
          >
            <div
              className={classNames(
                styles.technologyIcon,
                hoveredTechnologyIndex === index && styles.technologyIcon_active
              )}
            >
              {icon}
            </div>
            <h3 className={styles.technologyName}>{name}</h3>
          </a>
        ))}
      </div>
    </article>
  )
}
