import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import Link from "components/Link";
import Tag from "components/Tag";
import { colorPalette, Grid, typography } from "stylesheet";

const Infos = styled.span`
  ${typography.small}

  ${Tag} {
    margin-left: ${Grid(1)};
  }
`;

const PostDate = styled.time`
  color: ${colorPalette.lightGrey};
  white-space: nowrap;
`;

const Banner = styled.img`
  width: 100%;
  margin-top: ${Grid(2)};
`;

const PostHeader = ({
  post: {
    fields: { slug },
    frontmatter: {
      date,
      thumbnail: {
        childImageSharp: {
          fluid: { src: image }
        }
      },
      title,
      tags
    }
  },
  mainPage
}) => (
  <header>
    <Infos>
      <PostDate dateTime={date}>
        {format(new Date(date), "MMMM dd, yyyy")}
      </PostDate>
      {tags.map(tag => (
        <Tag key={tag} to={`tag/${tag}`}>
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
      <Banner src={image} alt={title} />
    </Link>
  </header>
);

export default PostHeader;
