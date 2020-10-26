import React from "react";
import { Route, Redirect } from "react-router-dom";
export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return !user ? children : <Redirect to={{ pathname: loggedInPath }} />;
      }}
    />
  );
};
export const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect to={{ pathname: "signin", state: { from: location } }} />
        );
      }}
    />
  );
};
