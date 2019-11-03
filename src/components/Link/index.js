import styled, { css } from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { colorPalette } from "stylesheet";

export const linkStyle = css`
  color: ${colorPalette.primary};
  cursor: pointer;
  transition: color ease 0.3s;
  text-decoration: underline;

  &:hover,
  &:focus {
    color: ${colorPalette.secondary};
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
