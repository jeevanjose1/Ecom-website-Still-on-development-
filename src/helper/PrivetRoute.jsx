import React from "react";

import { Route, Redirect } from "react-router";
import { isAuthenticated } from "../components/auth/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isauth = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        isauth ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    />
  );
};

export default PrivateRoute;
