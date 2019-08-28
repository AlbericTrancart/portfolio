import PropTypes from "prop-types";
import React, { Fragment } from "react";

import Footer from "components/Footer";
import Header from "components/Header";
import StyleReset from "components/StyleReset";

const View = ({ location, children }) => (
  <Fragment>
    <StyleReset />
    <Header />
    <main className="mtop-big fx-container padded">{children}</main>
    <Footer location={location} />
  </Fragment>
);

View.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default View;
