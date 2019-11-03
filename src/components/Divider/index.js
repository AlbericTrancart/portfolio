import styled, { css } from "styled-components";
import { colorPalette, Grid } from "stylesheet";

export const dividerStyle = css`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  border: none;
  margin: ${Grid(2)} 0;

  ::before,
  ::after {
    content: "";
    flex-grow: 1;
    background: ${colorPalette.divider};
    height: 1px;
    font-size: 0;
    line-height: 0;
  }
`;

const Divider = styled.hr`
  ${dividerStyle}
`;

export default Divider;
