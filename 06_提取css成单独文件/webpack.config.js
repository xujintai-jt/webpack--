const { resolve } = require("path");
//指定html模板插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//提取js中的css成单独文件的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//common js写法
module.exports = {
  mode: "development",
  entry: resolve(__dirname, "src/js/index.js"),
  output: {
    filename: "js/bundle.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // "style-loader",(缺点:首次加载闪屏、创建style标签性能低、增加js文件体积)
          // 作用：提取js中的css成单独文件，因此不需要再创建style标签。
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      filename: "css/bundle.css",
    }),
  ],
};
