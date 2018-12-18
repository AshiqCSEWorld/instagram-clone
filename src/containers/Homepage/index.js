import React from "react";
import Button from "components/Button";
import { connect } from "react-redux";
import * as logout from "reduxStore/actions/user/auth";

const Homepage = ({ logout }) => {
  return (
    <div className="container">
      <h1>Homepage</h1>
      <Button onClick={logout} style={{ width: 100 }}>
        Logout
      </Button>
    </div>
  );
};

export default connect(
  null,
  logout
)(Homepage);
