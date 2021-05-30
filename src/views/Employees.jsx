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
      <Grid container className={classes.employees}>
        <Grid item xs={12} className={classes.searchContainer}>
          <SearchBar />
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
}));

export default Employees;
