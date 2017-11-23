import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import Footer from '~/components/Footer.jsx';
import Header from '~/components/Header.jsx';

const View = props => (
  <DocumentTitle title={props.title}>
    <div>
      <Header />
      <main className="mtop-big fx-container padded">
        {props.children}
      </main>
      <Footer />
    </div>
  </DocumentTitle>
);

View.defaultProps = {
  title: 'Albéric Trancart',
};

View.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  title: PropTypes.string,
};

export default View;
