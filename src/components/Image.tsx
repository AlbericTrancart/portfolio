import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { JSX } from 'react';

interface Props {
  alt: string;
  filename: string;
}

export const Image = ({ filename, ...rest }: Props): JSX.Element => (
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
