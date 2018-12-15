import React from 'react';
import './button.scss';

const Button = (props) => {
  const {
    disabled, className, type = 'button', ...rest
  } = props;

  return (
    <button type={type} className={`button-component ${className}`}>
      {rest.children}
    </button>
  );
};

export default Button;
