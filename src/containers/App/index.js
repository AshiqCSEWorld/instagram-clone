import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../ControlledRoute/PrivateRoute";
import asyncLoad from "../../utils/asyncLoad";
import AuthPage from "../Auhtpage";

export default () => (
  <Switch>
    <PrivateRoute
      path="/"
      exact
      component={asyncLoad(() => import("../Homepage"))}
    />
    <AuthPage />
    <Route component={asyncLoad(() => import("../../components/NoteFound"))} />
  </Switch>
);
