const path = require("path");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devtool: "source-map",

  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "build"),
    overlay: true,
    historyApiFallback: true,
  },

  watch: true,
});
