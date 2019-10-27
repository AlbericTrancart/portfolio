import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Content from "components/Content";
import PostHeader from "components/PostHeader";
import View from "components/View";

const PostTemplate = ({ data, pageContext }) => {
  const { slug, previous, next } = pageContext;
  const { frontmatter, description, html } = data.markdownRemark;
  const { title, thumbnail } = frontmatter;

  const image = thumbnail.childImageSharp.resize.src;

  return (
    <View>
      <Helmet>
        <title>{title} &bull; Albéric Trancart</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://alberic.trancart.net${slug}`}
        />
        <meta
          property="og:image"
          content={`https://alberic.trancart.net${image}`}
        />
      </Helmet>

      <article>
        <PostHeader post={data.markdownRemark} mainPage />
        <Content as="section" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </View>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...postFields
    }
  }
`;

export default PostTemplate;
