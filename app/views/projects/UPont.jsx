import React from 'react';

import ProjectHeader from '~/components/ProjectHeader.jsx';
import View from '~/components/View.jsx';
import content from '~/content';

export default () => (
  <View>
    <article>
      <ProjectHeader data={content.projects[3]} />

      <section className="Content">
        <img src="/img/projects/upont/oglogo.jpg" alt="The home page of uPont" />

        <p>
          Back then in 2014 during my first year at the École Nationale des Ponts et Chaussées,
          there was no intranet for the students. With a friend we decided to tackle
          this issue and we started building a website. It features a list of events
          organized by the student clubs (with automatic mailing if you follow a club),
          a directory to quickly find infos about other students, useful ressources,
          12 themes, achievements and even a minigame.
        </p>

        <img src="/img/projects/upont/demo1.jpg" alt="The home page of uPont" />
        <img src="/img/projects/upont/demo2.jpg" alt="The home page of uPont" />
        <img src="/img/projects/upont/demo3.jpg" alt="The home page of uPont" />

        <p>
          This was my first big web project and we gathered around us a team of
          would-be developers. We used AngularJS (v1) as a front-end with a PHP
          Symfony back-end playing the role of a REST API (yes, back then we were
          young and innocent ;-) ). Here is the <a className="Link" href="https://github.com/KIClubinfo/upont" title="The repo for the website" target="_blank" rel="noreferrer noopener">GitHub repository</a>.
        </p>

        <p>
          It was a great experience because I learnt the basics of the web dev toolkit
          (Git, Linux, Apache, Nginx, HTTP, the MVC architecture, REST, CSS and
          the BEM architecture, TDD, continuous integration, that JS was not limited
          to JQuery...) but it also teached me how to work as a team to make something
          loved by the end users. We achieved a constant retention of 450 unique
          users each month, which is basically everyone on campus and more (there
          are about 350 students on campus and about 400 doing gap years and master
          degrees in foreign countries).
        </p>
      </section>
    </article>
  </View>
);
