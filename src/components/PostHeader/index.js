import React from "react";
import styled from "styled-components";
import slugify from "slugify";
import format from "date-fns/format";
import Link from "components/Link";
import Tag from "components/Tag";
import { colorPalette, Grid, typography } from "stylesheet";

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

const Banner = styled.img`
  width: 100%;
  margin-top: ${Grid(2)};
`;

function PostHeader({
  post: {
    fields: { slug },
    frontmatter: {
      date,
      thumbnail: {
        childImageSharp: {
          fluid: { src: image },
        },
      },
      title,
      tags,
    },
  },
  mainPage,
}) {
  return <header>
    <Infos>
      <PostDate dateTime={date}>
        {format(new Date(date), "MMMM dd, yyyy")}
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
      <Banner src={image} alt={title} />
    </Link>
  </header>
}

export default PostHeader;
