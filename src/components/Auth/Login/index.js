import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as login from "reduxStore/actions/auth/login";

import "./login.scss";
import "../auth.scss";

import Card from "../../Card";
import AuthLogo from "../../LoginLogo";
import OrSection from "../../OrSection";
import AlternateAuth from "./AlternateAuth";
import LoginForm from "./LoginForm";
import ShowError from "./ShowError";

const Login = props => (
  <main className="container auth">
    <div className="auth-content">
      <Card className="auth-content__wrapper">
        <AuthLogo />
        <LoginForm login={props.login} loginPending={props.pending} />
        <OrSection className="auth-content__or" />

        {props.error && <ShowError error={props.payload} />}

        <Link
          to="/auth/forgot-password"
          className="auth-content__forgot-pass secondary-color"
        >
          Forgot password?
        </Link>
      </Card>

      <AlternateAuth />
    </div>
  </main>
);

export default connect(
  ({ auth }) => ({
    error: auth.loginError,
    payload: auth.loginPayload,
    pending: auth.loginPending
  }),
  login
)(Login);
