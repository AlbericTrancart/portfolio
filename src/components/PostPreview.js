import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import structs from "structs";
import PostHeader from "./PostHeader";

const PostPreview = ({ data: post, className, endDivider }) => (
  <article className={className}>
    <PostHeader data={post} />
    <p className="mtop">
      {post.subtitle}{" "}
      <Link className="Link" to={post.url}>
        Read&nbsp;→
      </Link>
    </p>
    {endDivider && <hr className="Divider mtop" />}
  </article>
);

PostPreview.defaultProps = {
  className: "",
  endDivider: false
};

PostPreview.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(structs.post).isRequired,
  endDivider: PropTypes.bool
};

export default PostPreview;
