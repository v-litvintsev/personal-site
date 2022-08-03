import { useRouter } from 'next/router'
import { FC, ReactElement } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './PageTransitionWrapper.module.scss'

interface IProps {
  children: ReactElement | ReactElement[]
}

export const PageTransitionWrapper: FC<IProps> = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition
          key={router.asPath}
          timeout={500}
          classNames={{
            enterActive: styles.page_enterActive,
            exit: styles.page_exit,
            exitActive: styles.page_exitActive,
            enter: styles.page_enter,
            enterDone: styles.page_enterDone,
          }}
          unmountOnExit
        >
          <main className={styles.page}>{children}</main>
        </CSSTransition>
      </TransitionGroup>
      <div className={styles.wipe} />
    </>
  )
}
