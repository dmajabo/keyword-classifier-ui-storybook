import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
}

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
})

export const decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  ),
]
