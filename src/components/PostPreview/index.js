import React from "react";
import styled from "styled-components";
import Divider from "components/Divider";
import Link from "components/Link";
import PostHeader from "components/PostHeader";
import { Grid } from "stylesheet";

const Container = styled.article`
  margin-top: ${Grid(1)};
`;

const Description = styled.p`
  margin-top: ${Grid(1)};
`;

function PostPreview({ showDivider, post }) {
  return <Container key={post.id}>
    <PostHeader post={post} />

    <Description>
      {post.frontmatter.description}{" "}
      <Link to={post.fields.slug}>Read&nbsp;→</Link>
    </Description>

    {showDivider && <Divider />}
  </Container>
}

export default PostPreview;
