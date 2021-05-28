import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { routes } from '../routes';

const NotFound = () => {
  const classes = useStyle();
  const history = useHistory();
  const authToken = useSelector((store) => store.authToken);

  const handleReturnToHome = () => {
    if (authToken) {
      history.push(routes.dashboard);
    } else {
      history.push(routes.welcome);
    }
  };

  return (
    <>
      <Helmet>
        <title>Beliveo App - Not Found</title>
      </Helmet>
      <Grid
        container
        className={classes.notFound}
        justify="center"
        alignItems="center"
      >
        <Grid
          container
          justify="center"
          alignContent="center"
          className={classes.notFoundContainer}
        >
          <Grid item xs={12}>
            <Typography variant="h1" align="center" className={classes.title}>
              404
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              className={classes.subTitle}
            >
              Not Found
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={handleReturnToHome}
            >
              Return to Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  notFound: {
    width: '100%',
    height: '100vh',
    background:
      'linear-gradient(45deg, rgba(30,192,212,1) 25%, rgba(194,255,96,1) 100%)',
  },
  notFoundContainer: {
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 100,
  },
  subTitle: {
    fontSize: 50,
    marginBottom: 40,
    marginTop: 30,
  },
}));

export default NotFound;
