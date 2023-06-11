import { useEffect } from 'react'

const CONSOLE_MESSAGE = {
  style: `
    padding: 5px;
    color: var(--primary);
    background: var(--bg-primary);
    font-size: 16px;
    line-height: 140%;
    font-family: Montserrat, Arial;
    font-style: italic;
    font-weight: 600;
    text-transform: uppercase;
  `,
  text: 'Hello developers,\nThe site was created by Vladimir Litvintsev, sources: https://github.com/v-litvintsev/personal-site, have a good inspection',
}

export const useConsoleMessageSender = () => {
  useEffect(() => {
    const handleWindowLoad = () => {
      console.clear()
      console.log('%c%s', CONSOLE_MESSAGE.style, CONSOLE_MESSAGE.text)
    }

    window.addEventListener('load', handleWindowLoad)

    return () => {
      window.removeEventListener('load', handleWindowLoad)
    }
  }, [])
}
