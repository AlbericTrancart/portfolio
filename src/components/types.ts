import { IFluidObject } from 'gatsby-background-image';

export interface Post {
  id: string;
  description: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    description: string;
    tags: string[];
    title: string;
    thumbnail: {
      childImageSharp: { fluid: IFluidObject; resize: IFluidObject };
    };
  };
  html: string;
  timeToRead: string;
}

export interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      siteUrl: string;
    };
  };
}
