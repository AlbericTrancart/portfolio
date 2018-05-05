const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dirs = require('./app/dirs');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: [
    dirs.main,
  ],
  output: {
    path: dirs.dist,
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: dirs.favicon,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: '!!raw-loader!app/index.tpl.html',
      inject: 'body',
      filename: 'index.ejs',
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    // plugin for passing in data to the js, like what NODE_ENV we are in.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  optimization: {
    minimize: true,
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false,
      },
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract({
        fallback: { loader: 'style-loader' },
        use: ['css-loader', { loader: 'stylus-loader' }],
      }),
    }],
  },
};
