import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const Dashboard = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      className={classes.dashboard}
      justify="center"
      alignItems="center"
    >
      <Typography variant="h1" align="center" style={{ fontSize: 50 }}>
        Dashboard View
      </Typography>
    </Grid>
  );
};

const useStyle = makeStyles((theme) => ({
  dashboard: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'white',
  },
}));

export default Dashboard;
