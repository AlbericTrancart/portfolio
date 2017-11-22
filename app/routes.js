import React from 'react';
import { Route, IndexRoute } from 'react-router';

import View from 'components/View';
import HomeView from 'views/Home';

export default (
  <Route path="/" component={View}>
    <IndexRoute component={HomeView} />
    {/* Render empty components for all others URL else react-router throws a 404 */}
    <Route path="*" component={null} />
  </Route>
);

// /2016/11/how-i-built-my-modular-lava-gaming-board-in-one-week/
// /2016/10/why-mars-matters/
// /2016/10/learn-and-share-the-one-post-to-rule-them-all/
