import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1ec0d4',
    },
    secondary: {
      main: '#c2ff60',
    },
    background: {
      default: '#efefef',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Roboto',
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'Roboto',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Roboto',
      fontWeight: 300,
    },
    button: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      textTransform: 'none',
    },
  },
});

export default theme;
