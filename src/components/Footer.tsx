import React from 'react';
import styled from 'styled-components';
import { Divider } from 'components/Divider';
import { Link } from 'components/Link';
import { colorPalette, Grid, typography, wrapped } from 'stylesheet';

const Container = styled.footer`
  ${wrapped}
  margin: ${Grid(2)} auto;

  ${typography.small}
  color: ${colorPalette.lightText};
  text-decoration: italic;
  text-align: center;

  ${Link} {
    color: inherit;

    &:hover,
    &:focus {
      color: ${colorPalette.secondary};
    }
  }
`;

interface Props {
  isHomepage?: boolean;
}

export const Footer: React.FC<Props> = ({ isHomepage = false }) => (
  <Container>
    {!isHomepage && <Link to="/#posts">Back to the home page</Link>}
    <Divider />
    Made with GatsbyJS, ❤ and other hipster technologies.
    <br />
    Design philosophy inspired by{' '}
    <Link
      as="a"
      target="_blank"
      rel="noreferrer noopener"
      href="http://bettermotherfuckingwebsite.com"
      title="This site is a better motherfucking website"
    >
      bettermotherfuckingwebsite.com
    </Link>
    .
  </Container>
);

export default Footer;
