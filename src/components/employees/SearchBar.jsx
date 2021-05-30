import React, { useState } from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Paper,
  TextField,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

const SearchBar = () => {
  const classes = useStyle();

  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('ID');

  const handleSelection = (event) => {
    setSelect(event.target.value);
  };
  return (
    <Paper elevation={4} className={classes.search}>
      <Grid container className={classes.container}>
        <Grid item xs={7} sm={9} md={10} className={classes.inputContainer}>
          <TextField
            fullWidth
            variant="outlined"
            label={search === '' ? 'Search' : null}
            InputLabelProps={{ shrink: false }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Divider orientation="vertical" className={classes.divider} />
        <Grid item xs={5} sm={3} md={2} className={classes.inputContainer}>
          <FormControl variant="outlined" className={classes.select}>
            <InputLabel shrink />
            <Select
              value={select}
              onChange={handleSelection}
              renderValue={() => <Typography>{select}</Typography>}
            >
              <MenuItem value="ID" defaultChecked={true}>
                ID
              </MenuItem>
              <MenuItem value="Name">Name</MenuItem>
              <MenuItem value="Last Name">Last Name</MenuItem>
              <MenuItem value="Email">Email</MenuItem>
              <MenuItem value="Nationality">Nationality</MenuItem>
              <MenuItem value="Phone">Phone</MenuItem>
              <MenuItem value="Civil Status">Civil Status</MenuItem>
              <MenuItem value="Birthday">Birthday</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyle = makeStyles((theme) => ({
  search: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  divider: {
    height: 67,
    alignSelf: 'center',
    marginRight: '-1px',
  },
  select: {
    width: '100%',
  },
}));

export default SearchBar;
