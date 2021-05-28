import React, { useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Navbar from './Navbar';
import Drawer from './DrawerBar';
import { removeAuthToken } from '../../redux';
import { themeValues } from '../../assets';
import { routes } from '../../routes';

const Layout = (props) => {
  const { children } = props;
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const [drawerOpen, setOpenDrawer] = useState(false);

  const handleLogOut = () => {
    dispatch(removeAuthToken());
    history.push(routes.welcome);
  };

  return (
    <>
      <Navbar setOpenDrawer={setOpenDrawer} handleLogOut={handleLogOut} />
      <Container className={classes.content}>{children}</Container>
      <Drawer
        drawerOpen={drawerOpen}
        setOpenDrawer={setOpenDrawer}
        handleLogOut={handleLogOut}
      />
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: themeValues.DRAWER_WIDTH,
    },
  },
}));

export default Layout;
