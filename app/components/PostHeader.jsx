import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import structs from '~/structs';

const PostHeader = (props) => {
  const image = `/img/${props.data.image}`;
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

          <Helmet>
            <meta property="og:title" content={props.data.title} />
            <meta property="og:description" content={props.data.subtitle} />
            <meta property="og:url" content={`https://trancart.net${props.data.url}`} />
            <meta property="og:image" content={`https://trancart.net${image}`} />
          </Helmet>
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
