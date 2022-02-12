import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { PostPreview } from 'components/PostPreview';
import { View } from 'components/View';
import { Post } from 'components/types';

interface DataProps {
  allMarkdownRemark: {
    edges: { node: Post }[];
  };
}

const TagPage: React.FC<PageProps<DataProps>> = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
  pageContext,
}) => (
  <View>
    {/* @ts-expect-error not in Gatsby source type */}
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
  query ($tag: String!) {
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
