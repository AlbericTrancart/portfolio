import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { StyleReset } from 'components/StyleReset';
import { SEO } from 'components/SEO';
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

export const View: React.FC<Props> = ({
  blankPage = false,
  children,
  isHomepage = false,
}) => (
  <>
    <StyleReset />
    <SEO />
    <Header />
    {blankPage ? children : <Content>{children}</Content>}
    <Footer isHomepage={isHomepage} />
  </>
);
