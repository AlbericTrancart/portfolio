import React from "react";
import { Link } from "gatsby";

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

export default ProjectPreview;
