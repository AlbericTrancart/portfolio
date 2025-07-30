import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  alt: string;
  filename: string;
}

export const Image: React.FC<Props> = ({ filename, ...rest }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP])
              }
            }
          }
        }
      }
    `}
    render={(data: {
      images: {
        edges: {
          node: {
            relativePath: string;
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        }[];
      };
    }) => {
      const image = data.images.edges.find((n) =>
        n.node.relativePath.includes(filename),
      );
      if (!image) {
        return null;
      }

      return (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          {...rest}
        />
      );
    }}
  />
);
