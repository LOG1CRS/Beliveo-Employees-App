import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { routes } from '../routes';
import { beliveoLogo } from '../assets';

const Welcome = () => {
  const classes = useStyle();
  const history = useHistory();
  const authToken = useSelector((store) => store.authToken);
  return (
    <>
      <Helmet>
        <title>Beliveo App</title>
      </Helmet>
      <Grid
        container
        className={classes.welcome}
        justify="center"
        alignContent="center"
      >
        <Grid container className={classes.welcomeContainer}>
          <Grid item xs={12} className={classes.logoContainer}>
            <img src={beliveoLogo} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" align="center" className={classes.title}>
              Welcome to Beliveo Dashboard!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              className={classes.subTitle}
            >
              Database client to manage employee information. (This project is a
              technical exercise, for testing purposes only)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {authToken ? (
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.dashboardButton}
                  onClick={() => history.push(routes.employees)}
                >
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.signUpButton}
                    onClick={() => history.push(routes.signup)}
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    className={classes.loginButton}
                    onClick={() => history.push(routes.login)}
                  >
                    Log In
                  </Button>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  welcome: {
    width: '100%',
    height: '100vh',
    background:
      'linear-gradient(45deg, rgba(30,192,212,1) 25%, rgba(194,255,96,1) 100%)',
  },
  welcomeContainer: {
    margin: 16,
    minHeight: 500,
    backgroundColor: 'white',
    borderRadius: 40,
    padding: '10px 20px 0px 20px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      maxWidth: 800,
    },
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    [theme.breakpoints.only('xl')]: {
      width: 200,
    },
  },
  signUpButton: {
    width: 110,
    height: 45,
    marginRight: 15,
    [theme.breakpoints.up('sm')]: {
      marginRight: 30,
      width: 120,
      height: 50,
      fontSize: 18,
    },
  },
  dashboardButton: {
    width: 110,
    height: 45,
    [theme.breakpoints.up('sm')]: {
      width: 120,
      height: 50,
      fontSize: 18,
    },
  },
  loginButton: {
    borderWidth: 3,
    width: 110,
    height: 45,
    marginLeft: 15,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 30,
      width: 120,
      height: 50,
      fontSize: 18,
    },
  },
  title: {
    marginTop: 8,
    fontSize: 32,
    [theme.breakpoints.only('sm')]: {
      fontSize: 37,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 42,
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 39,
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: 45,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 14,
    },
  },
  subTitle: {
    fontSize: 18,
    [theme.breakpoints.only('sm')]: {
      fontSize: 21,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 26,
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 23,
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: 25,
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 40,
      paddingRight: 40,
    },
  },
}));

export default Welcome;
