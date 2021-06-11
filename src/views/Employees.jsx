import React, { useState } from 'react';
import { Grid, makeStyles, Button, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import {
  EmployeesList,
  HelpPopover,
  AddEmployeeDialog,
  EmployeeDialog,
} from '../components';
import { useUpdateEmployees } from '../hooks';

const Employees = () => {
  const classes = useStyle();
  const [addEmployee, setAddEmployee] = useState(false);
  const [employeeDialog, setEmployeeDialog] = useState(false);

  useUpdateEmployees();

  return (
    <>
      <Helmet>
        <title>Beliveo App - Employees</title>
      </Helmet>
      <Grid container className={classes.employees} alignContent="flex-start">
        <Grid container alignContent="center">
          <Grid item xs={12} sm={7}>
            <Typography variant="h2" className={classes.title}>
              Employees database
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.optionContainer}>
            <HelpPopover />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.addEmployeeButton}
              onClick={() => setAddEmployee(true)}
            >
              Add employee
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.employeesContainer}>
          <EmployeesList setEmployeeDialog={setEmployeeDialog} />
        </Grid>
      </Grid>
      <AddEmployeeDialog
        addEmployee={addEmployee}
        setAddEmployee={setAddEmployee}
      />
      <EmployeeDialog
        employeeDialog={employeeDialog}
        setEmployeeDialog={setEmployeeDialog}
      />
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
  title: {
    marginTop: 30,
    marginBottom: 25,
    fontSize: 35,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop: 40,
      marginBottom: 30,
      fontSize: 45,
      textAlign: 'left',
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
    height: '72vh',
    [theme.breakpoints.only('md')]: {
      height: '73vh',
    },
  },
  optionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    [theme.breakpoints.up('sm')]: {
      marginTop: 40,
      marginBottom: 30,
      justifyContent: 'flex-end',
    },
  },
  addEmployeeButton: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 20,
    },
  },
  // buttonsContainer: {
  //   minHeight: 90,
  //   display: 'flex',
  //   marginTop: 30,
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   [theme.breakpoints.only('xs')]: {
  //     marginTop: 50,
  //   },
  // },
  // searchButton: {
  //   [theme.breakpoints.only('xs')]: {
  //     // marginBottom: 10,
  //     marginTop: 20,
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     width: 150,
  //   },
  // },
  // resetButton: {
  //   [theme.breakpoints.only('xs')]: {
  //     // marginBottom: 10,
  //     marginTop: 10,
  //   },
  //   [theme.breakpoints.up('sm')]: {
  //     width: 150,
  //     marginRight: 15,
  //   },
  // },
}));

export default Employees;
