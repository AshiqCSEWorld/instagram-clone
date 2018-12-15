import React from 'react';
import { Link } from 'react-router-dom';

import './login.scss';
import '../auth.scss';

import Card from '../../Card';
import AuthLogo from '../../LoginLogo';
import OrSection from '../../OrSection';
import AlternateAuth from './AlternateAuth';
import LoginForm from './LoginForm';
import ShowError from './ShowError';

const Login = ({ error = false }) => (
  <main className="container auth">
    <div className="auth-content">
      <Card className="auth-content__wrapper">
        <AuthLogo />
        <LoginForm />
        <OrSection className="auth-content__or" />

        {error && <ShowError />}

        <Link to="/auth/forgot-password" className="auth-content__forgot-pass secondary-color">
          Forgot password?
        </Link>
      </Card>

      <AlternateAuth />
    </div>
  </main>
);

export default Login;
