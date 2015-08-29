var path = require('path');
var webpack = require('webpack');

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
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot-loader', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }
  ]
  }
};
