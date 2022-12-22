import { createContext } from 'react'

export type Theme = 'light' | 'dark'

export type ThemeContext = {
  theme: Theme,
  toggleTheme: () => void
}

export default createContext<ThemeContext | null>(null)
