import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../ControlledRoute/PrivateRoute";
import PublicRoute from "../ControlledRoute/PublicRoute";

// import HomePage from '../Homepage';
// import AuthPage from "../Auhtpage";
// import NotFound from "../../components/NoteFound";
import asyncLoad from "../../utils/asyncLoad";

const App = () => (
  <Switch>
    <PrivateRoute
      path="/"
      exact
      component={asyncLoad(() => import("../Homepage"))}
    />
    <PublicRoute
      path="/auth"
      component={asyncLoad(() => import("../Auhtpage"))}
    />
    <Route component={asyncLoad(() => import("../../components/NoteFound"))} />
  </Switch>
);

export default App;
