/** @format */

import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { Route, Routes, Router } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Switch>
        <PrivateRoute path="/" exact={true}>
          <Dashboard />
        </PrivateRoute>
        <Route path="/login">{<Login />}</Route>
        <Route path="*">{<Error />}</Route>
      </Switch>
    </AuthWrapper>
  );
}

export default App;
