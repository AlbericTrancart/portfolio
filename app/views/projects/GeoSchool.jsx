import React from 'react';

import ProjectHeader from '~/components/ProjectHeader.jsx';
import View from '~/components/View.jsx';
import content from '~/content';

export default () => (
  <View>
    <article>
      <ProjectHeader data={content.projects[5]} />

      <section className="Content">
        <img src="/img/projects/geoschool/logo.png" alt="GéoSchool's logo" />

        <p>
          In 2015, a friend of mine had a problem: he was looking for an internship
          in Sweden and was looking for feedback from people who went there but although
          these people existed and surely met him on a daily basis, he was unable to find them.
          After gathering useful information (like: who went where, the cost of
          living, the temperature, the price of a beer… <em>useful information</em>)
          amongst students with a Google Sheet which had a huge success, he decided
          to create a web platform to centralize and search through this data.
          GéoPonts (named after the name of our school) was born.
        </p>

        <img src="/img/projects/geoschool/oglogo.jpg" alt="The main map" />

        <p>
          Later, as the platform was gaining a lot of traction he decided to go
          fulltime if he could find a way to answer this need elsewhere. Another
          alumni of our school and I joined the project soon after. GéoPonts became
          GéoSchool. Today, we are deploying these platforms in french engineering
          school, helping the students building their professional project and
          puting them in relation with cool companies they didn’t know existed.
        </p>

        <img src="/img/projects/geoschool/contact.jpg" alt="The contact form" />

        <p>
          This is an ongoing project but so far it is one of the best working experience
          I ever had: I learnt a lot of things about data-driven product design,
          entrepreneurship, scaling and doing the architecture of a web platform,
          business strategy and even the basics of recruitment. On top of that,
          we are working in Station F, the world’s biggest startup campus created
          by Xavier Niel. This amazing place is the perfect one to meet fellow
          entrepreneurs and learn a lot about all the needed skills.
        </p>

        <img src="/img/projects/geoschool/team.jpg" alt="GéoSchool's team" />
      </section>
    </article>
  </View>
);
