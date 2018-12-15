import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoteFound from '../../components/NoteFound';
import Login from '../../components/Auth/Login';
import SignUp from '../../components/Auth/SignUp';
import AuthFooter from '../../components/AuthFooter';

const AuthPage = ({ match }) => (
  <>
    <Switch>
      <Route path={`${match.path}/login`} component={Login} />
      <Route path={`${match.path}/signup`} component={SignUp} />
      <Route component={NoteFound} />
    </Switch>

    <AuthFooter />
  </>
);

export default AuthPage;
