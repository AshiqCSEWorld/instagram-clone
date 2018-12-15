import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../ControlledRoute/PrivateRoute";
import PublicRoute from "../ControlledRoute/PublicRoute";

import asyncLoad from "../../utils/asyncLoad";
import AuthPage from "../Auhtpage";

const App = () => (
  <Switch>
    <PrivateRoute
      path="/"
      exact
      component={asyncLoad(() => import("../Homepage"))}
    />
    <PublicRoute path="/auth" component={AuthPage} />
    <Route component={asyncLoad(() => import("../../components/NoteFound"))} />
  </Switch>
);

export default App;
