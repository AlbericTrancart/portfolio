import React from "react";
import { graphql } from "gatsby";
import PostPreview from "components/PostPreview";
import View from "components/View";

const TagPage = ({
  data: {
    allMarkdownRemark: { edges: posts }
  },
  pageContext
}) => (
  <View>
    <h2>{pageContext.tag}</h2>

    {posts.map(({ node: post }, index) => (
      <PostPreview
        post={post}
        key={post.id}
        showDivider={index + 1 !== posts.length}
      />
    ))}

    {posts.length === 0 && <span>No post with this tag yet!</span>}
  </View>
);

export default TagPage;

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          ...postFields
        }
      }
    }
  }
`;
