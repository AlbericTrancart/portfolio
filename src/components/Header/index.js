import React from "react";
import styled from "styled-components";
import Image from "components/Image";
import Link from "components/Link";
import { breakpoints, colorPalette, Grid, wrapped } from "stylesheet";
import { GitHub, Linkedin, Twitter } from "react-feather";

const Container = styled.header`
  background-color: ${colorPalette.primary};
  color: ${colorPalette.primaryText};
  text-align: center;

  @media (min-width: ${breakpoints.sm}) {
    text-align: left;
  }

  padding: ${Grid(2)} 0;
`;

const Wrapper = styled.div`
  ${wrapped}
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const PictureContainer = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.sm}) {
    width: 25%;
  }
`;

const ProfilePicture = styled(Image)`
  display: inline-block;
  border-radius: 50%;
  width: 100%;
  max-width: 200px;
`;

const HeaderContent = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.sm}) {
    width: 75%;
    padding-left: ${Grid(2)};
  }
`;

const SocialLinks = styled.div`
  margin-top: ${Grid(1)};
  font-size: 1.25rem;

  ${Link} {
    color: inherit;

    &:hover {
      color: ${colorPalette.secondary};
    }
  }

  > ${Link}:not(:last-child) {
    margin-right: ${Grid(1)};
  }
`;

const Bio = styled.p`
  margin-top: ${Grid(2)};
`;

const Header = () => (
  <Container>
    <Wrapper>
      <PictureContainer>
        <Link to="/" title="Back to the home page">
          <ProfilePicture
            filename="alberictrancart.jpg"
            alt="My profile pic!"
          />
        </Link>
      </PictureContainer>

      <HeaderContent>
        <h1>Albéric Trancart</h1>

        <Bio>Developer, life hacker, space enthusiast and more!</Bio>

        <SocialLinks>
          <Link
            as="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/alberictrancart"
            title="My profile on Twitter"
          >
            <Twitter />
          </Link>
          &nbsp;
          <Link
            as="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/AlbericTrancart"
            title="My profile on GitHub"
          >
            <GitHub />
          </Link>
          &nbsp;
          <Link
            as="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/alberic-trancart"
            title="My profile on LinkedIn"
          >
            <Linkedin />
          </Link>
        </SocialLinks>
      </HeaderContent>
    </Wrapper>
  </Container>
);

export default Header;
