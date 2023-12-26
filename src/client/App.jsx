import React from "react";
import routes from "../shared/routes";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

export default function App({ data }) {
  return (
    <div className="container">
      <h1>Select a language to show popular github repositories</h1>
      <Navbar />
      <Routes>
        {routes.map(({ path, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            element={<C {...rest} repos={data} />}
          />
        ))}
      </Routes>
    </div>
  );
}
