import React from 'react';
import { renderToString } from 'react-dom/server';
import RootStatic from '~/components/RootStatic.jsx';
import dirs from '~/dirs';
import express from 'express';

const app = express();
const port = (process.env.PORT || 5000);
app.use('/img', express.static(dirs.img));

if (process.env.NODE_ENV !== 'production') {
  // Dev env
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.dev.config.js');
  const compiler = webpack(config);

  const middleware = webpackDevMiddleware(compiler, {
    contentBase: dirs.src,
    port,
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
      chunkModules: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(dirs.index));
    res.end();
  });
} else {
  // Prod env
  app.set('view engine', 'ejs');
  app.set('views', dirs.dist);
  app.use(express.static(dirs.dist));
  app.use((req, res) => {
    const html = renderToString(<RootStatic location={req.url} />);

    res.status(200).render('index', { root: html });
  });
}

app.listen(port);
