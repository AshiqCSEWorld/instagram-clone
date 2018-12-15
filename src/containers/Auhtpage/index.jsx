import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoteFound from '../NoteFound';
import Login from '../../components/Login';

const AuthPage = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/login`} component={Login} />
    {/* <Route path={`${match.path}/login`} component={SignUp} /> */}
    <Route component={NoteFound} />
  </Switch>
);

export default AuthPage;
