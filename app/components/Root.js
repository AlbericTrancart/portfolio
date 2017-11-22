import React from 'react';
import { browserHistory, Router } from 'react-router';
import routes from 'routes';

import 'style.styl';
import './Divider.styl';
import './Link.styl';

export default () => {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} routes={routes} />
  );
};
