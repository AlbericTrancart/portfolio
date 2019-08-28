import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import structs from "structs";

const ProjectPreview = ({ data: project, className }) => (
  <Link to={project.url} className={className}>
    <article className="ProjectPreview">
      <div
        className="ProjectPreview__image full-width full-height"
        style={{ backgroundImage: `url(/img/${project.image})` }}
      />
      <h3 className="ProjectPreview__title Link Link--no-underline fx-col fx-center-xs">
        {project.title}
      </h3>
    </article>
  </Link>
);

ProjectPreview.defaultProps = {
  className: ""
};

ProjectPreview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(structs.project).isRequired
};

export default ProjectPreview;
