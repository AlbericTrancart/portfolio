import React from "react";
import View from "components/View";
import SEO from "components/SEO";

// Posts
import LearnAndSharePost from "views/posts/LearnAndShare";
import WhyMarsMattersPost from "views/posts/WhyMarsMatters";
import LavaGamingBoardPost from "views/posts/LavaGamingBoard";
import HumanTalksCSSPost from "views/posts/HumanTalksCSS";
import StarshipSuperHeavy from "views/posts/StarshipSuperHeavy";

const PostTemplate = ({ location, pageContext: { post } }) => {
  let Component = null;

  switch (post.id) {
    case 1:
      Component = LearnAndSharePost;
      break;
    case 2:
      Component = WhyMarsMattersPost;
      break;
    case 3:
      Component = LavaGamingBoardPost;
      break;
    case 4:
      Component = HumanTalksCSSPost;
      break;
    case 5:
      Component = StarshipSuperHeavy;
      break;
    default:
  }

  return (
    <View location={location}>
      <SEO {...post} />
      <Component />
    </View>
  );
};

export default PostTemplate;
