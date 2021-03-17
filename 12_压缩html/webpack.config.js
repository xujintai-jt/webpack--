const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //生产环境自动压缩js
  mode: "production",
  entry: resolve(__dirname, "src/js/index.js"),
  output: {
    path: resolve(__dirname, "build"),
    filename: "js/build.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: resolve(__dirname, "src/index.html"),
      minify: {
        collapseWhitespace: true,//删除空格、换行
        removeComments: true,//删除注释
    },
    })
  ]
}