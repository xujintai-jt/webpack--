const { resolve } = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/js/index.js'),
  output: {
    filename: 'js/build.js',
    path: resolve(__dirname, 'build'),
  },
  /*
        语法检查：eslint-webpack-plugin  eslint
          注意：只检查自己写的源代码，第三方的库是不用检查的
          设置检查规则：
            package.json中eslintConfig中设置(或eslintrc文件)
            airbnb --> eslint-config-airbnb-base  eslint-plugin-import eslint
      */
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'json', 'coffee'],
      exclude: '/node_modules/'
    }),
  ],
};
