const nodeExternals = require("webpack-node-externals");

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "dist/server.js",
    publicPath: "/",
  },
  module: {
    rules: [{ test: /\.(js)$/, use: "babel-loader" }],
  },
  mode: "development",
};

module.exports = [serverConfig];
