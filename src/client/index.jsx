import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <App name={window.__INITIAL_DATA__} />
  </React.StrictMode>
);
