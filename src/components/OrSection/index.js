import React from 'react';
import './orSection.scss';

const OrSection = ({ className, ...rest }) => (
  <div {...rest} className={`or-section-component ${className}`}>
    <div className="or-section-component__line" />
    <div className="or-section-component__word">OR</div>
  </div>
);

export default OrSection;
