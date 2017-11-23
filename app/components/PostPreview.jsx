import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import structs from '~/structs';
import PostHeader from './PostHeader.jsx';

const PostPreview = (props) => {
  const post = props.data;
  return (
    <article className={props.className}>
      <PostHeader data={post} />
      <p className="mtop">
        {post.subtitle} <Link className="Link" to={post.url}>Read →</Link>
      </p>
      {props.endDivider && <hr className="Divider mtop" />}
    </article>
  );
};

PostPreview.defaultProps = {
  className: '',
  endDivider: false,
};

PostPreview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(structs.post).isRequired,
  endDivider: PropTypes.bool,
};

export default PostPreview;
