import { Divider } from 'components/Divider';
import { Link } from 'components/Link';
import { PostHeader } from 'components/PostHeader';
import { Post } from 'components/types';
import React, { JSX } from 'react';
import { styled } from 'styled-components';
import { Grid } from 'stylesheet';

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

export const PostPreview = ({
  showDivider = false,
  post,
}: Props): JSX.Element => (
  <Container key={post.id}>
    <PostHeader post={post} />

    <Description>
      {post.frontmatter.description}{' '}
      <Link to={post.fields.slug}>Read&nbsp;→</Link>
    </Description>

    {showDivider && <Divider />}
  </Container>
);
