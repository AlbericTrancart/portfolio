import React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { colorPalette } from 'stylesheet';

interface Props {
  noUnderline?: boolean;
}

export const linkStyle = css`
  color: ${colorPalette.primary};
  cursor: pointer;
  transition: color ease 0.3s;
  text-decoration: underline;

  &:hover,
  &:focus {
    color: ${colorPalette.secondary};
  }

  ${({ noUnderline = false }: Props) =>
    noUnderline &&
    css`
      text-decoration: none;
    `};
`;

export const StyledGatsbyLink = styled(GatsbyLink)`
  ${linkStyle}
`;

export const StyledNormalLink = styled.a`
  ${linkStyle}
`;

export const Link: React.FC<
  Partial<GatsbyLinkProps<unknown>> & { href?: string; as?: string }
> = ({ children, href, ...rest }) =>
  href !== undefined ? (
    /* @ts-expect-error lazy to find the right type */
    <StyledNormalLink href={href} {...rest}>
      {children}
    </StyledNormalLink>
  ) : (
    /* @ts-expect-error lazy to find the right type */
    <StyledGatsbyLink {...rest}>{children}</StyledGatsbyLink>
  );
