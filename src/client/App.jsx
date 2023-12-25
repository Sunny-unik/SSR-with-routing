import React from "react";
import routes from "../shared/routes";
import { Route, Routes } from "react-router-dom";

export default function App({ data }) {
  return (
    <Routes>
      {routes.map(({ path, component: C, ...rest }) => (
        <Route key={path} path={path} element={<C {...rest} />} />
      ))}
    </Routes>
  );
}
