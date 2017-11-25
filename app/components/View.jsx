import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '~/components/Footer.jsx';
import Header from '~/components/Header.jsx';

const View = props => (
  <div>
    <Helmet>
      <title>{props.title}</title>
      <meta property="og:title" content="Albéric Trancart" />
      <meta property="og:image" content="https://alberic.trancart.net/img/profile.jpg" />
      <meta property="og:url" content="https://alberic.trancart.net" />
      <meta
        property="og:description"
        content="Developer, life hacker, space enthusiast and more!"
      />
    </Helmet>
    <Header />
    <main className="mtop-big fx-container padded">
      {props.children}
    </main>
    <Footer />
  </div>
);

View.defaultProps = {
  title: 'Albéric Trancart',
};

View.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  title: PropTypes.string,
};

export default View;
