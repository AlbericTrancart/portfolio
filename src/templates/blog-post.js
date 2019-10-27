import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import PostHeader from "components/PostHeader";
import View from "components/View";

const PostTemplate = ({ data, pageContext }) => {
  const { slug, previous, next } = pageContext;
  const { frontmatter, excerpt, html } = data.markdownRemark;
  const { title, date, thumbnail, url } = frontmatter;

  const image = thumbnail.childImageSharp.resize.src;

  return (
    <View>
      <Helmet>
        <title>{title} &bull; Albéric Trancart</title>
        <meta name="description" content={excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:url"
          content={`https://alberic.trancart.net${url}`}
        />
        <meta
          property="og:image"
          content={`https://alberic.trancart.net${image}`}
        />
      </Helmet>

      <article>
        <PostHeader
          data={{
            image,
            date,
            title,
            url: ""
          }}
          mainPage
        />
        <section
          className="Content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </View>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        url
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 800) {
              src
            }
          }
        }
      }
      timeToRead
      excerpt
    }
  }
`;

export default PostTemplate;
