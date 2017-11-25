import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import structs from '~/structs';

const ProjectHeader = props => (
  <header className="text-center">
    <h1>
      <Link className="Link Link--no-underline" to={props.data.url}>
        {props.data.title}
      </Link>

      <Helmet>
        <meta property="og:title" content={props.data.title} />
        <meta property="og:description" content={props.data.description} />
        <meta property="og:url" content={`https://alberic.trancart.net${props.data.url}`} />
        <link rel="canonical" href={`https://alberic.trancart.net${props.data.url}`} />
        <meta property="og:image" content={`https://alberic.trancart.net/img/${props.data.image}`} />
      </Helmet>
    </h1>
  </header>
);

ProjectHeader.propTypes = {
  data: PropTypes.shape(structs.project).isRequired,
};

export default ProjectHeader;
