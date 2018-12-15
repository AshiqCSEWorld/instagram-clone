import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../Card';

export default function AlternateAuth() {
  return (
    <Card className="auth__signup">
      <p>Have an account?</p>
      <Link className="tertiary-link" to="/auth/login">
        Login
      </Link>
    </Card>
  );
}
