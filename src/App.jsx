import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { ProtectedRoute, routes } from './routes';
import { themeConfig } from './assets';
import { RouterScrollToTop } from './utils';
import { Layout } from './components';
import {
  Welcome,
  LogIn,
  SignUp,
  Reminders,
  Employees,
  NotFound,
} from './views';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeConfig}>
        <RouterScrollToTop />
        <Layout>
          <Switch>
            <Route exact path={routes.welcome} component={Welcome} />
            <Route exact path={routes.login} component={LogIn} />
            <Route exact path={routes.signup} component={SignUp} />
            <ProtectedRoute path={routes.employees} Component={Employees} />
            <ProtectedRoute path={routes.reminders} Component={Reminders} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
