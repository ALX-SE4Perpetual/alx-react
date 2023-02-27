const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.resolve("./dist"),
    filename: "./bundle.js",
  },
  devServer: {
    static: "./dist/bundle.js",
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: "css-loader", 
        options: { 
          modules: true 
        }, 
      },
    ],
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
