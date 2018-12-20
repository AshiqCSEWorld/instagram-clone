import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";

export default function SignUpForm({ signUpPending, signUp, style }) {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    signUp({ firstName, password, lastName, userName, email });
  }

  return (
    <form style={{...style}} onSubmit={handleSubmit} className="auth-content__form">
      <Input
        name="email"
        required
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        name="First_name"
        required
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <Input
        name="Last_name"
        required
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <Input
        name="username"
        required
        type="text"
        placeholder="Username"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <Input
        name="password"
        className="auth-content__password"
        required
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        value={password}
        minLength="6"
      />
      <Button
        onSubmit={handleSubmit}
        className="auth-content__submit"
        type="submit"
        disabled={signUpPending}
      >
        Sign Up
      </Button>
    </form>
  );
}
