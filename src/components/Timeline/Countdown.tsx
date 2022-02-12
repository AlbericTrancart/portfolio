import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Grid } from 'stylesheet';

const ONE_MINUTE_IN_S = 60;
const ONE_HOUR_IN_S = ONE_MINUTE_IN_S * 60;
const ONE_DAY_IN_S = ONE_HOUR_IN_S * 24;

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

interface Props {
  value: Date;
}

const calculateDurationToDate = (value: Date): number =>
  (value.getTime() - Math.floor(Date.now())) / 1000;

export const Countdown: React.FC<Props> = ({ value }) => {
  const [remainingTime, setRemainingTime] = useState<number>(
    calculateDurationToDate(value),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateDurationToDate(value));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let secondsLeft = Math.floor(Math.abs(remainingTime));
  const days = Math.floor(secondsLeft / ONE_DAY_IN_S);
  secondsLeft -= ONE_DAY_IN_S * days;
  const hours = Math.floor(secondsLeft / ONE_HOUR_IN_S);
  secondsLeft -= ONE_HOUR_IN_S * hours;
  const minutes = Math.floor(secondsLeft / ONE_MINUTE_IN_S);
  secondsLeft -= ONE_MINUTE_IN_S * minutes;
  const seconds = Math.floor(secondsLeft);

  return (
    <Wrapper>
      <Value>
        {days.toLocaleString()}
        <Subtitle>Days</Subtitle>
      </Value>
      <Value>
        {hours.toLocaleString()}
        <Subtitle>Hours</Subtitle>
      </Value>
      <Value>
        {minutes.toLocaleString()}
        <Subtitle>Minutes</Subtitle>
      </Value>
      <Value>
        {seconds.toLocaleString()}
        <Subtitle>Seconds</Subtitle>{' '}
      </Value>
    </Wrapper>
  );
};
