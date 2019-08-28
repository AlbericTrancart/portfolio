import React, { Fragment } from "react";

import Home from "views/Home";
import SEO from "components/SEO";

const IndexPage = ({ location }) => (
  <Fragment>
    <SEO />
    <Home location={location} />
  </Fragment>
);

export default IndexPage;
