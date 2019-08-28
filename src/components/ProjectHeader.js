import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import structs from "structs";

const ProjectHeader = ({ data: { title, description, image, url } }) => (
  <header className="text-center">
    <h1>
      <Link className="Link Link--no-underline" to={url}>
        {title}
      </Link>

      <Helmet>
        <title>{title} project &bull; Albéric Trancart</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://alberic.trancart.net${url}`}
        />
        <link rel="canonical" href={`https://alberic.trancart.net${url}`} />
        <meta
          property="og:image"
          content={`https://alberic.trancart.net/img/${image}`}
        />
      </Helmet>
    </h1>
  </header>
);

ProjectHeader.propTypes = {
  data: PropTypes.shape(structs.project).isRequired
};

export default ProjectHeader;
