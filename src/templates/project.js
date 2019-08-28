import React from "react";
import View from "components/View";
import SEO from "components/SEO";

// Projects
import SpaceHulkModProject from "views/projects/SpaceHulkMod";
import WoodenBridgeProject from "views/projects/WoodenBridge";
import UPontProject from "views/projects/UPont";
import LavaGamingBoardProject from "views/projects/LavaGamingBoard";
import SpaceXStatsProject from "views/projects/SpaceXStats";
import GeoSchoolProject from "views/projects/GeoSchool";

const ProjectTemplate = ({ location, pageContext: { project } }) => {
  let Component = null;

  switch (project.id) {
    case 1:
      Component = SpaceHulkModProject;
      break;
    case 2:
      Component = WoodenBridgeProject;
      break;
    case 3:
      Component = UPontProject;
      break;
    case 4:
      Component = LavaGamingBoardProject;
      break;
    case 5:
      Component = SpaceXStatsProject;
      break;
    case 6:
      Component = GeoSchoolProject;
      break;
    default:
  }

  return (
    <View location={location}>
      <SEO {...project} />
      <Component />
    </View>
  );
};

export default ProjectTemplate;
