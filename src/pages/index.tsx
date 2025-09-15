import { Divider } from 'components/Divider';
import { Link } from 'components/Link';
import { Tag } from 'components/Tag';
import { View } from 'components/View';
import { Post } from 'components/types';
import format from 'date-fns/format';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { Fragment, JSX } from 'react';
import slugify from 'slugify';
import { styled } from 'styled-components';
import { breakpoints, colorPalette, Grid, typography } from 'stylesheet';

const PageList = styled.ul`
  display: grid;
  grid-row-gap: ${Grid(2)};
  grid-template-columns: 1fr;
  list-style: none;
  padding: 0;
`;

const PageListItem = styled.li`
  display: flex;
  align-items: center;
`;

const TagsList = styled.ul`
  padding: 0;
  list-style-type: 0;
  text-indent: 0;

  > li {
    display: inline;
    margin-right: ${Grid(1.5)};
  }
`;

const BackgroundImage = styled(GatsbyImage)`
  width: 20%;

  @media (min-width: ${breakpoints.md}) {
    width: ${Grid(12)};
  }

  flex-shrink: 0;
  margin-right: ${Grid(1)};
`;

const PostDate = styled.time`
  ${typography.small}
  color: ${colorPalette.lightText};
  white-space: nowrap;
  margin-right: ${Grid(1)};
`;

const InfosContainer = styled.div`
  display: none;
  @media (min-width: ${breakpoints.sm}) {
    display: block;
  }
`;

interface DataProps {
  allMarkdownRemark: {
    group: { tag: string; totalCount: number }[];
    edges: { node: Post }[];
  };
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { group, edges: posts },
  },
}: PageProps<DataProps>): JSX.Element => {
  // Clone arrays to not reverse original list
  const tags = group.slice(0);

  tags.push({ tag: 'Theatre', totalCount: 0 });
  tags.push({ tag: 'Heavy metal', totalCount: 0 });

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
          Currently tech lead &amp; coach @ Theodo, I studied civil engineering
          at the École Nationale des Ponts et Chaussées (ENPC). I am passionate
          about a variety of topics, including:
        </p>

        <TagsList className="mtop" style={{ lineHeight: '1.1em' }}>
          {tags.map(({ tag, totalCount }) => (
            <li key={tag}>
              <Tag
                to={`/tag/${slugify(tag, { lower: true })}`}
                title={`${totalCount} posts about ${tag}`}
              >
                #{tag} ({totalCount})
              </Tag>{' '}
            </li>
          ))}
        </TagsList>

        <p className="mtop">
          ...and more, depending on the mood!
          <br />
          <strong>
            If you have any question or feedback, you can DM me on{' '}
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
        <h2>Posts</h2>
        <PageList className="mtop">
          {posts.map(
            ({
              node: {
                id,
                fields: { slug },
                frontmatter: {
                  date,
                  tags: postTags,
                  thumbnail: {
                    childImageSharp: { gatsbyImageData: imageGatsbyData },
                  },
                  title,
                },
              },
            }) => (
              <PageListItem key={id}>
                <BackgroundImage image={imageGatsbyData} alt="" />
                <div>
                  <InfosContainer>
                    <PostDate dateTime={date}>
                      {format(new Date(date), 'MMMM dd, yyyy')}
                    </PostDate>
                    {postTags.map((tag) => (
                      <Fragment key={tag}>
                        <Tag to={`/tag/${slugify(tag, { lower: true })}`}>
                          #{tag}
                        </Tag>{' '}
                      </Fragment>
                    ))}
                  </InfosContainer>
                  <Link to={slug}>{title}</Link>
                </div>
              </PageListItem>
            ),
          )}
        </PageList>
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
          gatsbyImageData(formats: [AUTO, WEBP])
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      totalCount
      group(field: { frontmatter: { tags: SELECT } }) {
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
