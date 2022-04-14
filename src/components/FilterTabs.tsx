import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles'
import { FilterTabsProps } from '../index'

const FilterTabs = ({
  className,
  value,
  onChange,
  options,
  dark = false,
}: FilterTabsProps): JSX.Element => {
  const theme = createTheme({
    palette: {
      type: dark ? 'dark' : 'light',
    },
  })

  const optionsList = options.map(({ label, value }) => (
    <ToggleButton key={value} value={value} aria-label={label} disableRipple>
      <Typography variant="body2">{label}</Typography>
    </ToggleButton>
  ))

  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        className={className}
        value={value}
        exclusive
        onChange={onChange}
        aria-label="Filters"
      >
        {optionsList}
      </ToggleButtonGroup>
    </ThemeProvider>
  )
}

export default FilterTabs
