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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { useAddEmployee } from '../../hooks';

const AddEmployeeDialog = (props) => {
  const { addEmployee, setAddEmployee } = props;
  const classes = useStyle();

  const [
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    nationality,
    setNationality,
    phone,
    setPhone,
    civilStatus,
    selectedDate,
    handleCivilStatus,
    handleDateChange,
    handleAddEmployee,
    clientError,
  ] = useAddEmployee(setAddEmployee);

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={addEmployee}
      onClose={() => setAddEmployee(false)}
    >
      <DialogTitle style={{ textAlign: 'center' }}>
        <span className={classes.title}>Add New Employee</span>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Last Name"
              fullWidth
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Nationality"
              fullWidth
              variant="outlined"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Phone"
              fullWidth
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <FormControl
              variant="outlined"
              className={classes.select}
              fullWidth
            >
              <InputLabel>Civil Status</InputLabel>
              <Select
                value={civilStatus}
                onChange={handleCivilStatus}
                label="Civil Status"
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                label="Birthday"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                inputVariant="outlined"
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Hidden only="xs">
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={() => setAddEmployee(false)}
            className={classes.button}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleAddEmployee}
            className={classes.button}
          >
            Add
          </Button>
        </Hidden>
        <Hidden smUp>
          <Grid container>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={() => setAddEmployee(false)}
                className={classes.button}
                fullWidth
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleAddEmployee}
                className={classes.button}
                fullWidth
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      </DialogActions>
    </Dialog>
  );
};

const useStyle = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.only('xs')]: {
      marginTop: 7,
      marginBottom: 7,
    },
    [theme.breakpoints.up('sm')]: {
      width: 80,
    },
  },
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
  clientError: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },
}));

export default AddEmployeeDialog;
