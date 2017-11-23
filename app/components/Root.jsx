import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from '~/routes.jsx';

import '~/style.styl';
import '~/components/Content.styl';
import '~/components/Divider.styl';
import '~/components/Link.styl';

const scrollTop = () => window.scrollTo(0, 0);

export default () => (
  <BrowserRouter onUpdate={scrollTop}>
    {routes}
  </BrowserRouter>
);
