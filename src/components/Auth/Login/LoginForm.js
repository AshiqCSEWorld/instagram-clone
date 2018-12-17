import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";

export default function LoginForm({ loginPending, login }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(userName, password);
  }

  return (
    <form onSubmit={handleSubmit} className="auth-content__form">
      <Input
        className="auth-content__username"
        name="username"
        required
        type="text"
        placeholder="Username"
        value={userName}
        onChange={e => setUsername(e.target.value)}
      />
      <Input
        name="password"
        className="auth-content__password"
        required
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        disabled={loginPending}
        className="auth-content__submit"
        type="submit"
      >
        Log In
      </Button>
    </form>
  );
}
