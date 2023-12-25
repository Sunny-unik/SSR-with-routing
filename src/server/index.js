import express from "express";
import cors from "cors";
import { config } from "dotenv";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App.jsx";
import path from "path";

config();
const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.static(path.join(__dirname, "/public")));

app.get("/health", (_req, res) => res.send("OK"));

app.get("*", (_req, res) => {
  const markup = renderToString(<App />);
  res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with React</title>
            <script src="app.js" async defer></script>
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `);
});

app.listen(port, () => console.log("App is live on http://localhost:" + port));
