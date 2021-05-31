import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import { SearchBar } from '../components';

const Employees = () => {
  const classes = useStyle();

  return (
    <>
      <Helmet>
        <title>Beliveo App - Employees</title>
      </Helmet>
      <Grid container className={classes.employees} alignContent="flex-start">
        <Grid item xs={12} className={classes.searchContainer}>
          <SearchBar />
        </Grid>
        <Grid item xs={12} className={classes.employeesContainer}></Grid>
        <Grid item xs={12} className={classes.buttonsContainer}>
          <Grid item xs={12} sm={6} className={classes.buttonContainer}></Grid>
          <Grid item xs={12} sm={6} className={classes.buttonContainer}></Grid>
        </Grid>
      </Grid>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  employees: {
    width: '100%',
    minHeight: 'calc(100vh - 62px)',
    paddingBottom: 30,
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc(100vh - 70px)',
    },
    [theme.breakpoints.only('lg')]: {
      paddingLeft: 30,
    },
  },
  searchContainer: {
    height: 90,
    marginTop: 20,
    marginBottom: 20,
    [theme.breakpoints.up('sm')]: {
      marginTop: 30,
      marginBottom: 30,
    },
  },
  employeesContainer: {
    height: '65vh',
    backgroundColor: 'blue',
  },
  buttonsContainer: {
    height: 90,
    backgroundColor: 'red',
    display: 'flex',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    border: '1px solid black',
    height: '100%',
  },
}));

export default Employees;
