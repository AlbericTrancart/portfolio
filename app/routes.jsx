import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Posts
import LavaGamingBoardPost from '~/views/posts/LavaGamingBoard.jsx';

// Projects
import LavaGamingBoardProject from '~/views/projects/LavaGamingBoard.jsx';

import HomeView from '~/views/Home.jsx';
import content from '~/content';

export default (
  <Switch>
    { /* Posts */ }
    <Route path={content.posts[0].url} component={LavaGamingBoardPost} />

    { /* Projects */ }
    <Route path={content.projects[0].url} component={LavaGamingBoardProject} />

    { /* Other routes */ }
    <Route path="*" component={HomeView} />
  </Switch>
);

// /2016/11/how-i-built-my-modular-lava-gaming-board-in-one-week/
// /2016/10/why-mars-matters/
// /2016/10/learn-and-share-the-one-post-to-rule-them-all/
