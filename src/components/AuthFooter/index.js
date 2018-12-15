import React from 'react';
import { Link } from 'react-router-dom';

const AuthFooter = () => (
  <footer className="auth-footer">
    <section className="auth-footer__links">
      <Link to="/personal/home">Home</Link>
      <Link to="/personal/developer">Developer</Link>
      <Link to="/personal/about">About</Link>
    </section>

    <article className="auth-footer__corporate">© 2018 Instagram</article>
  </footer>
);

export default AuthFooter;
