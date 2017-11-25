import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from '~/routes.jsx';

import '~/style.styl';
import '~/components/Content.styl';
import '~/components/Divider.styl';
import '~/components/Link.styl';

// For browsing by a user
export default () => (
  <BrowserRouter>
    {routes}
  </BrowserRouter>
);
