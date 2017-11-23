import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import structs from '~/structs';

const PostHeader = (props) => {
  const image = require(`img/${props.data.image}`);
  const date = moment(props.data.date);
  return (
    <header>
      <time className="PostPreview__date small" dateTime={date.format()}>
        {date.format('MMMM DD, YYYY')}
      </time>
      {props.mainPage ? (
        <h1>
          <Link className="Link Link--no-underline" to={props.data.url}>
            {props.data.title}
          </Link>
        </h1>
      ) : (
        <h3>
          <Link className="Link Link--no-underline" to={props.data.url}>
            {props.data.title}
          </Link>
        </h3>
      )}
      <Link to={props.data.url}>
        <img className="full-width mtop" src={image} alt={props.data.title} />
      </Link>
    </header>
  );
};

PostHeader.defaultProps = {
  mainPage: false,
};

PostHeader.propTypes = {
  data: PropTypes.shape(structs.post).isRequired,
  mainPage: PropTypes.bool,
};

export default PostHeader;
