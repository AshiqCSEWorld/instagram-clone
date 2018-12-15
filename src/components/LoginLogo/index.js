import React from 'react';
import './loginLogo.scss';

const LoginLogo = ({ className, ...rest }) => (
  <h1 {...rest} className={`login-instagram-logo instagram-sprite ${className}`}>
    Instagram
  </h1>
);

export default LoginLogo;
