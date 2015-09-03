/* eslint-env node */
import path from 'path';
import webpack from 'webpack';
import NyanProgressPlugin from 'nyan-progress-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import csswring from 'csswring';

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, './react-cssmodules-demo'),
    filename: 'bundle.js',
    publicPath: '/'
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
      'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!stylus-loader') //eslint-disable-line
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }]
  },

  postcss: () => {
    return [autoprefixer, csswring];
  }
};
