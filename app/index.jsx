import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';

import Root from '~/components/RootBrowser.jsx';

window.BaseRouter = {
  init: function init(mountpoint) {
    let debug = false;
    render(<Root />, document.getElementById(mountpoint));

    // If hot, reimport the module
    if (module.hot) {
      debug = true;
      module.hot.accept('./components/RootBrowser.jsx', () => {
        const NewRoot = require('~/components/RootBrowser.jsx').default;
        render(<NewRoot />, document.getElementById(mountpoint));
      });
      return;
    }
    ReactGA.initialize('UA-110877372-1', { debug });
    ReactGA.pageview('/');
  },
};
window.BaseRouter.init('root');
