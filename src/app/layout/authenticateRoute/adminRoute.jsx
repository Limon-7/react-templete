import React from "react";
import { Redirect, Route } from "react-router-dom";

function AdminRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = true;
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/signin" />
        )
      }
    />
  );
}

export default AdminRoute;
