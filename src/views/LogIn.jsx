import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const LogIn = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      className={classes.login}
      justify="center"
      alignItems="center"
    >
      <Typography variant="h1" align="center" style={{ fontSize: 50 }}>
        LogIn View
      </Typography>
    </Grid>
  );
};

const useStyle = makeStyles((theme) => ({
  login: {
    width: '100%',
    height: '100vh',
    background:
      'linear-gradient(45deg, rgba(30,192,212,1) 25%, rgba(194,255,96,1) 100%)',
  },
}));

export default LogIn;
