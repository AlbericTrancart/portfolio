const path = require('path');
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, './app/index.jsx'),
  ],
  resolve: {
    alias: {
      app: 'app',
    },
    modules: [
      path.join(__dirname, '/app'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, '/app/img/profile.jpg'),
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    // plugin for passing in data to the js, like what NODE_ENV we are in.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
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
      test: /\.(png|jpe?g|gif)$/,
      loader: 'url-loader?limit=8192', // inline base64 URLs for <=8k images, direct URLs for the rest
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract({
        fallback: { loader: 'style-loader' },
        use: ['css-loader', { loader: 'stylus-loader' }],
      }),
    }],
  },
};
