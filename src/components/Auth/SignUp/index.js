import React from "react";
import { connect } from "react-redux";

import "./signup.scss";
import "../auth.scss";

import Card from "../../Card";
import AuthLogo from "../../authLogo";
import Policy from "./policy";
import SignUpForm from "./SignUpForm";
import AlternateAuth from "./alternateAuth";
import * as signUp from "reduxStore/actions/user/auth";
import ShowError from "../ShowError";

const SignUp = props => (
  <main className="container auth">
    <div className="auth-content">
      <Card className="auth-content__wrapper">
        <AuthLogo />
        <SignUpForm signUp={props.signUp} signUpPending={props.pending} />
        {props.error && <ShowError error={props.payload} />}
        <Policy />
      </Card>

      <AlternateAuth />
    </div>
  </main>
);

export default connect(
  ({ auth }) => ({
    error: auth.signupError,
    payload: auth.signupPayload,
    pending: auth.signupPending
  }),
  signUp
)(SignUp);
