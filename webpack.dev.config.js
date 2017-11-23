const path = require('path');
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
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
    filename: '[name].js',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: ['/node_modules/', 'app/index.js'],
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
      loader: 'style-loader!css-loader!stylus-loader',
    }],
  },
};
