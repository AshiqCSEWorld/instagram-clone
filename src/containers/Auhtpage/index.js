import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './authpage.scss';

import NoteFound from '../../components/NoteFound';
import Login from '../../components/Auth/Login';
import SignUp from '../../components/Auth/SignUp';
import AuthFooter from '../../components/AuthFooter';

const AuthPage = ({ match }) => (
  <div className="authpage">
    <Switch>
      <Route path={`${match.path}/login`} component={Login} />
      <Route path={`${match.path}/signup`} component={SignUp} />
      <Route component={NoteFound} />
    </Switch>

    <AuthFooter />
  </div>
);

export default AuthPage;
