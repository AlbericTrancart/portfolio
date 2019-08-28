import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import ReactGA from "react-ga";

import Root from "components/RootBrowser";

window.BaseRouter = {
  init: function init(mountpoint) {
    let debug = false;
    render(<Root />, document.getElementById(mountpoint));

    // If hot, reimport the module
    if (module.hot) {
      debug = true;
      module.hot.accept("./components/RootBrowser", () => {
        const NewRoot = require("components/RootBrowser").default;
        render(<NewRoot />, document.getElementById(mountpoint));
      });
      return;
    }
    ReactGA.pageview("/");
  }
};
window.BaseRouter.init("root");
