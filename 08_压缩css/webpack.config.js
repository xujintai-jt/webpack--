const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//js文件中抽取单独的css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//压缩css文件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

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
    new HtmlWebpackPlugin({
      filename:'main.html',
      template: resolve(__dirname, "src/index.html"), //本地自定义模板
    }),
  ],
  optimization: {
    //这将仅在生产模式下实现 CSS 优化。如果你想运行它也在开发中设置选项。optimization.minimizetrue
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
