import React from 'react';
import './button.scss';

const Button = (props) => {
  const { className = 'button', ...rest } = props;

  return (
    <button {...rest} className={`button-component ${className}`}>
      {rest.children}
    </button>
  );
};

export default Button;
