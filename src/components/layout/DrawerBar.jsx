import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Divider,
  Hidden,
  Grid,
  Button,
} from '@material-ui/core';
import { People, Dashboard } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { routes } from '../../routes';
import { themeValues, beliveoTitle } from '../../assets';

const DrawerContent = (props) => {
  const { setOpenDrawer } = props;
  const classes = useStyle();
  const history = useHistory();

  const handleChangeRoute = (route) => {
    setOpenDrawer(false);
    history.push(route);
  };

  return (
    <List style={{ padding: 0 }}>
      <ListItem button onClick={() => handleChangeRoute(routes.dashboard)}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider className={classes.divider} />
      <ListItem button onClick={() => handleChangeRoute(routes.employees)}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Employees" />
      </ListItem>
    </List>
  );
};

const DrawerBar = (props) => {
  const { drawerOpen, setOpenDrawer, handleLogOut } = props;
  const classes = useStyle();
  return (
    <>
      <Hidden mdDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          PaperProps={{ elevation: 4 }}
        >
          <div className={classes.drawerContainer}>
            <DrawerContent setOpenDrawer={setOpenDrawer} />
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          PaperProps={{ elevation: 4 }}
          anchor="left"
          open={drawerOpen}
          onClose={() => setOpenDrawer(false)}
        >
          <div className={classes.drawerContainer}>
            <Grid container justify="center" alignContent="center">
              <img src={beliveoTitle} alt="logo" className={classes.logo} />
            </Grid>
            <Divider className={classes.divider} />
            <DrawerContent setOpenDrawer={setOpenDrawer} />
            <Divider className={classes.divider} />
            <List>
              <ListItem>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.logOutButton}
                  fullWidth
                  onClick={handleLogOut}
                >
                  Log Out
                </Button>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Hidden>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  drawer: {
    width: themeValues.DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: themeValues.DRAWER_WIDTH,
  },
  drawerContainer: {
    overflow: 'auto',
    height: '100%',
    paddingTop: 20,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 90,
    },
  },
  divider: {
    margin: 7,
  },
  logo: {
    width: 130,
    marginTop: 25,
    marginBottom: 40,
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

export default DrawerBar;
