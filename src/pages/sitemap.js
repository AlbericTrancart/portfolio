import React from "react";
import { graphql } from "gatsby";
import Divider from "components/Divider";
import Link from "components/Link";
import View from "components/View";

const Sitemap = ({
  data: {
    allMarkdownRemark: { edges: posts }
  }
}) => (
  <View>
    <section className="mtop">
      <h2>Custom pages</h2>
      <ul className="mtop">
        <li>
          <Link to="/starship-timeline">Starhsip Timeline</Link>
        </li>
      </ul>
    </section>

    <Divider />

    <section className="mtop">
      <h2>Posts</h2>
      <ul className="mtop">
        {posts.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter: { title }
            }
          }) => (
            <li key={id}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        )}
      </ul>
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
