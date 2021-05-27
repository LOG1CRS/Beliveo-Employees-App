import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { routes } from './routes';
import {
  Welcome,
  LogIn,
  SignUp,
  Dashboard,
  Employees,
  NotFound,
} from './views';
import { themeConfig } from './assets';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeConfig}>
        <Switch>
          <Route exact path={routes.welcome} component={Welcome} />
          <Route exact path={routes.login} component={LogIn} />
          <Route exact path={routes.signup} component={SignUp} />
          <Route exact path={routes.dashboard} component={Dashboard} />
          <Route exact path={routes.employees} component={Employees} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
