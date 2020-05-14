import React from "react";
import Content from "components/Content";
import Countdown from "./Countdown";
import {
  TimelineHeader,
  HeaderCountdown,
  HeaderCountdownText,
  HeaderTitle
} from "./Header";
import { Timeline, Item, ItemContent, ItemDate, ItemTitle } from "./style";
import contents from "./contents";

export const isInViewport = (element) => {
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top >= -viewportHeight && rect.top < viewportHeight;
};

const MARS_LANDING_GOAL = new Date("2024-12-31");

class StarshipTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = contents.reduce(
      (accumulator, content) => ({ ...accumulator, [content.title]: false }),
      {}
    );
  }

  componentDidMount() {
    if (!window) {
      return;
    }
    window.addEventListener("scroll", () => {
      this.updateVisibility();
    });
    this.updateVisibility();
  }

  updateVisibility() {
    document.querySelectorAll("[data-timeline-item]").forEach((element) => {
      const title = element.getAttribute("data-timeline-item");
      // eslint-disable-next-line
      if (!this.state[title] && isInViewport(element)) {
        this.setState({ [title]: true });
      }
    });
  }

  render() {
    const { state } = this;
    return (
      <>
        <TimelineHeader
          background
          Tag="section"
          filename="starship-bfr-separation-orbit"
        >
          <HeaderTitle>SpaceX Starship Timeline</HeaderTitle>
          <HeaderCountdown>
            <HeaderCountdownText>
              Countdown to Mars landing goal
            </HeaderCountdownText>
            <Countdown value={MARS_LANDING_GOAL} />
          </HeaderCountdown>
        </TimelineHeader>
        <Timeline id="timeline">
          {contents.map(({ content, date, future, title }, index) => (
            // eslint-disable-next-line
            <Item
              key={title}
              future={future}
              visible={state[title] || index === 0}
              data-timeline-item={title}
            >
              <ItemContent>
                <header>
                  <ItemTitle>{title}</ItemTitle>
                  <ItemDate>{date}</ItemDate>
                </header>
                <Content>{content}</Content>
              </ItemContent>
            </Item>
          ))}
        </Timeline>
      </>
    );
  }
}

export default StarshipTimeline;
