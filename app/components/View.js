import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../components/Footer';
import Header from '../components/Header';

class View extends React.Component {
  render = () => {
    return (
      <div>
        <Header />
        <main className="mtop-big fx-container padded">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

View.propTypes = {
  children: PropTypes.object.isRequired,
};

export default View;
