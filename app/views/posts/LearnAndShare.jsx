import React from 'react';

import View from '~/components/View.jsx';
import content from '~/content';
import PostHeader from '~/components/PostHeader.jsx';

export default () => (
  <View>
    <article>
      <PostHeader data={content.posts[0]} mainPage />
    </article>
  </View>
);
