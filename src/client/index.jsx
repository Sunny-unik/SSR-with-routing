import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <BrowserRouter>
      <App data={window.__INITIAL_DATA__} />
    </BrowserRouter>
  </React.StrictMode>
);
