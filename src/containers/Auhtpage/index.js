import React from "react";

import "./authpage.scss";

import AuthFooter from "../../components/AuthFooter";
import asyncLoad from "./authLoading";
import PublicRoute from "containers/ControlledRoute/PublicRoute";

const AuthPage = () => (
  <div className="authpage">
    <div className="authpage__main-content">
      <PublicRoute
        path="/users/login"
        component={asyncLoad(() => import("../../components/Auth/Login"))}
      />
      <PublicRoute
        path="/users/signup"
        component={asyncLoad(() => import("../../components/Auth/SignUp"))}
      />
    </div>

    <AuthFooter />
  </div>
);

export default AuthPage;
