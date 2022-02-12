import React, { ReactNode } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage, {
  IFluidObject,
  IntrinsicTags,
} from 'gatsby-background-image';
import GatsbyImage from 'gatsby-image';

interface Props {
  alt: string;
  background?: boolean;
  filename: string;
  tag?: IntrinsicTags;
  children?: ReactNode;
}

export const Image: React.FC<Props> = ({
  background = false,
  filename,
  children,
  tag,
  ...rest
}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 2560) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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
            childImageSharp: { fluid: IFluidObject };
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

      if (background) {
        return (
          // @ts-expect-error lazy to find the right type
          <BackgroundImage
            Tag={tag}
            fluid={image.node.childImageSharp.fluid}
            {...rest}
          >
            {children}
          </BackgroundImage>
        );
      }

      // @ts-expect-error lazy to find the right type
      return <GatsbyImage fluid={image.node.childImageSharp.fluid} {...rest} />;
    }}
  />
);
