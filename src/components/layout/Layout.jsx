import React, { useEffect, useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import Drawer from './DrawerBar';
import LoadingBackdrop from './LoadingBackdrop';
import { removeAuthToken, removeUser } from '../../redux';
import { themeValues } from '../../assets';
import { routes } from '../../routes';

const Layout = (props) => {
  const { children } = props;

  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [drawerOpen, setOpenDrawer] = useState(false);
  const [layoutActive, setLayoutActive] = useState(false);

  useEffect(() => {
    if (
      location.pathname === routes.employees ||
      location.pathname === routes.reminders
    ) {
      setLayoutActive(true);
    } else {
      setLayoutActive(false);
    }
  }, [location.pathname]);

  const handleLogOut = () => {
    dispatch(removeAuthToken());
    history.push(routes.welcome);
    dispatch(removeUser());
  };

  return (
    <>
      {layoutActive ? (
        <>
          <Navbar setOpenDrawer={setOpenDrawer} handleLogOut={handleLogOut} />
          <Container className={classes.content}>{children}</Container>
          <Drawer
            drawerOpen={drawerOpen}
            setOpenDrawer={setOpenDrawer}
            handleLogOut={handleLogOut}
          />
        </>
      ) : (
        <> {children} </>
      )}
      <LoadingBackdrop />
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  content: {
    paddingTop: 62,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 70,
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: themeValues.DRAWER_WIDTH,
    },
    [theme.breakpoints.only('xl')]: {
      minWidth: 1600,
    },
  },
}));

export default Layout;
