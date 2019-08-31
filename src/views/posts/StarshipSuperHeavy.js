import React from "react";

import PostHeader from "components/PostHeader";
import Video from "components/Video";
import content from "content";

const imgdir = "/img/posts/spacexstarship/";

export default () => (
  <article>
    <PostHeader data={content.posts[4]} mainPage />

    <section className="Content">
      <p>
        We are on the brink of a revolution in space travel tech. It is my
        pleasure to share the excitement by explaining what it is, why it is
        important, how and when it will happen. This one will be in the history
        books, so you better learn about it!
      </p>
      <h2>What it is</h2>
      <p>
        Starship is SpaceX's next gen rocket, currently under development. You
        may have heard of it under its codename BFR, which stands for{" "}
        <em>Big, Fucking, Rocket</em>. Being 118 meters tall,{" "}
        <strong>
          it will be the biggest and most powerful rocket in history
        </strong>
        . Bigger and more powerful than the Saturn V, the rocket that brought
        the Apollo missions to the Moon.
      </p>
      <figure>
        <img src={`${imgdir}sizes.png`} alt="Sizes comparison" />
        <figcaption>
          <em>
            Saturn V, Super Heavy/Starship and Falcon 9 (SpaceX's current
            rocket) size comparison
          </em>
        </figcaption>
      </figure>
      <p>The Starship rocket system is made of two parts:</p>
      <ul>
        <li>
          At the bottom (under the black separation line), the first stage which
          is called the Super Heavy booster. Its role is to accelerate the
          second stage out of the atmosphere.
        </li>
        <li>
          At the top, the second stage - the Starship itself. It will come in
          two flavors: one cargo version for transporting satellites and one
          crewed version to send people in outer space.
        </li>
      </ul>
      <h2>Why it is important</h2>
      <p>Three awesome things about this rocket:</p>
      <ul>
        <li>
          <em>It can lift a lot at once.</em> Current rockets can lift about ~20
          tons to Low Earth Orbit, whereas{" "}
          <strong>Starship will be able to lift more than 100 tons</strong> to
          the same orbit.
        </li>
        <li>
          <em>It runs on methane.</em> Methane is a fuel that can easily be
          manufactured on Mars with basic chemical reactions, which means that{" "}
          <strong>
            if you land a Starship on Mars, you can return to Earth for free by
            producing methane there.
          </strong>
        </li>
        <li>
          <em>It will be dirt cheap.</em> Right now, you can send things to
          space for about $5,000/kg.{" "}
          <strong>
            Starship aims to bring that figure to as low as $50/kg.
          </strong>
        </li>
      </ul>
      <p>
        With launch costs being 100x cheaper, a lot of sci-fi things become
        possible:
      </p>
      <ul>
        <li>
          A permanent scientific base on the Moon - imagine your child doing a
          PhD at Moon Base Alpha, joining the 1,000 other scientists there for a
          two-year stay
        </li>
        <li>
          A Mars colony - you regularly exchange video messages with your friend
          who sold his house to move to another planet and start a new life
        </li>
        <li>
          Space tourism - you can see Earth from space for the price of a
          premium airline ticket
        </li>
        <li>
          Probes and landers to destinations which have tremendous scientific
          value - you can watch high-resolution documentaries about Enceladus'
          underground oceans or Titan's cryovolcanoes
        </li>
        <li>And a lot more...</li>
      </ul>
      <h2>How it works</h2>
      <p>
        Now is the time to ask: how is it even possible??? How can Starship
        achieve such a low cost access to space? The key word is:
      </p>
      <p>
        <em>Reusability.</em>
      </p>
      <p>
        Rocket stages are usually single use: they are thrown into the ocean
        after delivering their payloads to orbit. With Falcon 9,{" "}
        <strong>
          SpaceX has already proven that landing rocket boosters and reusing
          them is possible <em>and</em> profitable.
        </strong>{" "}
        However, the company has only reused first stages so far, which means
        that a lot of costly parts must still be manufactured for each launch.
      </p>
      <figure>
        <img
          src={`${imgdir}reuse.jpg`}
          alt="Two Falcon Heavy boosters landing at once"
        />
        <figcaption>
          <em>Two Falcon 9 boosters landing simultaneously</em>
        </figcaption>
      </figure>
      <p>
        <strong>
          Contrary to Falcon 9, Starship is big enough and has enough fuel
          margins that it will be possible to recover and reuse both stages
        </strong>
        , making it the first 100% reusable rocket system in history. With
        airplane-like reliability, the only real cost is the fuel - about
        ~$500,000 for a fully-fueled Starship. Amortize the manufacturing cost
        of both stages over 100 launches, add some margins and you get the
        $5,000,000/100 tons or $50/kg price tag to Low Earth orbit.
      </p>
      <h2>Timelines</h2>
      <p>
        The best thing is:{" "}
        <strong>
          all of this is going to happen way sooner than you think
        </strong>
        . The SpaceX team is hell-bent on landing a Starship on Mars by 2024. To
        achieve this goal, they are moving really, really fast. Here is an
        updated timeline of what has happened and is happening right now
        regarding Starship development:
      </p>
      <h3>Phase 1 - Raptor engine development - DONE</h3>
      <p>
        The Raptor engine is the rocket engine that powers Starship. They are{" "}
        <em>super high tech</em> by rocket engine standards and Super
        Heavy/Starship will have more than 40 of them. As it's the single most
        complicated system in the rocket, its development began around 2012.
        After a lot of testing,{" "}
        <strong>Raptor has entered mass production in 2019.</strong>
      </p>
      <figure>
        <img src={`${imgdir}raptor.png`} alt="A raptor engine firing" />
      </figure>
      <h3>Phase 2 - Starhopper low-fidelity prototype - DONE</h3>
      <p>
        To test its Raptor engine in real flight conditions, SpaceX contracted a
        water tower company to rapidly assemble a working Starship prototype.
        This prototype made hops (the highest at 150 meters){" "}
        <strong>
          and allowed SpaceX to validate the engine control and landing
          algorithms
        </strong>
        .
      </p>
      <Video youtubeId="bYb3bfA6_sQ" />
      <h3>Phase 3 - Starship prototypes - HAPPENING RIGHT NOW</h3>
      <p>
        The next step is to test Starship in Earth's upper atmosphere, to
        validate a heat shielding technology and to prove that second stages can
        also be safely landed and reused.{" "}
        <strong>
          SpaceX is currently building two high fidelity Starship prototypes:
          one in Florida, one in Texas.
        </strong>{" "}
        The first team to reach orbit and come back on land is the winner.
      </p>
      <figure>
        <img src={`${imgdir}florida.jpg`} alt="Starship prototype in Florida" />
        <figcaption>
          <em>Starship prototype in Florida</em>
        </figcaption>
      </figure>
      <figure>
        <img src={`${imgdir}texas.jpg`} alt="Starship prototype in Texas" />
        <figcaption>
          <em>Starship prototype in Texas</em>
        </figcaption>
      </figure>
      <h3>Phase 4 - First commercial launch - 2021</h3>
      <p>
        SpaceX is already in talks with three potential customers for a
        commercial satellite launch in 2021. This will be a big milestone,
        because{" "}
        <strong>
          it will mean that Starship is already cheaper and better than the
          Falcon 9
        </strong>
        . Also, it will make the rocket pay for itself (which is an achievement,
        considering the size of the thing).
      </p>
      <figure>
        <img src={`${imgdir}2021.png`} alt="Starship skyrocketing" />
      </figure>
      <h3>Phase 5 - First landing on Mars - 2022</h3>
      <p>
        While Starship will be developed to enter mass production and execute
        most SpaceX missions, two cargo Starships will be retired and launched
        towards Mars.{" "}
        <strong>
          The goal will be to prove that Earth landing technologies also work on
          Mars.
        </strong>
      </p>
      <figure>
        <img src={`${imgdir}2022.png`} alt="Starship landing on Mars" />
      </figure>
      <h3>Phase 6 - First crewed trip around the Moon - 2023</h3>
      <p>
        After that, the next challenge will be to develop the crewed version and
        send people with it.{" "}
        <strong>
          Yasuka Maezawa, a Japanese billionaire, has already bought the first
          Starship crewed flight to go around the Moon with artists
        </strong>{" "}
        (a film director, a musician, a painter, a fashion designer...). He's
        also paying a good chunk of the development cost.
      </p>
      <figure>
        <img src={`${imgdir}2023.jpg`} alt="Starship around the Moon" />
      </figure>
      <h3>Final phase - First human footprints on Mars - 2024</h3>
      <p>
        By 2024, Starship should have dozens of successful flights under its
        belt in the near-Earth space.{" "}
        <strong>
          SpaceX's goal is to land two cargo and two crewed Starships on Mars in
          five years.
        </strong>{" "}
        After that, the rest should be history.
      </p>
      <figure>
        <img src={`${imgdir}2024.png`} alt="Starship on Mars" />
      </figure>
      <h2>My take on the subject</h2>
      <p>
        A Moon base and Mars colony in our lifetimes?
        <em>Sure as hell it will happen!</em> But obviously, the 2024 goal seems
        really ambitious. I think the crewed version will take longer to develop
        as human-rating a rocket system for a 3-year journey will not be simple.
        <strong>
          My bet is that the first cargo Starship will land on Mars in 2024 and
          that the first human footprints will happen before 2030.
        </strong>{" "}
      </p>
      <p>
        But thus far, SpaceX is on time according to the original timeline
        revealed in 2016. What you need to know is that{" "}
        <em>
          their internal schedule is even more ambitious than this official
          timeline!
        </em>{" "}
        I'm not holding my breath, but they are the ones who already made the
        impossible possible by landing a rocket and reusing it profitably.
      </p>
      <h2>If you want to...</h2>
      <ul>
        <li>
          Ask any question, you can tweet them{" "}
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/alberictrancart"
          >
            @alberictrancart
          </a>
          .
        </li>
        <li>
          Know more about Starship, Raptor engine or anything related to rocket
          science,{" "}
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.elonx.net/super-heavy-starship-compendium/"
          >
            here is a great Starship compendium
          </a>
          .
        </li>
        <li>
          Stay up to date with Starship infos, the{" "}
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.reddit.com/r/spacex/"
          >
            r/spacex
          </a>{" "}
          Reddit community is the best resource but you can also follow me on
          Twitter ;)
        </li>
      </ul>
    </section>
  </article>
);
