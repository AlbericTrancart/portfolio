import React from 'react';

import ProjectHeader from '~/components/ProjectHeader.jsx';
import View from '~/components/View.jsx';
import content from '~/content';

export default () => (
  <View>
    <article>
      <ProjectHeader data={content.projects[4]} />

      <section className="Content">
        <p>
          SpaceX Stats is a fan-run website with stats about SpaceX’s achievements.
          The original concept is not mine, it was created by a Reddit user.
          I always wanted to promote the idea of space exploration but back then
          I lost faith in what we were able to do after the Columbia disaster and
          the retirement of the Space Shuttle. However in april 2016 I randomly stumbled
          upon <a className="Link" href="https://www.youtube.com/watch?v=sYmQQn_ZSys" title="SpaceX’s video of the CRS-8 droneship landing" target="_blank" rel="noreferrer noopener">this video</a> on YouTube and I was mindblown.
        </p>

        <img src="/img/projects/spacexstats/oglogo.jpg" alt="An overview of SpaceX Stats" />

        <p>
          Since then I followed all their highs and lows and when I learnt that
          the SpaceX Stats website was not maintained anymore I decided to recode
          the front-end with React, using <a className="Link" href="https://github.com/r-spacex/SpaceX-API" title="The API of the SpaceX subreddit" target="_blank" rel="noreferrer noopener">r/spacex’s API</a> to collect
          data about the launches. I also added some charts and improved the existing
          ones and the user experience on movile over the original website. You can also
          visit <a className="Link" href="https://github.com/r-spacex/spacexstats-react" title="The repo of the website" target="_blank" rel="noreferrer noopener">the Github repository here</a>.
        </p>

        <h2 style={{ textAlign: 'center' }}><a className="Link" href="http://www.spacexstats.xyz" title="SpaceX Stats">Visit the website</a></h2>
      </section>
    </article>
  </View>
);
