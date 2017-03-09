var path = require("path");
var webpack = require("webpack");

var cfg = {
  devtool: "source-map",
  entry: {
    root: "./out/Beast/source/Root.js",
    beast: "./out/Beast/source/Beast.js",
    abstractDungeoneering: "./out/Beast/source/AbstractDungeoneering.js",
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader'
      },
      {
        enforce: 'pre',
        test: /\.css/, 
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

module.exports = cfg;