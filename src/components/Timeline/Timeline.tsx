import React, { useEffect, useRef, useState } from 'react';
import { Content } from 'components/Content';
import {
  Item,
  ItemContent,
  ItemDate,
  ItemTitle,
  TimelineContent,
} from 'components/Timeline/style';
import { timelineContent } from 'components/Timeline/contents';

export const isInViewport = (element?: Element) => {
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.top >= -viewportHeight && rect.top < viewportHeight;
};

const defaultVisibleState = timelineContent.reduce(
  (accumulator, content) => ({ ...accumulator, [content.title]: false }),
  {},
);

type VisibleState = Record<string, boolean>;

export const Timeline: React.FC = () => {
  const [visibleItems, setVisibleItems] =
    useState<VisibleState>(defaultVisibleState);
  const stateRef = useRef(visibleItems);

  const updateState = (state: VisibleState) => {
    stateRef.current = state;
    setVisibleItems(state);
  };

  const updateVisibility = () => {
    document.querySelectorAll('[data-timeline-item]').forEach((element) => {
      const title = element.getAttribute('data-timeline-item');

      if (title === null) {
        return;
      }

      if (!stateRef.current[title] && isInViewport(element)) {
        updateState({ ...stateRef.current, [title]: true });
      }
    });
  };

  useEffect(() => {
    // eslint-disable-next-line
    if (!window) {
      return () => null;
    }

    window.addEventListener('scroll', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  return (
    <TimelineContent id="timeline">
      {timelineContent.map(({ content, date, future, title }, index) => (
        // eslint-disable-next-line
        <Item
          key={title}
          future={future}
          visible={visibleItems[title] || index === 0}
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
    </TimelineContent>
  );
};
