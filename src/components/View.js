import React, { Fragment } from "react";

import Footer from "components/Footer";
import Header from "components/Header";
import StyleReset from "components/StyleReset";
import SEO from "components/SEO";

const View = ({ children }) => (
  <Fragment>
    <StyleReset />
    <SEO />
    <Header />
    <main className="mtop-big fx-container padded">{children}</main>
    <Footer />
  </Fragment>
);

export default View;
