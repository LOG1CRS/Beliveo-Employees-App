import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Hidden,
  TextField,
  Button,
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { useSignUp } from '../hooks';
import { signUpWallpaper } from '../assets';
import { routes } from '../routes';

const SignUp = () => {
  const classes = useStyle();
  const [setInputName, setInputEmail, setInputPassword, handleSignUp, error] =
    useSignUp();

  return (
    <>
      <Helmet>
        <title>Beliveo App - Sign Up</title>
      </Helmet>
      <Grid
        container
        className={classes.signup}
        justify="center"
        alignItems="center"
      >
        <Grid container className={classes.signUpContainer}>
          <Grid item xs={12} lg={6} className={classes.container}>
            <Grid container className={classes.formContainer}>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  align="center"
                  className={classes.title}
                >
                  Create Account
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {error !== '' ? (
                  <Typography
                    variant="h3"
                    className={classes.error}
                    align="center"
                  >
                    {error}
                  </Typography>
                ) : null}
                <TextField
                  label="Name"
                  fullWidth
                  variant="outlined"
                  className={classes.input}
                  onChange={(e) => setInputName(e.target.value)}
                />
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
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.question}
                >
                  Already have an account?{' '}
                  <Link className={classes.link} to={routes.login}>
                    Log In
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              lg={6}
              className={classes.wallpaper}
              style={{ backgroundImage: `url(${signUpWallpaper})` }}
            ></Grid>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  signup: {
    width: '100%',
    height: '100vh',
    background:
      'linear-gradient(45deg, rgba(30,192,212,1) 25%, rgba(194,255,96,1) 100%)',
  },
  signUpContainer: {
    margin: 16,
    minHeight: 450,
    backgroundColor: 'white',
    borderRadius: 40,
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    [theme.breakpoints.down('md')]: {
      width: '55%',
    },
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      minHeight: 430,
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      maxWidth: 900,
    },
  },
  wallpaper: {
    backgroundPosition: 'right',
    backgroundSize: 'cover',
    borderRadius: '0 40px 40px 0',
  },
  formContainer: {
    height: '100%',
    padding: `20px 20px 20px 20px`,
    [theme.breakpoints.up('sm')]: {
      padding: `20px 30px 20px 30px`,
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
  question: {
    fontSize: 16,
    marginBottom: '-10px',
  },
  link: {
    color: theme.palette.primary.main,
  },
  input: {
    marginTop: 6,
    marginBottom: 6,
    [theme.breakpoints.up('sm')]: {
      marginTop: 8,
      marginBottom: 8,
    },
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },
}));

export default SignUp;
