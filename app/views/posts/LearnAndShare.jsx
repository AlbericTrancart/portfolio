import React from 'react';

import View from '~/components/View.jsx';
import content from '~/content';
import PostHeader from '~/components/PostHeader.jsx';

import image1 from '~/img/posts/learnandshare/savingtime.jpg';
import image2 from '~/img/posts/learnandshare/learntolearn.jpg';

export default () => (
  <View>
    <article>
      <PostHeader data={content.posts[0]} mainPage />

      <section className="Content">
        <p>
          It’s time for a first post! As an introduction, I would like to explain
          WHY I am doing this. This whole blog idea. This is a kind of meta-post
          that will serve as a guideline for the other ones, so let’s do this!
        </p>

        <h2>Never stop learning</h2>

        <blockquote>
          <strong>
            Anyone who stops learning is old, whether at twenty or eighty. Anyone
            who keeps learning stays young. The greatest thing in life is to keep
            your mind young.
          </strong>
          <p>~ Henry Ford</p>
        </blockquote>

        <p>
          Almost two years ago, I started to realize that learning goes well beyond
          studies, and a great many things are not learnt at school.
          <strong>
            {' '}Since then, I have an objective: to never stop learning. This
            decision had a huge positive impact:{' '}
          </strong>
          I feel happier and I think
          that I have done more in two years than ever before. Before delving into
          the <strong>How</strong> and the <strong>What</strong>, I will emphasize
          the <strong>Why</strong>.
        </p>

        <p>Most people see “The Plan” like this:</p>

        <ol>
          <li>Go to school. Learn.</li>
          <li>Get a degree. Stop.</li>
          <li>?</li>
          <li>Profit.</li>
        </ol>

        <p>
          However, there are two huge mistakes here: the scope of the skill set
          is very limited and the skill set does not grow after your mid-twenties.
          As a consequence, all does not go according to “The Plan”. Then, the
          trial-and-error process of the human brain struggles to stick to “The Plan”:
        </p>

        <ol>
          <li>Make (very) bad decisions.</li>
          <li>Try to fix the consequences.</li>
          <li>Regret those decisions and wish you knew better.</li>
        </ol>

        <p>
          Even trickier and scarier: there are mistakes you will not notice until
          your death-bed. Or you may not notice at all. Hopefully, it happens
          that there are (at the moment) around 7 billions people on Earth. For
          every mistake you make, a large group of people had a similar story.
          In this group, the chances that someone wrote/spoke about it are crazy
          high. Learning is the assimilation of the knowledge of others without
          all the cons. Why you should learn:
        </p>

        <ul>
          <li><strong>To make the right things</strong> (to be <em>effective</em>)</li>
          <li><strong>To make the things right</strong> (to be <em>efficient</em>)</li>
          <li>
            And this <strong>in every aspect of your life</strong>, be it professional
            skills, relationships, hobbies, existential questions…
          </li>
        </ul>

        <figure>
          <img src={image1} alt="Is it worth the time?" />
          <figcaption><em>And it can make you save a lot of time…</em></figcaption>
        </figure>
      </section>

      <section className="Content">
        <h2>How and What</h2>

        <p>
          There are lots of media in order to achieve your goals. Obviously
          depending on the chosen topic, some are better than others but as a
          guideline, try to innovate with what you come up with and use different
          sources to enlarge the pool of available information. For instance,
          here are my media:
        </p>

        <ul>
          <li>Taking classes</li>
          <li><a className="Link" target="_blank" rel="noreferrer noopener" href="https://medium.com/@maxthoon/reading-self-help-books-why-i-wish-i-started-sooner-fa1ff52f25f1#.srdfsf9b4">Reading self-help books</a></li>
          <li><a className="Link" target="_blank" rel="noreferrer noopener" href="http://www.ted.com">Watching TED Talks</a></li>
          <li>Following <a className="Link" target="_blank" rel="noreferrer noopener" href="http://waitbutwhy.com">some blogs</a> bringing up <a className="Link" target="_blank" rel="noreferrer noopener" href="https://medium.com">lots of different ideas</a></li>
          <li><a className="Link" target="_blank" rel="noreferrer noopener" href="http://meetup.com">Going to meetups</a></li>
          <li>Using Google. <a className="Link" target="_blank" rel="noreferrer noopener" href="http://www.google.fr/search?q=the+answer+to+life+the+universe+and+everything">For. Every. Damn. Question.</a></li>
        </ul>

        <p>
          As for what to learn, you should already have some ideas (you always
          dreamt to learn a useful skill? Start now!) but you should look at:
        </p>

        <ul>
          <li>Teamwork. <a className="Link" target="_blank" rel="noreferrer noopener" href="http://amzn.to/24HFRgD">Learn how to build a team</a></li>
          <li>Efficiency. <a className="Link" target="_blank" rel="noreferrer noopener" href="http://amzn.to/1tj3UGR">Optimise&nbsp;every&nbsp;aspect of your life</a></li>
          <li>Business. <a className="Link" target="_blank" rel="noreferrer noopener" href="http://medium.com/appbot/how-i-got-2-3m-app-downloads-without-spending-a-cent-on-marketing-f4823b6bc779">How to build a successful app</a></li>
          <li>Relationships. <a className="Link" target="_blank" rel="noreferrer noopener" href="http://amzn.to/1UmDuOV">How to win friends and influence people</a></li>
          <li>Sharing your ideas. <a className="Link" target="_blank" rel="noreferrer noopener" href="https://www.ted.com/talks/chris_anderson_teds_secret_to_great_public_speaking">How to speak in public</a></li>
          <li>Science. <a className="Link" target="_blank" rel="noreferrer noopener" href="http://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html">The next challenges humans will face</a></li>
          <li>
            How to learn. No joke. That’s ultra-super-important. So important
            that it’s the next thing I’ll discuss.
          </li>
        </ul>

        <h2>Learn how to learn</h2>

        <img src={image2} alt="Metalearning" />

        <p>
          Let’s go meta. Learning allow you to gather knowledge, but you want to
          do it faster that you would have done by doing the experiments yourself.
          There are three factors you want to improve with some tips:
        </p>

        <ul>
          <li>
            You want it <strong>fast</strong>: learn to read super fast/watch
            videos at 1.5x speed.
          </li>
          <li>
            You want it <strong>dense</strong>: if after 50 pages of a 400 pages
            book you gained zero knowledge, chances are high that it will not
            change with the last 350 pages. Please stop reading and take a better
            book. Do the same with presentations/talks/videos of poor quality.
          </li>
          <li>
            You want it <strong>right</strong>: share what you learnt and crave
            for feedback. Learning is a social activity! Discussing with other
            people will make THEM learn, and for YOU as you teach them/share your
            thoughts on the issue the knowledge will get more and more precise in your head.
          </li>
        </ul>

        <p>
          I’m sure you will find the tips &amp; tricks that work well for you,
          the most important thing is to be aware of how important this skill is.
          As for me, this concludes my first blog post. Time to start sharing!
        </p>
      </section>
    </article>
  </View>
);
