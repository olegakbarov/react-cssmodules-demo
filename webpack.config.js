
var path = require('path');
var webpack = require('webpack');
var NyanProgressPlugin = require('nyan-progress-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/build'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NyanProgressPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot-loader', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract('style-loader',
      'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!stylus-loader')
    }
  ]
  }
};
