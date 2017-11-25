import React from 'react';
import { StaticRouter } from 'react-router-dom';
import routes from '~/routes.jsx';
import PropTypes from 'prop-types';

// For server-side rendering
const RootStatic = props => (
  <StaticRouter location={props.url}>
    {routes}
  </StaticRouter>
);

RootStatic.propTypes = {
  url: PropTypes.string.isRequired,
};

export default RootStatic;
