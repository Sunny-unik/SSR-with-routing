const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");

config();
const app = express();
const port = process.env.PORT || 4001;

app.use(cors());

app.get("/health", (req, res) => res.send("OK"));
app.get("/", (req, res) => res.send("HELLO WORLD"));

app.listen(port, () => console.log("App is live on http://localhost:" + port));
