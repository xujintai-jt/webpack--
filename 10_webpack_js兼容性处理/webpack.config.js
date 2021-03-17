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