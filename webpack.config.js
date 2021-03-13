// commonjs
const { resolve } = require("path");

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
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      }
    ],
  },
  mode: "development",
};
