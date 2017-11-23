import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectPreview = (props) => {
  const project = props.data;
  const image = require(`img/projects/${project.image}`);

  return (
    <Link to={project.url} className={props.className}>
      <article className="ProjectPreview">
        <div className="ProjectPreview__image full-width full-height" style={{ backgroundImage: `url(${image})` }} />
        <h3 className="ProjectPreview__title big Link Link--no-underline">{project.title}</h3>
      </article>
    </Link>
  );
};

ProjectPreview.defaultProps = {
  className: '',
};

ProjectPreview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    id: '',
    title: '',
    image: '',
    url: '',
  }).isRequired,
};

export default ProjectPreview;
