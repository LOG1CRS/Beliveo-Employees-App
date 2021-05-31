import React, { useState } from 'react';
import { makeStyles, Popover, Typography, IconButton } from '@material-ui/core';
import { HelpOutline, MoreVert } from '@material-ui/icons';

const HelpPopover = () => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className={classes.container}>
      <IconButton onClick={handleClick} className={classes.iconButton}>
        <HelpOutline className={classes.helpIcon} />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          To filter employees, select a menu{' '}
          <MoreVert className={classes.menuIcon} /> <br /> from a header and
          select the filter option.
        </Typography>
      </Popover>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    [theme.breakpoints.only('xs')]: {
      marginLeft: '-10px',
    },
  },
  helpIcon: {
    fontSize: 35,
  },
  typography: {
    padding: theme.spacing(2),
  },
  menuIcon: {
    marginBottom: 0,
    [theme.breakpoints.up('sm')]: {
      marginBottom: '-5px',
    },
  },
}));

export default HelpPopover;
