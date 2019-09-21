import React from "react";

import ProjectHeader from "components/ProjectHeader";
import Video from "components/Video";
import content from "content";

export default () => (
  <article>
    <ProjectHeader data={content.projects[0]} />

    <section className="Content">
      <img src="/img/projects/spacehulkmod/logo.png" alt="The mod's logo" />

      <blockquote>
        <strong>
          In the depths of outer space, a huge block of vessels drifts in a
          vacuum.<br />
          On board, the biggest threat in the history of mankind is being
          prepared.<br />
          The Space Marines are responsible for cleaning the depths of the xeno
          abomination…
        </strong>
      </blockquote>

      <p>
        Back in 2010, this was my first coding project ever: to create a total
        conversion mode based on the <em>Warhammer 40,000 - Dawn of War II</em>{" "}
        game in order to reproduce the gameplay and feeling of the{" "}
        <em>Space Hulk</em> board game.
      </p>

      <img
        src="/img/projects/spacehulkmod/ingame.jpg"
        alt="An ingame screenshot"
      />

      <p>
        It was a big success because it made it to top #2 on ModDb (and still is
        #6,000 of #31,000 7 years later), was translated in 4 languages (french,
        english, italian and german) and it was featured in articles in several
        gaming magazines. The latest version was downloaded 20,000 times.
      </p>

      <div className="fx-row fx-wrap mtop-big">
        <div className="fx-col-xs-12 fx-col-sm-6">
          <img
            className="nomargin"
            src="/img/projects/spacehulkmod/map1.jpg"
            alt="Screenshot"
          />
        </div>
        <div className="fx-col-xs-12 fx-col-sm-6">
          <img
            className="nomargin"
            src="/img/projects/spacehulkmod/map2.jpg"
            alt="Screenshot"
          />
        </div>
        <div className="fx-col-xs-12 fx-col-sm-6">
          <img
            className="nomargin"
            src="/img/projects/spacehulkmod/map3.jpg"
            alt="Screenshot"
          />
        </div>
        <div className="fx-col-xs-12 fx-col-sm-6">
          <img
            className="nomargin"
            src="/img/projects/spacehulkmod/map4.jpg"
            alt="Screenshot"
          />
        </div>
      </div>

      <p>It featured and demanded:</p>

      <ul>
        <li>New gameplay and missions</li>
        <li>New models from other modders</li>
        <li>New maps</li>
        <li>Communication and promotion in forums and different websites</li>
        <li>LUA scripting</li>
        <li>Translation work</li>
        <li>Even the inclusion of a different soundtrack!</li>
      </ul>

      <p>
        As a high school student it was an amazing project to work on and it was
        very rewarding. If you know the base game, here is a video of an in-dev
        multiplayer session that might interest you:
      </p>

      <Video youtubeId="2supuKti_uA" />
    </section>
  </article>
);
