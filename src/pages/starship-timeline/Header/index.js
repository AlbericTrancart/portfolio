import styled from "styled-components";
import { colorPalette, Grid } from "stylesheet";
import { darken } from "polished";
import Image from "components/Image";

export const TimelineHeader = styled(Image)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: ${Grid(2)} ${Grid(1)};
  background-color: ${darken(0.1, colorPalette.primary)};
  color: ${colorPalette.primaryText};
  text-align: center;

  &::before {
    background-blend-mode: overlay;
  }
`;

export const HeaderTitle = styled.h2`
  margin-bottom: ${Grid(4)};
`;

export const HeaderCountdown = styled.div`
  margin-bottom: ${Grid(4)};
`;

export const HeaderCountdownText = styled.div`
  margin-bottom: ${Grid(1)};
`;
