import React from 'react';
import Input from '../../Input';
import Button from '../../Button';

export default function SignUpForm() {
  return (
    <form className="auth-content__form">
      <Input name="email" required type="email" placeholder="Email" />
      <Input name="First_name" required type="text" placeholder="First Name" />
      <Input name="Last_name" required type="text" placeholder="Last Name" />
      <Input name="username" required type="text" placeholder="Username" />
      <Input
        name="password"
        className="auth-content__password"
        required
        type="password"
        placeholder="Password"
      />
      <Button className="auth-content__submit" type="submit">
        Sign Up
      </Button>
    </form>
  );
}
