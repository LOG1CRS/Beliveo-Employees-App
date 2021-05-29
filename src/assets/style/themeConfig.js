import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1ec0d4',
    },
    secondary: {
      main: '#6add9e',
    },
    background: {
      default: '#e5ebf0',
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
  overrides: {
    MuiButton: {
      outlined: {
        borderRadius: 7,
      },
      outlinedSecondary: {
        borderWidth: 3,
        '&:hover': {
          borderWidth: 3,
        },
      },
      contained: {
        borderRadius: 7,
      },
      containedSecondary: {
        color: '#fff',
      },
      sizeLarge: {
        fontSize: 16,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 7,
      },
    },
  },
});

export default theme;
