import styled from "styled-components";
import { dividerStyle } from "components/Divider";
import { linkStyle } from "components/Link";
import { breakpoints, colorPalette, Grid } from "stylesheet";

const Content = styled.div`
  text-align: center;

  h1,
  h2,
  h3,
  p,
  img,
  blockquote,
  ul,
  ol {
    text-align: left;
  }

  a {
    ${linkStyle}
  }

  hr {
    ${dividerStyle}
  }

  h1,
  h2,
  h3,
  p,
  ul,
  blockquote,
  hr,
  .gatsby-resp-image-figure,
  .embedVideo-container,
  .gatsby-image-wrapper {
    margin-top: ${Grid(2)};

    @media (min-width: ${breakpoints.sm}) {
      margin-top: ${Grid(3)};
    }
  }

  .embedVideo-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
  }
  .embedVideo-container > iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  figure {
    text-align: center;
    width: 100%;
  }

  figcaption {
    font-style: italic;
    text-align: center;
    margin-top: ${Grid(1)};
  }

  blockquote {
    font-style: italic;
    border-left: ${colorPalette.primary} 0.3em solid;
    padding-left: ${Grid(3)};
    margin-left: -${Grid(3)};
  }
`;

export default Content;
