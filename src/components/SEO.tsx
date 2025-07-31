import { SiteMetadata } from 'components/types';
import { graphql, useStaticQuery } from 'gatsby';
import React, { JSX } from 'react';
import { Helmet } from 'react-helmet';

export const SEO = (): JSX.Element => {
  const { site } = useStaticQuery<SiteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

  const { title, description, author, siteUrl } = site.siteMetadata;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/oglogo.jpg`} />
      <meta property="og:locale" content="en" />
      <meta name="author" content={author} />

      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
  );
};
