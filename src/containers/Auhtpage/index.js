import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoteFound from '../NoteFound';
import Login from '../../components/Auth/Login';
import SignUp from '../../components/Auth/SignUp';

const AuthPage = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/login`} component={Login} />
    <Route path={`${match.path}/signup`} component={SignUp} />
    <Route component={NoteFound} />
  </Switch>
);

export default AuthPage;
