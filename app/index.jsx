import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Root from '~/components/RootBrowser.jsx';

window.BaseRouter = {
  init: function init(mountpoint) {
    render(<Root />, document.getElementById(mountpoint));

    // If hot, reimport the module
    if (module.hot) {
      module.hot.accept('./components/RootBrowser.jsx', () => {
        const NewRoot = require('~/components/RootBrowser.jsx').default;
        render(<NewRoot />, document.getElementById(mountpoint));
      });
    }
  },
};
window.BaseRouter.init('root');
