import React from 'react';
import './card.scss';

const Card = ({ children, className, ...rest }) => (
  <article {...rest} className={`card ${className}`}>
    {children}
  </article>
);

export default Card;
