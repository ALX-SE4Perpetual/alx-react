const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: "./dist/",
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use:["style-loader", "css-loader"], 
        options: { 
          modules: true 
        }, 
      },
    ],
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
			options: {
		      bypassOnDebug: true,
			  disable: true
            },
          },
        ],
      },
    ],
  },
};
