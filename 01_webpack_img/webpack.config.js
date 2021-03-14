// commonjs语法
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"), // string
    filename: "bundle.js", // string
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
    {
      test: /\.(png|jpg|gif|JPG)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024,
            esModule: false,
          }
        }
      ]
    }]
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template:resolve(__dirname,'src/index.html')
    }
  )]
}