import React from 'react';
import styled from 'styled-components';
import slugify from 'slugify';
import format from 'date-fns/format';
import { Link } from 'components/Link';
import { Tag } from 'components/Tag';
import { colorPalette, Grid, typography } from 'stylesheet';
import { Post } from 'components/types';
import { GatsbyImage } from 'gatsby-plugin-image';

const Infos = styled.span`
  ${typography.small}
  word-break: break-word;

  > ${Tag}:not(:last-child) {
    margin-right: ${Grid(1)};
  }
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

export const PostHeader: React.FC<Props> = ({
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
}) => (
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
