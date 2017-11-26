import React from 'react';

import ProjectHeader from '~/components/ProjectHeader.jsx';
import View from '~/components/View.jsx';
import content from '~/content';

export default () => (
  <View>
    <article>
      <ProjectHeader data={content.projects[1]} />

      <section className="Content">
        <p>
          I was always interested in construction and architecture, that’s why I
          chose the civil engineering cursus during my studies (and the École
          Nationale des Ponts et Chaussées is one of the best shcools in this domain).
          One of my favorite courses was the design week, during which we were
          tasked to design and build something (in my case, a wooden bridge).
        </p>

        <p>
          We worked in teams of 6 (4 engineers, 1 architect and 1 designer) and
          the goal was to create a walkable bridge with some constraints:
        </p>

        <ul>
          <li>A minimum length of 7 meters</li>
          <li>A minimum span of 5 meters</li>
          <li>A clearance of 1 meter</li>
          <li>A limited quantity of materials</li>
          <li>A standard person could walk on the bridge… more than once</li>
        </ul>

        <img src="/img/projects/woodenbridge/oglogo.jpg" alt="The bridge" />
        <img src="/img/projects/woodenbridge/image1.jpg" alt="The bridge" />
        <img src="/img/projects/woodenbridge/image2.jpg" alt="The bridge" />

        <p>
          We chose to do an isostatic structure with a rotule in the middle - which
          later turned out to be the failure mode: the rotule broke after 7 crossings
          because we put a screw through a piece of wood of poor quality.
        </p>

        <p>
          At the end, this project was very fun and demanding. It allowed us to
          grasp the basics of structural engineering, modeling and bridge design.
          For first year engineering students it was also the first opportunity
          we had to work with future architects and designers. For me it was also
          the confirmation that I like getting my hands dirty with manual work and
          carry the realisation of a project to the end.
        </p>
      </section>
    </article>
  </View>
);
