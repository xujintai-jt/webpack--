const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
  mode: "development",
  entry: resolve(__dirname, "src/js/index.js"),
  output: {
    filename: "js/build.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/built.css",
    }),
  ],
  optimization: {
    //这将仅在生产模式下实现 CSS 优化。如果你想运行它也在开发中设置选项。optimization.minimizetrue
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
