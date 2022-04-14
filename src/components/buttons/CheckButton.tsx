import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { CheckButtonProps } from '../../index'

const CheckButton = ({
  className,
  value,
  onChange,
  children,
  dark = false,
}: CheckButtonProps): JSX.Element => {
  const theme = createTheme({
    palette: {
      type: dark ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <ToggleButton
        className={className}
        value="check"
        selected={value}
        disableRipple
        onChange={onChange}
      >
        {children}
      </ToggleButton>
    </ThemeProvider>
  )
}

export default CheckButton
