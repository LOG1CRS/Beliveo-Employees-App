import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  makeStyles,
  Hidden,
  Grid,
  TextField,
  Avatar,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

import { useEditEmployee, useDeleteEmployee } from '../../hooks';

const EmployeeDialog = (props) => {
  const { employeeDialog, setEmployeeDialog } = props;
  const classes = useStyle();
  const employeeSelected = useSelector((store) => store.employeeSelected);

  const [
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    handleEditEmployee,
    clientError,
    activeSave,
  ] = useEditEmployee(setEmployeeDialog);

  const [handleDeleteEmployee] = useDeleteEmployee(setEmployeeDialog);

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={employeeDialog}
      onClose={() => setEmployeeDialog(false)}
    >
      <Grid container justify="center">
        <Avatar className={classes.avatar}>{employeeSelected?.name[0]}</Avatar>
      </Grid>
      <DialogTitle style={{ textAlign: 'center' }}>
        <span
          className={classes.title}
        >{`Employee: ${employeeSelected?.name} `}</span>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            {clientError !== '' ? (
              <Typography
                variant="h3"
                className={classes.clientError}
                align="center"
              >
                {clientError}
              </Typography>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Last Name"
              fullWidth
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Phone"
              fullWidth
              variant="outlined"
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              value={phone}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="ID"
              fullWidth
              variant="outlined"
              disabled
              defaultValue={employeeSelected?.id}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Nationality"
              fullWidth
              variant="outlined"
              disabled
              defaultValue={employeeSelected?.nationality}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Civil Status"
              fullWidth
              disabled
              variant="outlined"
              defaultValue={employeeSelected?.civilStatus}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Birthday"
              fullWidth
              variant="outlined"
              disabled
              defaultValue={employeeSelected?.birthday}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.actionContainer}>
        <Hidden only="xs">
          <div style={{ flexGrow: 1 }}>
            <Button
              variant="contained"
              size="large"
              className={classes.deleteButton}
              onClick={handleDeleteEmployee}
            >
              Delete
            </Button>
          </div>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={() => setEmployeeDialog(false)}
            className={classes.button}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleEditEmployee}
            className={classes.button}
            disabled={activeSave ? false : true}
          >
            Save
          </Button>
        </Hidden>
        <Hidden smUp>
          <Grid container>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={() => setEmployeeDialog(false)}
                className={classes.button}
                fullWidth
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="large"
                className={classes.deleteButton}
                onClick={handleDeleteEmployee}
                fullWidth
              >
                Delete
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleEditEmployee}
                className={classes.button}
                fullWidth
                disabled={activeSave ? false : true}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      </DialogActions>
    </Dialog>
  );
};

const useStyle = makeStyles((theme) => ({
  inputContainer: {
    paddingTop: 6,
    paddingBottom: 6,
    [theme.breakpoints.up('sm')]: {
      padding: 8,
    },
  },
  title: {
    fontSize: 25,
    [theme.breakpoints.up('sm')]: {
      fontSize: 30,
    },
  },
  avatar: {
    width: 90,
    height: 90,
    fontSize: 32,
    marginTop: 30,
  },
  clientError: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },
  actionContainer: {
    paddingLeft: 24,
    paddingRight: 24,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
  },
  button: {
    [theme.breakpoints.only('xs')]: {
      marginTop: 7,
      marginBottom: 7,
    },
    [theme.breakpoints.up('sm')]: {
      width: 80,
    },
  },
  deleteButton: {
    color: '#fff',
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'red',
      '@media (hover: none)': {
        backgroundColor: 'red',
      },
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: 7,
      marginBottom: 7,
    },
    [theme.breakpoints.up('sm')]: {
      width: 80,
    },
  },
}));

export default EmployeeDialog;
