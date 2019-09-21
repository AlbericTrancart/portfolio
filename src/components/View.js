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

export default View;
