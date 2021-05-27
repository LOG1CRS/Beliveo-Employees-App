import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { login } from './routes.json';

const ProtectedRoute = (props) => {
  const { path, component } = props;
  const token = useSelector((store) => store.authToken);

  useEffect(() => {
    console.log(`Auth token: ${token}`);
  }, [token]);

  return (
    <Route
      path={path}
      exact
      render={() => {
        if (token) {
          return <component />;
        } else {
          return <Redirect to={login} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;