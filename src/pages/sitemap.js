import React from "react";
import styled from "styled-components";
import { breakpoints, Grid } from "stylesheet";
import { graphql } from "gatsby";
import GatsbyImage from "gatsby-background-image";
import Divider from "components/Divider";
import Image from "components/Image";
import Link from "components/Link";
import View from "components/View";

const PageList = styled.ul`
  display: grid;
  grid-row-gap: ${Grid(1)};
  grid-template-columns: 1fr;
  list-style: none;
  padding: 0;
`;

const PageListItem = styled.li`
  display: flex;
  align-items: center;
`;

const BackgroundImage = styled(GatsbyImage)`
  width: 20%;
  padding-bottom: 20%;

  @media (min-width: ${breakpoints.md}) {
    width: ${Grid(10)};
    padding-bottom: ${Grid(8)};
  }

  flex-shrink: 0;
  margin-right: ${Grid(1)};
`;

const Sitemap = ({
  data: {
    allMarkdownRemark: { edges: posts }
  }
}) => (
  <View>
    <section className="mtop">
      <h2>Special pages</h2>
      <PageList className="mtop">
        <PageListItem>
          <BackgroundImage
            as={Image}
            background
            filename="starship-timeline.png"
          />
          <Link to="/starship-timeline">Starship Timeline</Link>
        </PageListItem>
      </PageList>
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
                thumbnail: {
                  childImageSharp: { fluid: imageFluid }
                },
                title
              }
            }
          }) => (
            <PageListItem key={id}>
              <BackgroundImage fluid={imageFluid} />
              <Link to={slug}>{title}</Link>
            </PageListItem>
          )
        )}
      </PageList>
    </section>
  </View>
);

export default Sitemap;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          ...postFields
        }
      }
    }
  }
`;
