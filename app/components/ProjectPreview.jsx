import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import structs from '~/structs';
import './ProjectPreview.styl';

const ProjectPreview = (props) => {
  const project = props.data;
  const image = require(`img/${project.image}`);

  return (
    <Link to={project.url} className={props.className}>
      <article className="ProjectPreview">
        <div className="ProjectPreview__image full-width full-height" style={{ backgroundImage: `url(${image})` }} />
        <h3 className="ProjectPreview__title Link Link--no-underline fx-col fx-center-xs">
          {project.title}
        </h3>
      </article>
    </Link>
  );
};

ProjectPreview.defaultProps = {
  className: '',
};

ProjectPreview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(structs.project).isRequired,
};

export default ProjectPreview;
