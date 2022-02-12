import React from 'react';
import styled from 'styled-components';
import { Divider } from 'components/Divider';
import { Link } from 'components/Link';
import { PostHeader } from 'components/PostHeader';
import { Grid } from 'stylesheet';
import { Post } from 'components/types';

const Container = styled.article`
  margin-top: ${Grid(1)};
`;

const Description = styled.p`
  margin-top: ${Grid(1)};
`;

interface Props {
  showDivider?: boolean;
  post: Post;
}

export const PostPreview: React.FC<Props> = ({ showDivider = false, post }) => (
  <Container key={post.id}>
    <PostHeader post={post} />

    <Description>
      {post.frontmatter.description}{' '}
      <Link to={post.fields.slug}>Read&nbsp;→</Link>
    </Description>

    {showDivider && <Divider />}
  </Container>
);
