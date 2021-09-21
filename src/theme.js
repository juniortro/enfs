import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00123f',
    },
    secondary: {
      main: '#ff0000'
    },
    background: {
      default: '#d8d8d8',
      white: '#eee',
    }
  }
})

export default theme;