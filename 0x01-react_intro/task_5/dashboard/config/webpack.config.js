const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.resolve("./dist/bundle.js"),
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [{ test: /\.css$/, 
    use: "css-loader", 
    options: { 
          modules: truen 
        }, 
      },
    ],
  },
};
