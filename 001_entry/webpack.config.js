const {resolve}=require('path')

module.exports = {
  mode:'development',
  // entry: './src/js/index.js',
  entry:['./src/js/index.js','./src/js/index2.js'],
  output: {
    filename:'js/build.js',
    path:resolve(__dirname,'build')
  }
}