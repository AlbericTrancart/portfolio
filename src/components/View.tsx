import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { SEO } from 'components/SEO';
import { StyleReset } from 'components/StyleReset';
import React, { JSX, ReactNode } from 'react';
import { styled } from 'styled-components';
import { Grid, wrapped } from 'stylesheet';

const Content = styled.main`
  ${wrapped}
  margin-top: ${Grid(4)};
`;

interface Props {
  children: ReactNode;
  blankPage?: boolean;
  isHomepage?: boolean;
}

export const View = ({
  blankPage = false,
  children,
  isHomepage = false,
}: Props): JSX.Element => (
  <>
    <StyleReset />
    <SEO />
    <Header />
    {blankPage ? children : <Content>{children}</Content>}
    <Footer isHomepage={isHomepage} />
  </>
);
