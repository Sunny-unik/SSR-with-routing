import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <App data={window.__INITIAL_DATA__} />
  </React.StrictMode>
);
