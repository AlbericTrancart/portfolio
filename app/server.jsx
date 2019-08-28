import ejs from "ejs";
import express from "express";
import React from "react";
import Helmet from "react-helmet";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import dirs from "dirs";
import routes from "routes";

const app = express();
const port = process.env.PORT || 5000;
app.use("/img", express.static(dirs.img));
app.set("view engine", "ejs");
app.set("views", dirs.dist);

if (process.env.NODE_ENV !== "production") {
  // Dev env
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const config = require("../webpack.dev.config.js");
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
      poll: 500
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
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
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get("*", (req, res) => {
    res.send(
      ejs.render(middleware.fileSystem.readFileSync(dirs.index, "utf8"), {
        root: "",
        title: "",
        meta: ""
      })
    );
  });
} else {
  // Prod env
  app.use(express.static(dirs.dist));
  app.use((req, res) => {
    const context = {};
    const html = renderToString(
      <StaticRouter location={req.url} context={context}>
        {routes}
      </StaticRouter>
    );
    const head = Helmet.rewind();

    if (context.url) {
      res.writeHead(302, { Location: context.url });
      res.end();
    } else {
      res.status(200).render("index", {
        root: html,
        title: head.title.toString(),
        meta: head.meta.toString()
      });
    }
  });
}

console.log(`STARTING SERVER ON PORT ${port}`);
app.listen(port);
