const { resolve,join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: resolve(__dirname, "src/index.js"),
  output: {
    filename: "js/bundle.js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // test: /\.(woff|svg|eot|ttf)\??.*$/,
        // 排除css|js|html|less以外的文件
        exclude: /\.(css|js|html|less|jpg|png|gif|JPG)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath:'media'
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src/index.html"),
    }),
  ],
  //优点：webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。
  //特点：只会在内存中编译打包，不会有任何输出。
  //配置npm script命令 "start": "webpack-dev-server --open",

  //最新版本的webpack和webpack-dev-serve运行命令为 npm webpack serve
  devServer: {
    contentBase: join(__dirname, "dist"),
    //启动gzip压缩
    compress: true,
    port: 3000,
    open:true,
    //以上配置告知 webpack-dev-server，在 localhost:3000 下建立服务，
    //将 dist 目录下的文件，作为可访问文件。
  }
};
