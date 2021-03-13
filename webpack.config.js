// commonjs
//引入核心模块
const { resolve } = require("path");
//引入插件(第三方插件)
const HtmlWebpackPlugin = require("html-webpack-plugin");

// commonjs
// const exports = module.exports
module.exports = {
  //样式资源也在index.js(入口文件)中
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    //不同的文件配置不同的loader
    rules: [
      {
        test: /\.css$/,
        //use数组中loader执行顺序从右向左，从下到上，依次执行
        use: [
          //创建style标签，将js中的样式资源插入进行，添加到head中生效。
          "style-loader",
          //将css文件变成commonjs模块加载js中，里面内容是样式字符串。
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          //将less文件编译成css文件
          "less-loader", // compiles Less to CSS
        ],
      },
    ],
  },
  plugins: [
    //自动引入打包输出所有的资源
    new HtmlWebpackPlugin({
      //复制本地src/index.html文件(不需要自己引入打包资源)，引入打包输出所有的资源
      template: resolve("./src/index.html"),
    }),
  ],
  mode: "development",
};
