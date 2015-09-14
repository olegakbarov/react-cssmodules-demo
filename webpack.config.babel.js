/* eslint-env node */
import path from 'path';
import webpack from 'webpack';
import NyanProgressPlugin from 'nyan-progress-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const env = process.env.NODE_ENV === 'production' ? 'production' : 'dev';

const cfg = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: './build'
  },

  plugins: [
    new NyanProgressPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  module: {
    loaders: [
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
          'file-loader?./blob/gh-pages/name=name-[hash:6].[ext]'
        ]
      },
      {
        test: /\.md$/,
        loader: 'html!markdown'
      }
    ]
  },

  postcss: () => {
    return [autoprefixer, cssnano];
  }
};

const jsLoader = {
  test: /\.js$/,
  loaders: ['babel'],
  include: path.join(__dirname, 'src')
};

if (env !== 'production') {
  cfg.debug = true;
  cfg.devtool = '#eval-source-map';

  cfg.entry.push(
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  );

  cfg.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  );

  jsLoader.loaders.unshift('react-hot');
}

cfg.module.loaders.push(jsLoader);

module.exports = cfg;
