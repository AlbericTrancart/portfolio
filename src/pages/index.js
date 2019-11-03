import React, { Fragment } from "react";
import { graphql } from "gatsby";
import slugify from "slugify";
import Divider from "components/Divider";
import Link from "components/Link";
import PostPreview from "components/PostPreview";
import Tag from "components/Tag";
import View from "components/View";

const IndexPage = ({
  data: {
    allMarkdownRemark: { group, edges: posts }
  }
}) => {
  // Clone arrays to not reverse original list
  const tags = group.slice(0);

  tags.push({ tag: "Theatre", totalCount: 0 });
  tags.push({ tag: "Roleplaying", totalCount: 0 });
  tags.push({ tag: "Heavy metal", totalCount: 0 });
  tags.push({ tag: "Web accessibility", totalCount: 0 });

  tags.sort((tagA, tagB) => {
    if (tagA.totalCount < tagB.totalCount) {
      return 1;
    }
    if (tagA.totalCount > tagB.totalCount) {
      return -1;
    }

    if (tagA.tag < tagB.tag) {
      return -1;
    }
    if (tagA.tag > tagB.tag) {
      return 1;
    }
    return 0;
  });

  return (
    <View isHomepage>
      <section>
        <h2>Bio</h2>

        <p className="mtop">
          Currently web developer @ Theodo, I studied civil engineering at the
          École Nationale des Ponts et Chaussées (ENPC). I am passionate about a
          variety of topics, including:
        </p>

        <nav className="mtop" style={{ lineHeight: "1.1em" }}>
          {tags.map(({ tag, totalCount }) => (
            <Fragment key={tag}>
              <Tag
                to={`/tag/${slugify(tag, { lower: true })}`}
                title={`${totalCount} post${
                  totalCount === 1 ? "" : "s"
                } about ${tag}`}
              >
                #{tag}
              </Tag>{" "}
            </Fragment>
          ))}
        </nav>

        <p className="mtop">
          ...and more, depending on the mood!{" "}
          <strong>
            If you have any question or feedback, you can DM me on{" "}
            <Link
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/alberictrancart"
              title="My profile on Twitter"
            >
              Twitter
            </Link>
          </strong>
          .
        </p>
      </section>

      <Divider />

      <section className="mtop">
        <h2 id="posts">Latest posts</h2>
        <Link to="/sitemap">Or browse all posts</Link>

        {posts.map(({ node: post }, index) => (
          <PostPreview
            key={post.id}
            post={post}
            showDivider={index + 1 !== posts.length}
          />
        ))}
      </section>
    </View>
  );
};

export default IndexPage;

export const postFields = graphql`
  fragment postFields on MarkdownRemark {
    id
    fields {
      slug
    }
    frontmatter {
      date
      description
      tags
      thumbnail {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          resize(width: 800) {
            src
          }
        }
      }
      title
    }
    html
    timeToRead
  }
`;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      totalCount
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
      edges {
        node {
          ...postFields
        }
      }
    }
  }
`;
