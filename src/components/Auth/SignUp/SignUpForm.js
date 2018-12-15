import React from 'react';
import Input from '../../Input';
import Button from '../../Button';

export default function SignUpForm() {
  return (
    <form className="auth-content__form">
      <Input
        className="auth-content__username"
        name="username"
        required
        type="text"
        placeholder="Username"
      />
      <Input
        name="password"
        className="auth-content__password"
        required
        type="password"
        placeholder="Password"
      />
      <Button className="auth-content__submit" type="submit">
        Log In
      </Button>
    </form>
  );
}
