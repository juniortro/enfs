import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00123f',
    },
    secondary: {
      main: '#FFF'
    },
    background: {
      default: '#d8d8d8',
      white: '#eee',
    }
  }
})

export default theme;