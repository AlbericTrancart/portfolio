import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import structs from "structs";

const PostHeader = ({
  data: { image, date, title, subtitle, url },
  mainPage
}) => {
  const imageUrl = `/img/${image}`;
  const momentDate = moment(date);
  return (
    <header>
      <time className="PostPreview__date small" dateTime={momentDate.format()}>
        {momentDate.format("MMMM DD, YYYY")}
      </time>
      {mainPage ? (
        <h1>
          <Link className="Link Link--no-underline" to={url}>
            {title}
          </Link>

          <Helmet>
            <title>{title} &bull; Albéric Trancart</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={subtitle} />
            <meta
              property="og:url"
              content={`https://alberic.trancart.net${url}`}
            />
            <link rel="canonical" href={`https://alberic.trancart.net${url}`} />
            <meta
              property="og:image"
              content={`https://alberic.trancart.net${imageUrl}`}
            />
          </Helmet>
        </h1>
      ) : (
        <h3>
          <Link className="Link Link--no-underline" to={url}>
            {title}
          </Link>
        </h3>
      )}
      <Link to={url}>
        <img className="full-width mtop" src={imageUrl} alt={title} />
      </Link>
    </header>
  );
};

PostHeader.defaultProps = {
  mainPage: false
};

PostHeader.propTypes = {
  data: PropTypes.shape(structs.post).isRequired,
  mainPage: PropTypes.bool
};

export default PostHeader;
