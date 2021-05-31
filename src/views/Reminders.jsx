import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import { ReminderCard } from '../components';
import { reminders } from '../utils';

const Reminders = () => {
  const classes = useStyle();

  return (
    <>
      <Helmet>
        <title>Beliveo App - Dashboard</title>
      </Helmet>
      <Grid container className={classes.dashboard} alignContent="flex-start">
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.title}>
            Weekly reminders
          </Typography>
        </Grid>
        {reminders.map((reminder) => (
          <Grid
            item
            key={reminder.id}
            xs={12}
            sm={6}
            lg={4}
            xl={3}
            className={classes.reminderContainer}
          >
            <ReminderCard reminder={reminder} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  dashboard: {
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
  reminderContainer: {
    height: 400,
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.up('sm')]: {
      padding: 10,
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
}));

export default Reminders;
