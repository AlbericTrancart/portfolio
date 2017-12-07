import PropTypes from 'prop-types';
import React from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    ReactGA.pageview(this.props.location.pathname);
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
};

export default withRouter(ScrollToTop);
