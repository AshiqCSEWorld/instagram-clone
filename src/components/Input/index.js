import React, { useState } from 'react';
import './input.scss';

const Input = ({ type, className, ...rest }) => {
  const [showPassword, togglePassVisibility] = useState(false);

  const togglePass = () => togglePassVisibility(!showPassword);

  if (type === 'password') {
    return (
      <div className="styled-password__wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          className={`styled-input styled-input--password ${className}`}
          {...rest}
        />
        <i onClick={togglePass} className={`fas fa-${showPassword ? 'unlock' : 'lock'}`} />
      </div>
    );
  }

  return <input className={`styled-input ${className}`} {...rest} />;
};

export default Input;
