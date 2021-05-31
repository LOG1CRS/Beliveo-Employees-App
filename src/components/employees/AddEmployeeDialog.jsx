import React, { useState } from 'react';
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
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const AddEmployeeDialog = (props) => {
  const { addEmployee, setAddEmployee } = props;
  const classes = useStyle();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [select, setSelect] = useState('');

  const handleSelection = (event) => {
    setSelect(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddEmployee = () => {
    setAddEmployee(false);
  };

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
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              onChange={(e) => console.log(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Last Name"
              fullWidth
              variant="outlined"
              onChange={(e) => console.log(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              onChange={(e) => console.log(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Nationality"
              fullWidth
              variant="outlined"
              onChange={(e) => console.log(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.inputContainer}>
            <TextField
              label="Phone"
              fullWidth
              variant="outlined"
              onChange={(e) => console.log(e.target.value)}
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
                value={select}
                onChange={handleSelection}
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
}));

export default AddEmployeeDialog;
