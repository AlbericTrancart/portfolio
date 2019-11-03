import { css } from "styled-components";

export const Grid = size => `${size / 2}rem`;

const colors = {
  darkGrey: "#3a4145",
  lightGrey: "#78858d",
  lighterGrey: "#eaecee",
  blue: "#57a3e8",
  white: "#ffffff"
};

export const colorPalette = {
  text: colors.darkGrey,
  lightText: colors.lightGrey,
  divider: colors.lighterGrey,

  primary: colors.darkGrey,
  primaryText: colors.white,

  secondary: colors.blue,
  secondaryText: colors.white,

  // Timeline
  timelineBackground: colors.lighterGrey,
  contentBackground: "#f5f5f5"
};

export const breakpoints = {
  sm: "768px",
  md: "992px",
  lg: "1400px"
};

export const maxAppSize = "800px";

export const wrapped = css`
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${Grid(1)};
  max-width: 700px;

  @media and (min-width: ${breakpoints.sm}) {
    width: ${breakpoints.sm};
    padding: 0;
  }
  @media and (min-width: ${breakpoints.md}) {
    width: ${breakpoints.md};
  }
  @media and (min-width: ${breakpoints.lg}) {
    width: ${breakpoints.lg};
    max-width: ${maxAppSize};
  }
`;

const fonts = {
  main: "IBM Plex Sans, sans-serif"
};

export const typography = {
  main: css`
    font-family: ${fonts.main};
    font-size: 21px;
    line-height: 1.5em;
  `,
  small: css`
    font-size: 0.75rem;
  `
};

export const radius = "3px";

export const thresholds = {
  large: "1200px"
};
