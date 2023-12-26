import express from "express";
import cors from "cors";
import { config } from "dotenv";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App.jsx";
import path from "path";
import serializeJavascript from "serialize-javascript";
import { matchPath } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server.js";
import routes from "../shared/routes";

config();
const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.static(path.join(__dirname, "/public")));

app.get("/health", (_req, res) => res.send("OK"));

app.get("*", (req, res) => {
  const activeRoute = routes.find((route) => matchPath(route, req.url)) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then((data) => {
    const compressedData = serializeJavascript(data);
    const markup = renderToString(
      <StaticRouter location={req.url} context={data}>
        <App data={compressedData} />
      </StaticRouter>
    );
    res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with React</title>
            <script src="/app.js" defer></script>
            <script>
                window.__INITIAL_DATA__ = ${compressedData}
            </script>
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `);
  });
});

app.listen(port, () => console.log("App is live on http://localhost:" + port));
