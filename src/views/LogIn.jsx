import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { useLogIn } from '../hooks';
import { routes } from '../routes';
import { beliveoIcon } from '../assets';

const LogIn = () => {
  const classes = useStyle();
  const [setInputEmail, setInputPassword, handleLogIn, error] = useLogIn();
  return (
    <>
      <Helmet>
        <title>Beliveo App - Log In</title>
      </Helmet>
      <Grid
        container
        className={classes.login}
        justify="center"
        alignItems="center"
      >
        <Grid container className={classes.logInContainer}>
          <Grid item xs={12} className={classes.logoContainer}>
            <img src={beliveoIcon} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" align="center" className={classes.title}>
              Welcome Back
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {error !== '' ? (
              <Typography variant="h3" className={classes.error} align="center">
                {error}
              </Typography>
            ) : null}
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              className={classes.input}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              className={classes.input}
              onChange={(e) => setInputPassword(e.target.value)}
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              style={{ marginBottom: 10 }}
              onClick={handleLogIn}
            >
              Log In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              align="center"
              className={classes.question}
            >
              Don't have an account?{' '}
              <Link className={classes.link} to={routes.signup}>
                Register
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  login: {
    width: '100%',
    height: '100vh',
    background:
      'linear-gradient(45deg, rgba(30,192,212,1) 25%, rgba(194,255,96,1) 100%)',
  },
  logInContainer: {
    margin: 16,
    minHeight: 450,
    backgroundColor: 'white',
    borderRadius: 40,
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    padding: `10px 30px 20px 30px`,
    width: '55%',
    maxWidth: 500,
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      minHeight: 430,
      padding: `10px 20px 20px 20px`,
    },
  },
  title: {
    paddingTop: 6,
    fontSize: 36,
    [theme.breakpoints.up('sm')]: {
      fontSize: 38,
      paddingTop: 10,
    },
  },
  input: {
    marginTop: 6,
    marginBottom: 6,
    [theme.breakpoints.up('sm')]: {
      marginTop: 8,
      marginBottom: 8,
    },
  },
  question: {
    fontSize: 16,
    marginBottom: '-10px',
  },
  link: {
    color: theme.palette.primary.main,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    [theme.breakpoints.up('sm')]: {
      width: 80,
    },
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },
}));

export default LogIn;
