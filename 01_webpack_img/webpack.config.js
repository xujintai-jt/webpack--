// commonjs语法
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"), // string
    filename: "bundle.js", // string
    // publicPath: "/dist/"
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "less-loader" // compiles Less to CSS
      }]
    },
      //问题：默认处理不了html中的图片
    {
      test: /\.(png|jpg|gif|JPG)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024,
            //url-loader(url图片)默认情况下，生成使用 ES 模块语法的 JS 模块。
            //而低版本html-loader(html引入图片)使用commonjs
            //解析时会出问题[Object Module]
            //解决：关闭url-loader的es6 module，使用commonjs解析。或者使用新版本html-loader
            // esModule: false,
            //ext:取文件的原扩展名
           name: '[hash:10].[ext]'
          }
        },
      ]
      },
    //html-loader 专门用来处理html文档中的img图片(负责引入图片，从而可以让url-loader处理)
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            //默认情况下，生成使用ES块语法的JS模块
            //问题:生成的图片显示错误
            //解决:esModule改为false
            options: {
              esModule: false,
            },
          },
        ]
      }]
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template:resolve(__dirname,'src/index.html')
    }
  )]
}