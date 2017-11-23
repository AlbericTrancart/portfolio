import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import moment from 'moment';

const PostPreview = (props) => {
  const post = props.data;
  const image = require(`img/posts/${post.image}`);
  // const date = moment(post.date).format();
  return (
    <article className={props.className}>
      <header>
        <h3>
          <Link className="Link Link--no-underline" to={post.url}>{post.title}</Link>
        </h3>
        <small>{post.date}</small>
      </header>
      <img className="full-width mtop" src={image} alt={post.title} />
      <p className="mtop">
        {post.subtitle} <Link className="Link" to={post.url}>Read more →</Link>
      </p>
    </article>
  );
};

PostPreview.defaultProps = {
  className: '',
};

PostPreview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    id: '',
    title: '',
    subtitle: '',
    image: '',
    url: '',
    date: '',
  }).isRequired,
};

export default PostPreview;
