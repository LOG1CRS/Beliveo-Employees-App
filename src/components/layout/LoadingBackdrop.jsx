import React from 'react';
import { makeStyles, Backdrop, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

const LoadingBackdrop = () => {
  const classes = useStyle();
  const loading = useSelector((store) => store.loading);
  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

const useStyle = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default LoadingBackdrop;
