import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../Card';

export default function AlternateAuth() {
  return (
    <Card className="auth__signup">
      <p>Don't have an account?</p>
      <Link className="tertiary-link" to="/auth/signup">
        Sign up
      </Link>
    </Card>
  );
}
