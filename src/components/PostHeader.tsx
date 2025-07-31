import { Link } from 'components/Link';
import { Tag } from 'components/Tag';
import { Post } from 'components/types';
import format from 'date-fns/format';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { JSX } from 'react';
import slugify from 'slugify';
import styled from 'styled-components';
import { breakpoints, colorPalette, Grid, typography } from 'stylesheet';

const Infos = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${Grid(0.5)};

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
    gap: ${Grid(1)};
  }

  ${typography.small}
  word-break: break-word;
`;

const PostDate = styled.time`
  color: ${colorPalette.lightText};
  white-space: nowrap;
  margin-right: ${Grid(1)};
`;

const Banner = styled(GatsbyImage)`
  width: 100%;
  margin-top: ${Grid(2)};
`;

interface Props {
  post: Post;
  mainPage?: boolean;
}

export const PostHeader = ({
  post: {
    fields: { slug },
    frontmatter: {
      date,
      thumbnail: {
        childImageSharp: { gatsbyImageData },
      },
      title,
      tags,
    },
  },
  mainPage = false,
}: Props): JSX.Element => (
  <header>
    <Infos>
      <PostDate dateTime={date}>
        {format(new Date(date), 'MMMM dd, yyyy')}
      </PostDate>
      {tags.map((tag) => (
        <Tag key={tag} to={`tag/${slugify(tag, { lower: true })}`}>
          #{tag}
        </Tag>
      ))}
    </Infos>
    {mainPage ? (
      <h1>
        <Link noUnderline to={slug}>
          {title}
        </Link>
      </h1>
    ) : (
      <h3>
        <Link noUnderline to={slug}>
          {title}
        </Link>
      </h3>
    )}
    <Link to={slug}>
      <Banner image={gatsbyImageData} alt={title} />
    </Link>
  </header>
);
