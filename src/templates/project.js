import React from "react";
import View from "components/View";
import SEO from "components/SEO";
import projects from "views/projects";

const ProjectTemplate = ({ location, pageContext: { project } }) => {
  const Component = projects[project.id];

  return (
    <View location={location}>
      <SEO {...project} />
      <Component />
    </View>
  );
};

export default ProjectTemplate;
