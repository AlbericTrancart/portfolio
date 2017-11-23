import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from '~/routes.jsx';

import ScrollToTop from '~/components/ScrollToTop.jsx';

import '~/style.styl';
import '~/components/Content.styl';
import '~/components/Divider.styl';
import '~/components/Link.styl';

export default () => (
  <BrowserRouter>
    <ScrollToTop>
      {routes}
    </ScrollToTop>
  </BrowserRouter>
);
