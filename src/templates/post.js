import React from "react";
import View from "components/View";
import SEO from "components/SEO";
import posts from "views/posts";

const PostTemplate = ({ location, pageContext: { post } }) => {
  const Component = posts[post.id];

  return (
    <View location={location}>
      <SEO {...post} />
      <Component />
    </View>
  );
};

export default PostTemplate;
