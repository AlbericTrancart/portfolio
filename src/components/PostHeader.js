import moment from "moment";
import React from "react";
import { Link } from "gatsby";

const PostHeader = ({ data: { image, date, title, url }, mainPage }) => {
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
        </h1>
      ) : (
        <h3>
          <Link className="Link Link--no-underline" to={url}>
            {title}
          </Link>
        </h3>
      )}
      <Link to={url}>
        <img className="full-width mtop" src={image} alt={title} />
      </Link>
    </header>
  );
};

export default PostHeader;
