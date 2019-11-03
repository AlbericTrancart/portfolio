import styled from "styled-components";

import { Grid } from "stylesheet";

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 2ch;
  line-height: 1;
  font-size: 1.5rem;
`;

export const Subtitle = styled.div`
  margin-top: ${Grid(1)};
  font-size: 0.5em;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;

  ${Value} {
    margin-right: 1ch;
  }
  ${Value}:last-child {
    margin-right: 0;
  }
`;
