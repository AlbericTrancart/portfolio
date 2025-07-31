import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Video } from 'components/Video';
import format from 'date-fns/format';
import React, { ReactNode } from 'react';

const DATE_FORMAT = 'dd MMM yyyy';
const formatDate = (dateString: string) =>
  format(new Date(dateString), DATE_FORMAT);

export interface TimelineContent {
  title: string;
  date: string;
  content: ReactNode;
  future?: boolean;
}

export const timelineContent: TimelineContent[] = [
  {
    title: `Humans on Mars`,
    date: `2026`,
    content: `SpaceX's goal is to land two cargo and two crewed Starships on Mars in 2024.`,
    future: true,
  },
  {
    title: `#dearMoon`,
    date: `2024`,
    content: (
      <p>
        Yasuka Maezawa, a Japanese billionaire, has already bought the first
        Starship crewed flight{' '}
        <Link
          href="https://dearmoon.earth/"
          target="_blank"
          rel="noopener noreferer"
        >
          to go around the Moon with artists
        </Link>
        .
      </p>
    ),
    future: true,
  },
  {
    title: `Cargo landing on Mars`,
    date: `2024`,
    content: (
      <p>
        Two cargo Starships will be launched towards Mars to prove that Earth
        landing technologies also work on Mars.
      </p>
    ),
    future: true,
  },

  {
    title: `First orbital launch`,
    date: `2022`,
    content: (
      <p>
        SpaceX will test Starship in Earth’s upper atmosphere, to validate a
        heat shielding technology and to prove that second stages can also be
        safely landed and reused.
      </p>
    ),
    future: true,
  },
  {
    title: `First stacking of Starship on top of Super Heavy`,
    date: formatDate('2021-08-06'),
    content: (
      <p>
        For the first time, the full rocket system was stacked on the Boca Chica
        launchpad.
        <Image
          filename="starship-timeline/fullstack.jpg"
          alt="Picture of Starship being positioned on top of Super Heavy"
        />
      </p>
    ),
  },
  {
    title: `First Starship successfuly landing`,
    date: formatDate('2021-05-05'),
    content: (
      <p>
        After 4 failed landing attempts, SpaceX successfuly landed Starship
        SN15.
        <Video youtubeId="z9eoubnO-pE" />
      </p>
    ),
  },
  {
    title: `Starship Mk1 test failure`,
    date: formatDate('2019-11-20'),
    content: (
      <p>
        The first Starship prototype failed during a tank pressurization test.
        The team then decided to focus their efforts on the Mk3 prototype.
        <Image
          filename="starship-timeline/starship-mk1-explosion.jpg"
          alt="A picture of the Mk1 prototype exploding"
        />
      </p>
    ),
  },
  {
    title: `Starship Mk1 presentation`,
    date: formatDate('2019-09-28'),
    content: (
      <p>
        SpaceX unveiled its first prototype of the Starship, with the goal of
        doing a 20km-high flight with it.
        <Image
          filename="starship-timeline/starhopper-mk1-complete.jpg"
          alt=""
        />
      </p>
    ),
  },
  {
    title: `Starhopper 150m hop`,
    date: formatDate('2019-08-27'),
    content: (
      <p>
        The Starhopper prototype made a 150 meters hop, allowing SpaceX to
        validate the engine control and landing algorithms.
        <Video youtubeId="bYb3bfA6_sQ" />
      </p>
    ),
  },
  {
    title: `Starship orbital prototypes construction starts`,
    date: formatDate('2019-05-14'),
    content: (
      <p>
        SpaceX has started building two high fidelity Starship prototypes: one
        in Florida, one in Texas. The first team to reach orbit and come back on
        land is the winner.
        <Image filename="starship-timeline/florby.jpg" alt="" />
      </p>
    ),
  },
  {
    title: `First full-scale Raptor engine test`,
    date: formatDate('2019-02-04'),
    content: (
      <p>
        The Raptor engine was tested at full power for the first time.
        <Video youtubeId="X2dEpe8WS1A" />
      </p>
    ),
  },
  {
    title: `Starhopper construction starts`,
    date: formatDate('2018-12-20'),
    content: (
      <p>
        SpaceX contracted a water tower company to rapidly assemble a working
        Starship prototype to test its Raptor engine in real flight conditions.
        <Image filename="starship-timeline/starhopper.jpg" alt="" />
      </p>
    ),
  },
  {
    title: `First Starship customer`,
    date: formatDate('2018-09-17'),
    content: (
      <p>
        SpaceX announced its first crewed flight, targeting 2023 for a flight
        around the Moon. The crew will be composed of several artists lead by
        Yusaku Maezawa, a Japanese billionaire.
        <Image filename="starship-timeline/dearmoon.jpg" alt="" />
      </p>
    ),
  },
  {
    title: `Tooling for the rocket body delivered`,
    date: formatDate('2018-04-09'),
    content: (
      <p>
        SpaceX received its first tool and started to manufacture carbon fiber
        tanks under a tent in Los Angeles. This tool was later scrapped because
        SpaceX chose to replace carbon fiber with stainless steel, a cheaper and
        more adapted material.
        <Image filename="starship-timeline/bfrtool.jpg" alt="" />
      </p>
    ),
  },
  {
    title: `Project downscaled`,
    date: formatDate('2017-09-29'),
    content: (
      <p>
        To make the project more sustainable by making the rocket pay for
        itself, SpaceX downscaled the size of the rocket from a 12 meters
        diameter to a 9 meters one.
        <Image filename="starship-timeline/bfr.jpg" alt="" />
      </p>
    ),
  },
  {
    title: `Elon Musks reveals SpaceX's plan for Mars`,
    date: formatDate('2016-09-28'),
    content: (
      <p>
        The Starship (known at the time as the &quot;Interplanetary Transport
        System&quot;) was unveiled for the first time while setting the
        aspirational goal of launching human crew to Mars by 2024.
        <Image
          filename="starship-timeline/its.jpg"
          alt="Render of the ITS on the launchpad"
        />
      </p>
    ),
  },
  {
    title: `First rocket landing`,
    date: formatDate('2015-12-22'),
    content: (
      <p>
        For the first time, SpaceX succeeds in landing the first stage of its
        Falcon 9 rocket.
      </p>
    ),
  },
  {
    title: `Raptor engine development starts`,
    date: `2012`,
    content: (
      <p>
        SpaceX begins to design a methalox engine more powerful and capable than
        the Merlin-1D engine of the Falcon 9.
      </p>
    ),
  },
  {
    title: `Elon Musk's bet`,
    date: `April 2009`,
    content: (
      <p>
        During an interview, Elon Musk made a bet that SpaceX would put a man on
        Mars by 2020 or 2025. Musk has continued to reiterate this rough
        timeframe since.
      </p>
    ),
  },
  {
    title: `Falcon 1 achieves orbit`,
    date: `September 2008`,
    content: (
      <p>
        On the fourth try, SpaceX finally succeeds in delivering a payload into
        Earth orbit.
      </p>
    ),
  },
  {
    title: `SpaceX is founded`,
    date: `2002`,
    content: (
      <p>
        SpaceX is founded by tech entrepreneurs with the goal of providing
        cheaper access to space.
        <Image
          filename="starship-timeline/spacex2002.jpg"
          alt="SpaceX employees with a mariachi band"
        />
      </p>
    ),
  },
];
