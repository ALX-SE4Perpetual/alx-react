const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    mode: 'development',
    main: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
  },
  devServer: {
    static: path.resolve('./dist'),
		compress: true,
		port: 8564,
  },
  module: {
    rules: [
      ...
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
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
      {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Holberton-dashboard",
    }),
  ],
};
