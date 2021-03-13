const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: resolve(__dirname,'src/index.js'),
  output: {
    path: resolve(__dirname, "dist"), // string
    filename: "bundle.js", // string
  },
  module: {
    // 关于模块配置
    rules: [
      // 模块规则（配置 loader、解析器等选项）
      {
        test: /\.css$/,
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
          //创建style标签，将js中的样式资源插入进行，添加到head中生效。
          "style-loader",
          //将css文件变成commonjs模块加载js中，里面内容是样式字符串。
          "css-loader",
          "less-loader",
        ],
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template:resolve(__dirname,'src/index.html')
  })]
  
}