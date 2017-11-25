import React from 'react';

import PostHeader from '~/components/PostHeader.jsx';
import Video from '~/components/Video.jsx';
import View from '~/components/View.jsx';
import content from '~/content';

export default () => (
  <View>
    <article>
      <PostHeader data={content.posts[3]} mainPage />

      <section className="Content mtop">
        <em>
          This talk is in french, however I have planned to do a big blog post
          about CSS best practices and how to migrate a very complex CSS legacy app.
          Stay tuned!
        </em>

        <Video youtubeId="u7sLyhIt8tg" />
      </section>
    </article>
  </View>
);
