import styled, { css } from "styled-components";
import { colorPalette, radius, breakpoints } from "stylesheet";

const DATE_ITEM_PADDING = 2;
const TRIANGLE_WIDTH = 3;
const TRIANGLE_HEIGHT = 2;
const CIRCLE_SIZE = 6;
const MARGIN_BETWEEN_ITEMS_AND_TIMELINE = 10;
const MARGIN_BETWEEN_ITEMS = 12;
const TIMELINE_WIDTH = 1;
const ITEM_WIDTH = 100;
const OFFSET_CIRCLE_FROM_ITEM = DATE_ITEM_PADDING;

const Grid = size => `${size * 5}px`;

export const Timeline = styled.main`
  display: flex;
  flex-direction: column;
  padding: ${Grid(6)} ${Grid(2)} ${Grid(OFFSET_CIRCLE_FROM_ITEM)};
  background-color: ${colorPalette.timelineBackground};
  min-height: 100vh;
  overflow-x: hidden;

  @media screen and (min-width: ${breakpoints.lg}) {
    align-items: center;
    padding-top: ${Grid(10)};
  }
`;

export const ItemContent = styled.article`
  position: relative;
  width: ${Grid(ITEM_WIDTH)};
  padding: ${Grid(10)} ${Grid(4)} ${Grid(4)};
  background-color: ${colorPalette.contentBackground};
  color: ${colorPalette.text};
  border-radius: ${radius};
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
  transition: transform 0.8s ease-in-out 0s, opacity 0.8s ease-in-out 0s;
`;

export const ItemTitle = styled.h2`
  margin: ${Grid(2)} 0;
`;

export const ItemDate = styled.span`
  position: absolute;
  top: 0;
  display: inline-block;
  text-align: center;
  padding: ${Grid(DATE_ITEM_PADDING)};
  background-color: ${colorPalette.primary};
  color: ${colorPalette.primaryText};
`;

const triangle = css`
  content: "";
  position: absolute;
  border-style: solid;
  color: ${colorPalette.primaryText};
  top: calc(${Grid(DATE_ITEM_PADDING / 2)} + 0.5rem);
`;

const circle = css`
  content: "";
  position: absolute;
  top: ${Grid(OFFSET_CIRCLE_FROM_ITEM)};
  width: ${Grid(CIRCLE_SIZE)};
  height: ${Grid(CIRCLE_SIZE)};
  border-radius: 50%;
  background-color: ${colorPalette.secondary};
`;

const timeline = css`
  content: "";
  position: absolute;
  top: ${Grid(OFFSET_CIRCLE_FROM_ITEM)};
  height: calc(100% + ${Grid(MARGIN_BETWEEN_ITEMS)});
  border-style: ${props => (props.future ? "dotted" : "solid")};
  border-width: 0 0 0 ${Grid(1)};
  border-color: ${colorPalette.secondary};
  opacity: 0.3;
`;

const leftStyle = css`
  transform: translateX(
    calc(-50% - ${Grid(MARGIN_BETWEEN_ITEMS_AND_TIMELINE)})
  );
  &::before {
    ${circle};
    right: -${Grid(MARGIN_BETWEEN_ITEMS_AND_TIMELINE + CIRCLE_SIZE / 2)};
  }

  &::after {
    ${timeline};
    right: -${Grid(MARGIN_BETWEEN_ITEMS_AND_TIMELINE + TIMELINE_WIDTH / 2)};
  }

  ${ItemContent} {
    ${props =>
      props.visible
        ? css`
            opacity: 1;
            transform: translateX(0);
          `
        : css`
            opacity: 0;
            transform: translateX(-50%);
          `}
  }

  ${ItemDate} {
    right: 0;

    &::after {
      ${triangle};
      right: -${Grid(TRIANGLE_WIDTH)};
      border-width: ${Grid(TRIANGLE_HEIGHT)} 0 ${Grid(TRIANGLE_HEIGHT)}
        ${Grid(TRIANGLE_WIDTH)};
      border-color: transparent transparent transparent ${colorPalette.primary};
    }
  }
`;

const rightStyle = css`
  transform: translateX(calc(50% + ${Grid(MARGIN_BETWEEN_ITEMS_AND_TIMELINE)}));

  &::before {
    ${circle};
    left: -${Grid(MARGIN_BETWEEN_ITEMS_AND_TIMELINE + CIRCLE_SIZE / 2)};
  }

  &::after {
    ${timeline};
    left: -${Grid(MARGIN_BETWEEN_ITEMS_AND_TIMELINE + TIMELINE_WIDTH / 2)};
  }

  ${ItemContent} {
    ${props =>
      props.visible
        ? css`
            opacity: 1;
            transform: translateX(0);
          `
        : css`
            opacity: 0;
            transform: translateX(50%);
          `}
  }

  ${ItemDate} {
    left: 0;

    &::after {
      ${triangle};
      left: -${Grid(TRIANGLE_WIDTH)};
      border-width: ${Grid(TRIANGLE_HEIGHT)} ${Grid(TRIANGLE_WIDTH)}
        ${Grid(TRIANGLE_HEIGHT)} 0;
      border-color: transparent ${colorPalette.primary} transparent transparent;
    }
  }
`;

export const Item = styled.article`
  position: relative;
  margin-bottom: ${Grid(MARGIN_BETWEEN_ITEMS)};

  @media screen and (min-width: ${breakpoints.lg}) {
    &:nth-child(odd) {
      ${leftStyle};
    }

    &:nth-child(even) {
      ${rightStyle};
    }
  }

  @media screen and (max-width: calc(${breakpoints.lg} - 1px)) {
    ${rightStyle};
    transform: translateX(${Grid(
      CIRCLE_SIZE / 2 + MARGIN_BETWEEN_ITEMS_AND_TIMELINE
    )});
    ${ItemContent} {
      max-width: calc(100% - ${Grid(CIRCLE_SIZE / 2 + MARGIN_BETWEEN_ITEMS)});
    }
  }
`;
