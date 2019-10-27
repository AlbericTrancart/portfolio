import React from "react";

import content from "content";
import PostHeader from "components/PostHeader";

const imgdir = "/img/posts/learnandshare/";

export default () => (
  <article>
    <PostHeader data={content.posts[0]} mainPage />

    <section className="Content">
      It’s time for a first post! As an introduction, I would like to explain
      WHY I am doing this. This whole blog idea. This is a kind of meta-post
      that will serve as a guideline for the other ones, so let’s do this! ##
      Never stop learning
      <blockquote>
        ** Anyone who stops learning is old, whether at twenty or eighty. Anyone
        who keeps learning stays young. The greatest thing in life is to keep
        your mind young. ** ~ Henry Ford
      </blockquote>
      Almost two years ago, I started to realize that learning goes well beyond
      studies, and a great many things are not learnt at school. ** Since then,
      I have an objective: to never stop learning. This decision had a huge
      positive impact: ** I feel happier and I think that I have done more in
      two years than ever before. Before delving into the **How** and the
      **What**, I will emphasize the **Why**. Most people see “The Plan” like
      this:
      <ol>
        <li>Go to school. Learn.</li>
        <li>Get a degree. Stop.</li>
        <li>?</li>
        <li>Profit.</li>
      </ol>
      However, there are two huge mistakes here: the scope of the skill set is
      very limited and the skill set does not grow after your mid-twenties. As a
      consequence, all does not go according to “The Plan”. Then, the
      trial-and-error process of the human brain struggles to stick to “The
      Plan”:
      <ol>
        <li>Make (very) bad decisions.</li>
        <li>Try to fix the consequences.</li>
        <li>Regret those decisions and wish you knew better.</li>
      </ol>
      Even trickier and scarier: there are mistakes you will not notice until
      your death-bed. Or you may not notice at all. Hopefully, it happens that
      there are (at the moment) around 7 billions people on Earth. For every
      mistake you make, a large group of people had a similar story. In this
      group, the chances that someone wrote/spoke about it are crazy high.
      Learning is the assimilation of the knowledge of others without all the
      cons. Why you should learn:
      <ul>
        <li>**To make the right things** (to be _effective_)</li>
        <li>**To make the things right** (to be _efficient_)</li>
        <li>
          And this **in every aspect of your life**, be it professional skills,
          relationships, hobbies, existential questions…
        </li>
      </ul>
      <figure>
        <img src={`${imgdir}savingtime.jpg`} alt="Is it worth the time?" />
        <figcaption>_And it can make you save a lot of time…_</figcaption>
      </figure>
    </section>

    <section className="Content">
      ## How and What There are lots of media in order to achieve your goals.
      Obviously depending on the chosen topic, some are better than others but
      as a guideline, try to innovate with what you come up with and use
      different sources to enlarge the pool of available information. For
      instance, here are my media:
      <ul>
        <li>Taking classes</li>
        <li>
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://medium.com/@maxthoon/reading-self-help-books-why-i-wish-i-started-sooner-fa1ff52f25f1#.srdfsf9b4"
          >
            Reading self-help books
          </a>
        </li>
        <li>
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="http://www.ted.com"
          >
            Watching TED Talks
          </a>
        </li>
        <li>
          Following
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="http://waitbutwhy.com"
          >
            some blogs
          </a>
          bringing up
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://medium.com"
          >
            lots of different ideas
          </a>
        </li>
        <li>
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="http://meetup.com"
          >
            Going to meetups
          </a>
        </li>
        <li>
          Using Google.
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="http://www.google.fr/search?q=the+answer+to+life+the+universe+and+everything"
          >
            For. Every. Damn. Question.
          </a>
        </li>
      </ul>
      As for what to learn, you should already have some ideas (you always
      dreamt to learn a useful skill? Start now!) but you should look at:
      <ul>
        <li>
          Teamwork.
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="http://amzn.to/24HFRgD"
          >
            Learn how to build a team
          </a>
        </li>
        <li>
          Efficiency.
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="http://amzn.to/1tj3UGR"
          >
            Optimise&nbsp;every&nbsp;aspect of your life
          </a>
        </li>
        <li>
          Business.
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="http://medium.com/appbot/how-i-got-2-3m-app-downloads-without-spending-a-cent-on-marketing-f4823b6bc779"
          >
            How to build a successful app
          </a>
        </li>
        <li>
          Relationships.
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="http://amzn.to/1UmDuOV"
          >
            How to win friends and influence people
          </a>
        </li>
        <li>
          Sharing your ideas.
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.ted.com/talks/chris_anderson_teds_secret_to_great_public_speaking"
          >
            How to speak in public
          </a>
        </li>
        <li>
          Science.
          <a
            className="Link"
            target="_blank"
            rel="noreferrer noopener"
            href="http://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html"
          >
            The next challenges humans will face
          </a>
        </li>
        <li>
          How to learn. No joke. That’s ultra-super-important. So important that
          it’s the next thing I’ll discuss.
        </li>
      </ul>
      ## Learn how to learn
      <img src={`${imgdir}learntolearn.jpg`} alt="Metalearning" />
      Let’s go meta. Learning allow you to gather knowledge, but you want to do
      it faster that you would have done by doing the experiments yourself.
      There are three factors you want to improve with some tips:
      <ul>
        <li>
          You want it **fast**: learn to read super fast/watch videos at 1.5x
          speed.
        </li>
        <li>
          You want it **dense**: if after 50 pages of a 400 pages book you
          gained zero knowledge, chances are high that it will not change with
          the last 350 pages. Please stop reading and take a better book. Do the
          same with presentations/talks/videos of poor quality.
        </li>
        <li>
          You want it **right**: share what you learnt and crave for feedback.
          Learning is a social activity! Discussing with other people will make
          THEM learn, and for YOU as you teach them/share your thoughts on the
          issue the knowledge will get more and more precise in your head.
        </li>
      </ul>
      I’m sure you will find the tips &amp; tricks that work well for you, the
      most important thing is to be aware of how important this skill is. As for
      me, this concludes my first blog post. Time to start sharing!
    </section>
  </article>
);
