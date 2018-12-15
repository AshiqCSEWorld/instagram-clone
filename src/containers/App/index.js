import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../ControlledRoute/PrivateRoute';
import PublicRoute from '../ControlledRoute/PublicRoute';

import HomePage from '../Homepage';
import AuthPage from '../Auhtpage';
import NotFound from '../../components/NoteFound';

const App = () => (
  <Switch>
    <PrivateRoute path="/" exact component={HomePage} />
    <PublicRoute path="/auth" component={AuthPage} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
