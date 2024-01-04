const path = require("path");
const webpack = require("webpack");

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: "dist/server.js",
    publicPath: "/",
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],
};

const clientConfig = {
  entry: "./src/client/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "app.js",
    publicPath: "/",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
  ],
};

module.exports = [serverConfig, clientConfig];
