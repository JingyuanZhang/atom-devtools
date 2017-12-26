var path = require('path')
var webpack = require('webpack')
var alias = require('../alias')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var bubleOptions = {
  target: { safari: 9 },
  objectAssign: 'Object.assign'
}

module.exports = {
  entry: {
    devtools: './src/devtools.js',
    backend: './src/backend.js',
    hook: './src/hook.js',
    'hook-loader': './src/hook-loader.js',
    proxy: './src/proxy.js',
  },
  output: {
    path: __dirname + '/Vue.js devtools.safariextension/build',
    publicPath: '/build/',
    filename: '[name].js',
  },
  resolve: {
    alias: Object.assign({}, alias, {
      vue$: 'vue/dist/vue.common.js'
    })
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader:  'buble-loader',
        exclude: /node_modules|vue\/dist|vuex\/dist/,
        options: bubleOptions
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          buble: bubleOptions
        }
      },
      {
        test: /\.(png|woff2)$/,
        loader: 'url-loader?limit=0'
      }
    ]
  },
  performance: {
    hints: false
  },
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    quiet: true
  },
  plugins: [
    new FriendlyErrorsPlugin()
  ]
}
