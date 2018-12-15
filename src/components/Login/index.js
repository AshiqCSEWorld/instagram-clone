import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import Card from '../Card';
import Input from '../Input';
import Button from '../Button';
import LoginLogo from '../LoginLogo';
import OrSection from '../OrSection';

const Login = ({ error = false }) => (
  <main className="container login">
    <div className="login-content">
      <Card className="login-content__wrapper">
        <LoginLogo />

        <form className="login-content__form">
          <Input
            className="login-content__username"
            name="username"
            required
            type="text"
            placeholder="Username"
          />
          <Input
            name="password"
            className="login-content__password"
            required
            type="password"
            placeholder="Password"
          />
          <Button className="login-content__submit" type="submit">
            Log In
          </Button>
        </form>

        <OrSection className="login-content__or" />

        {/* show error */}
        {error && (
          <p className="login-content__error">
            We couldn't connect to Instagram. Make sure you're connected to the internet and try
            again.
          </p>
        )}

        <Link to="/auth/forgot-password" className="login-content__forgot-pass secondary-color">
          Forgot password?
        </Link>
      </Card>

      <Card className="login__signup">
        <p>Don't have an account?</p>
        <Link className="tertiary-link" to="/auth/signup">
          Sign up
        </Link>
      </Card>
    </div>
  </main>
);

export default Login;
