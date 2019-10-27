import styled, { css } from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { colorPalette } from "stylesheet";

export const linkStyle = css`
  color: ${colorPalette.darkGrey};
  cursor: pointer;
  transition: color ease 0.3s;

  &:hover,
  &:focus {
    color: ${colorPalette.blue};
  }
`;

const Link = styled(GatsbyLink)`
  ${linkStyle}

  ${props =>
    props.noUnderline &&
    css`
      text-decoration: none;
    `};
`;

export default Link;
