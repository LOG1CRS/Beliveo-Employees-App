import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  const classes = useStyle();
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
        <Typography variant="h1" align="center" style={{ fontSize: 50 }}>
          Not Found View
        </Typography>
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
}));

export default NotFound;
