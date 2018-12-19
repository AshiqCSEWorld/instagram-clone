import React from "react";

export default ({ error }) => (
  <p className="auth-content__hint auth-content__hint--error">{error.data.message}</p>
);
