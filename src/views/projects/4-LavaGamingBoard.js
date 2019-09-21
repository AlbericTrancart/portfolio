import React from "react";
import { Link } from "gatsby";

import ProjectHeader from "components/ProjectHeader";
import content from "content";

export default () => (
  <article>
    <ProjectHeader data={content.projects[3]} />

    <section className="Content">
      <p>
        This project is one of my latest hand work projects. The goal was to
        design and build a decent-looking gaming board to wage awesome battles
        of minis. The challenge was that it had to be be cheaper than a retail
        gaming board and I had one week to do it.
      </p>

      <img
        src="/img/posts/lavagamingboard/image1.jpg"
        alt="The table without minis"
      />
      <img
        src="/img/posts/lavagamingboard/image2.jpg"
        alt="The table with minis"
      />

      <p>
        I love building things and this was no exception. It was very fun and
        rewarding: now I can play on it with friends and full painted armies and
        it’s awesome. If you want to know how I did it,{" "}
        <Link
          className="Link"
          to={content.posts[2].url}
          title={content.posts[2].title}
        >
          you can read my blog post about it
        </Link>.
      </p>
    </section>
  </article>
);
