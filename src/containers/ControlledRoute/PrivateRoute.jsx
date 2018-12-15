import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (false ? <Component {...props} /> : <Redirect to="/auth/login" />)}
  />
);
