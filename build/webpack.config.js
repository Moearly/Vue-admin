// nodejs 中的path模块
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var cssLoaders = require('./css-loaders')

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
  entry: {
    index: path.resolve(__dirname, '../src/main.js'),
    vendors: [
      'Vue'
    ]
  },
  // 输出配置
  output: {
    // 输出路径是 myProject/static/js
    path: path.resolve(__dirname, '../static/js'),
    publicPath: 'static/js/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets=es2015',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  vue: {
    loaders: cssLoaders()
  },
  resolve: {
    extensions: ['', '.js', '.vue','.sass']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../static/index.html'),
      inject: true
    })
  ]
}
