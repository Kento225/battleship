const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new HTMLWebpackPlugin({
      title: "Battleship",
      filename: "index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
