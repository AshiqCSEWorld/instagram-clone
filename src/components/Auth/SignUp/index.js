import React from 'react';

import './signup.scss';
import '../auth.scss';

import Card from '../../Card';
import AuthLogo from '../../LoginLogo';
import Policy from './policy';
import SignUpForm from './SignUpForm';
import AlternateAuth from './alternateAuth';

const SignUp = () => (
  <main className="container auth">
    <div className="auth-content">
      <Card className="auth-content__wrapper">
        <AuthLogo />
        <SignUpForm />
        <Policy />
      </Card>

      <AlternateAuth />
    </div>
  </main>
);

export default SignUp;
