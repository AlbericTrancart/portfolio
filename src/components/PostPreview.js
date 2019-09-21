import React from "react";
import { Link } from "gatsby";
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

export default PostPreview;
