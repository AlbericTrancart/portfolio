const path = require('path');
const express = require('express');
const port = (process.env.PORT || 5000);
const app = express();

const context = __dirname + '/app';
const indexPath = path.join(__dirname, 'dist/index.html');
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  // const webpackDevServer = require('webpack-dev-server');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.dev.config.js');
  const compiler = webpack(config);

  const middleware = webpackDevMiddleware(compiler, {
    contentBase: context,
    port: port,
    inline: false,
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    publicPath: config.output.publicPath,
    disableHostCheck: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 500,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(indexPath));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(indexPath);
  });
}

app.listen(port);
console.log(`Listening at http://0.0.0.0:${port}`);
