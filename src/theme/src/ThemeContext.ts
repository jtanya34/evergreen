import React from 'react'
import defaultTheme from './default-theme'

/**
 * Use React 16.3+ createContext API.
 */
const {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer
} = React.createContext(defaultTheme)

export interface Theme {
  getCodeProps: (appearance: 'default' | 'minimal') => any
  getFontFamily: (fontFamily?: string) => string
  getHeadingStyle: (size?: number) => any
  getLinkClassName: (color?: string) => string
  getParagraphStyle: (size?: number) => any
  getTextColor: (colorAlias?: string) => string
  getTextStyle: (size?: number) => any
}

export { ThemeProvider, ThemeConsumer }
