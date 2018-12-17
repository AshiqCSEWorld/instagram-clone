import React from "react";
import { Switch, Route } from "react-router-dom";

import "./authpage.scss";

import AuthFooter from "../../components/AuthFooter";
import asyncLoad from "./authLoading";

const AuthPage = ({ match }) => (
  <div className="authpage">
    <div className="authpage__main-content">
      <Switch>
        <Route
          path={`${match.path}/login`}
          component={asyncLoad(() => import("../../components/Auth/Login"))}
        />
        <Route
          path={`${match.path}/signup`}
          component={asyncLoad(() => import("../../components/Auth/SignUp"))}
        />
        <Route
          component={asyncLoad(() => import("../../components/NoteFound"))}
        />
      </Switch>
    </div>

    <AuthFooter />
  </div>
);

export default AuthPage;
