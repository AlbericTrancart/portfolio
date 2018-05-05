import webpack from 'webpack';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import dirs from './app/dirs';

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    dirs.main,
  ],
  resolve: {
    alias: {
      app: 'app',
    },
    modules: [
      dirs.src,
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: dirs.dist,
    filename: '[name].js',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: ['/node_modules/'],
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
      loader: 'style-loader!css-loader!stylus-loader',
    }],
  },
};
