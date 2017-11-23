import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Root from '~/components/Root.jsx';

window.BaseRouter = {
  init: function init(mountpoint) {
    render(
      <Root />,
      document.getElementById(mountpoint)
    );

    if (module.hot) {
      module.hot.accept('./components/Root.jsx', () => {
        const NewRoot = require('~/components/Root.jsx').default;
        render(
          <NewRoot />,
          document.getElementById(mountpoint)
        );
      });
    }
  },
};
window.BaseRouter.init('root');
