/*
  HMR: hot module replacement 热模块替换 / 模块热替换
    作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块） 
      极大提升构建速度
      
      样式文件：可以使用HMR功能：因为style-loader内部实现了~
      js文件：默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码
        注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。
      html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能）
        解决：修改entry入口，将html文件引入
*/

const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: resolve(__dirname, "src/index.js"),
  // entry: ['./src/index.js', './src/index.html'],
  output: {
    filename: "bundle.js",
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
    open: true,
    //以上配置告知 webpack-dev-server，在 localhost:3000 下建立服务。将 dist 目录下的文件，作为可访问文件。
    //启用模块热替换()
    hot: true,
  },
  target: 'web',
  devtool: 'source-map',
};
