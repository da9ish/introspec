import React, { ReactNode, useMemo } from 'react'

import ThemeContext, { Theme } from 'contexts/ThemeContext'
import { darkTheme as darkThemeClassName } from 'stiches.config'
import useLocalStorage from 'hooks/useLocalStorage'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [ darkTheme, setDarkTheme ] = useLocalStorage('colors-darkTheme', false)

  const values = useMemo(() => ({
    theme: 'dark' as Theme,
    toggleTheme: () => setDarkTheme(!darkTheme)
  }), [ darkTheme, setDarkTheme ])

  React.useLayoutEffect(() => {
    document.body.classList.toggle('theme-default', !darkTheme)
    document.body.classList.toggle(darkThemeClassName, darkTheme)
    document.documentElement.style.backgroundColor = darkTheme ? 'black' : ''
  }, [ darkTheme ])

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}
