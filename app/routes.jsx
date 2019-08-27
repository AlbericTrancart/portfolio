import React from "react";
import { Switch, Route } from "react-router-dom";

// Posts
import LearnAndSharePost from "~/views/posts/LearnAndShare.jsx";
import WhyMarsMattersPost from "~/views/posts/WhyMarsMatters.jsx";
import LavaGamingBoardPost from "~/views/posts/LavaGamingBoard.jsx";
import HumanTalksCSSPost from "~/views/posts/HumanTalksCSS.jsx";
import StarshipSuperHeavy from "~/views/posts/StarshipSuperHeavy.jsx";

// Projects
import SpaceHulkModProject from "~/views/projects/SpaceHulkMod.jsx";
import WoodenBridgeProject from "~/views/projects/WoodenBridge.jsx";
import UPontProject from "~/views/projects/UPont.jsx";
import LavaGamingBoardProject from "~/views/projects/LavaGamingBoard.jsx";
import SpaceXStatsProject from "~/views/projects/SpaceXStats.jsx";
import GeoSchoolProject from "~/views/projects/GeoSchool.jsx";

import ScrollToTop from "~/components/ScrollToTop.jsx";
import HomeView from "~/views/Home.jsx";
import content from "~/content";

export default (
  <ScrollToTop>
    <Switch>
      {/* Posts */}
      <Route path={content.posts[0].url} component={LearnAndSharePost} />
      <Route path={content.posts[1].url} component={WhyMarsMattersPost} />
      <Route path={content.posts[2].url} component={LavaGamingBoardPost} />
      <Route path={content.posts[3].url} component={HumanTalksCSSPost} />
      <Route path={content.posts[4].url} component={StarshipSuperHeavy} />

      {/* Projects */}
      <Route path={content.projects[0].url} component={SpaceHulkModProject} />
      <Route path={content.projects[1].url} component={WoodenBridgeProject} />
      <Route path={content.projects[2].url} component={UPontProject} />
      <Route
        path={content.projects[3].url}
        component={LavaGamingBoardProject}
      />
      <Route path={content.projects[4].url} component={SpaceXStatsProject} />
      <Route path={content.projects[5].url} component={GeoSchoolProject} />

      {/* Other routes */}
      <Route path="*" component={HomeView} />
    </Switch>
  </ScrollToTop>
);
