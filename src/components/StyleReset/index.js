import { createGlobalStyle } from "styled-components";
import { colorPalette, Grid, typography } from "stylesheet";

const StyleReset = createGlobalStyle`
  /* Resets */
  html,
  body,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  figcaption,
  blockquote {
    margin: 0;
    padding: 0;
  }
  ul {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }

  /* Default styles */
  html {
    ${typography.main}
    color: ${colorPalette.darkGrey};
    height: 100%;
  }
  body {
    min-height: 100%;
  }

  h1 {
    line-height: 1.2em;
    font-size: 2rem;
  }
  h2 {
    line-height: 1.2em;
    font-size: 1.6rem;
  }
  h3 {
    line-height: 1.2em;
    font-size: 1.2rem;
  }

  .mtop {
    margin-top: ${Grid(2)};
  }
`;

export default StyleReset;
