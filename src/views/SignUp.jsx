import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const SignUp = () => {
  const classes = useStyle();
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
        <Typography variant="h1" align="center" style={{ fontSize: 50 }}>
          SignUp View
        </Typography>
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
}));

export default SignUp;
