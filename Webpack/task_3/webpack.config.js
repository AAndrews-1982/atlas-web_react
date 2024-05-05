const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 8564,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/header/header.html",
      filename: "header.html",
      chunks: ["header"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/body/body.html",
      filename: "body.html",
      chunks: ["body"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/footer/footer.html",
      filename: "footer.html",
      chunks: ["footer"],
    }),
  ],
  entry: {
    header: "./src/header/header.js",
    body: "./src/body/body.js",
    footer: "./src/footer/footer.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // Add necessary rules for handling different file types (e.g., CSS, images) if required
    ],
  },
};
