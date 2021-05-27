import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const Employees = () => {
  const classes = useStyle();
  return (
    <>
      <Helmet>
        <title>Beliveo App - Employees</title>
      </Helmet>
      <Grid
        container
        className={classes.employees}
        justify="center"
        alignItems="center"
      >
        <Typography variant="h1" align="center" style={{ fontSize: 50 }}>
          Employees View
        </Typography>
      </Grid>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  employees: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'white',
  },
}));

export default Employees;
