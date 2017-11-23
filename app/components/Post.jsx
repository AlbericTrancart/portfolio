import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  render = () => {
    return (
      <article>
        Lowl
      </article>
    );
  }
}

Post.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default Post;
