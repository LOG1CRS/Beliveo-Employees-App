import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const Welcome = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      className={classes.welcome}
      justify="center"
      alignItems="center"
    >
      <Typography variant="h1" align="center" style={{ fontSize: 50 }}>
        Welcome to Beliveo!
      </Typography>
    </Grid>
  );
};

const useStyle = makeStyles((theme) => ({
  welcome: {
    width: '100%',
    height: '100vh',
    background:
      'linear-gradient(45deg, rgba(30,192,212,1) 25%, rgba(194,255,96,1) 100%)',
  },
}));

export default Welcome;
