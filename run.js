const webpack = require("webpack");

const WebpackDevServer = require("webpack-dev-server");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./entry",
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack worker",
      filename: "index.html",
    }),
  ],
};

const port = 1853;

new WebpackDevServer(
  {
    hot: true,
    port: port,
    historyApiFallback: {
      index: "index.html",
    },
  },
  webpack(config)
)
  .start()
  .then(() => {
    console.log("WDS started");
  });
