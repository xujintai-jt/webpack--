const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry: resolve(__dirname,'src/js/index.js'),
  output: {
    path:resolve(__dirname , 'build') ,
    filename: 'js/build.js'
  },
  module: {
    rules: [
       /**
        js兼容性处理：babel-loader  @babel/preset-env  @babel/core
            1. 基本兼容性处理 --> @babel/preset-env
                问题：只能转换基本语法，如promise不能转换
            2. 全部js兼容性处理 -->引入 @babel/polyfill (在相应js文件中，import)
                问题： 我只要解决部分的兼容性问题，但是将所有兼容性代码全部引入，体积太大
            3. 按需加载：--> core-js （主要）
      */
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:'main.html',
      template:resolve(__dirname,'src/index.html')
    })
  ]
  
}