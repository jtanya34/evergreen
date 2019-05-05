import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { BoxProps } from 'ui-box'
import { withTheme, Theme } from '../../theme'

type Size = 300 | 400 | 500 | 600
type FontFamily = 'ui' | 'display' | 'mono'

interface TextProps extends BoxProps {
  /** The color (alias or valid color) applied to the text */
  color?: string
  /** The font family alias applied to the text */
  fontFamily?: FontFamily
  /** The size of the text style */
  size?: Size
  /** Theme provided by ThemeProvider. */
  theme: Theme
}

class Text extends PureComponent<TextProps> {
  static propTypes = {
    color: PropTypes.string,
    fontFamily: PropTypes.oneOf(['ui', 'display', 'mono']) as React.Validator<
      FontFamily
    >
  }

  static defaultProps = {
    size: 400 as Size,
    color: 'default',
    fontFamily: 'ui' as FontFamily
  }

  render() {
    const { theme, size, color, fontFamily, marginTop, ...props } = this.props

    const { marginTop: defaultMarginTop, ...textStyle } = theme.getTextStyle(
      size
    )

    const finalMarginTop =
      marginTop === 'default' ? defaultMarginTop : marginTop

    return (
      <Box
        is="span"
        color={theme.getTextColor(color)}
        fontFamily={theme.getFontFamily(fontFamily)}
        marginTop={finalMarginTop}
        {...textStyle}
        {...props}
      />
    )
  }
}

export default withTheme(Text)
