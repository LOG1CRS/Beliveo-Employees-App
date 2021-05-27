import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Hidden,
  IconButton,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { beliveoIcon } from '../../assets';
import { routes } from '../../routes';

const Navbar = (props) => {
  const { setOpenDrawer, handleLogOut } = props;
  const classes = useStyle();
  const history = useHistory();

  return (
    <AppBar
      position="fixed"
      color="primary"
      className={classes.appBar}
      elevation={5}
    >
      <Toolbar className={classes.toolBar}>
        <Hidden mdDown>
          <div className={classes.icon}>
            <IconButton onClick={() => history.push(routes.dashboard)}>
              <img src={beliveoIcon} alt="logo" className={classes.logo} />
            </IconButton>
          </div>
          <Button
            variant="contained"
            size="large"
            className={classes.logOutButton}
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </Hidden>
        <Hidden lgUp>
          <div className={classes.icon}>
            <IconButton
              onClick={() => setOpenDrawer(true)}
              style={{ paddingLeft: 5 }}
            >
              <Menu style={{ color: '#fff', fontSize: 30 }} />
            </IconButton>
          </div>
          <div>
            <IconButton
              onClick={() => history.push(routes.dashboard)}
              style={{ paddingRight: 5 }}
            >
              <img src={beliveoIcon} alt="logo" className={classes.logo} />
            </IconButton>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

const useStyle = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolBar: {
    height: 62,
    [theme.breakpoints.up('sm')]: {
      height: 70,
    },
  },
  icon: {
    flexGrow: 1,
  },
  logo: {
    width: 37,
    [theme.breakpoints.up('sm')]: {
      width: 48,
    },
  },
  logOutButton: {
    color: '#fff',
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'red',
      '@media (hover: none)': {
        backgroundColor: 'red',
      },
    },
  },
}));

export default Navbar;
