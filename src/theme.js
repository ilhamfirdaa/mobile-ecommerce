
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#A8FBFF',
      main: '#73CBCF',
      dark: '#3C7F82',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#FFAF38',
      main: '#F49F1E',
      dark: '#A8690A',
      contrastText: '#ffffff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: 'Poppins, Open Sans, Roboto, sans-serif',
  },
})

export default theme
