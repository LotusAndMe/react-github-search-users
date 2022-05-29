/** @format */

import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="*" element={<Error />}></Route> */}
    </Routes>
  );
}

export default App;
