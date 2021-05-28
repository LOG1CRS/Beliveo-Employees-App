import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { ProtectedRoute } from './routes';
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
import { Layout } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeConfig}>
        <Switch>
          <Route exact path={routes.welcome} component={Welcome} />
          <Route exact path={routes.login} component={LogIn} />
          <Route exact path={routes.signup} component={SignUp} />
          <Route component={NotFound} />
          <Layout>
            <ProtectedRoute
              exact
              path={routes.dashboard}
              Component={Dashboard}
            />
            <ProtectedRoute
              exact
              path={routes.employees}
              Component={Employees}
            />
          </Layout>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
