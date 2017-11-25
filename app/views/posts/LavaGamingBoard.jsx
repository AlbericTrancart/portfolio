import React from 'react';

import View from '~/components/View.jsx';
import content from '~/content';
import PostHeader from '~/components/PostHeader.jsx';

const imgdir = '/img/posts/lavagamingboard/';

export default () => (
  <View>
    <article>
      <PostHeader data={content.posts[2]} mainPage />

      <section className="Content">
        <p>
          This summer as I had some free time I decided to build what my collection
          of minis missed: a decent-looking gaming board. Having already played with
          full-painted armies on great gaming boards, I knew that’s what I lacked to
          change cool battles into awesome battles.
        </p>

        <h2>What I needed</h2>

        <p>Here are some criteria I listed in order to plan this:</p>

        <ul>
          <li>The table can be reconfigured easily to vary the challenges</li>
          <li>The table is easy to store</li>
          <li>
            The table must be bigger than a standard one (4’x6′) and can be
            extended easily (I love Apocalypse-sized games)
          </li>
          <li>
            The table should cost less than 150€ (about $165). Games Workshop’s
            Citadel Gaming Board costs 260€ (or $330)
          </li>
          <li>
            The table must be done in less than two weeks. I knew I would not finish
            it otherwise. Time-boxing is an important constraint I apply on most of my projects.
          </li>
        </ul>

        <p>Before diving into the “How” part, let’s tease the result with some pics :</p>

        <img src={`${imgdir}image1.jpg`} alt="The table without minis" />
        <img src={`${imgdir}image2.jpg`} alt="The table with minis" />
      </section>

      <section className="Content">
        <h2>How I did it</h2>

        <h3>Planning the modules</h3>

        <p>
          First of all, I chose a lava theme. It goes well with my armies (Chaos
          and Necrons) and I think that a lava table can provide some challenges
          while being enjoyable to play on. However, I believe the techniques used
          here can be used for other themes – lava can be ice on a frozen ground,
          or rivers on an arid planet, or toxic streams on a wasted land.
        </p>

        <p>
          Taking the criteria into account, it was obvious that the table had to be
          modular. I decided to go with 30cm squares (about 1 foot): they are easy
          to store and provide a lot of possible configurations. Then I sketched the
          modules on a paper sheet to test some configurations and to balance the
          surface occupied by the lava rivers.
        </p>

        <figure>
          <img src={`${imgdir}image3.jpg`} alt="The plan" />
          <figcaption>The plan</figcaption>
        </figure>

        <p>
          There are 32 squares covering a table of 2.4m by 1.2m (8′ by 4′).
          21 squares are with lava, 11 without. I chose to make lava riverbeds
          off-center in order to allow more exotic modules.
        </p>

        <h3>Gathering the materials</h3>

        <ul>
          <li>
            Insulation foam. It came in 60cmx125cm (2’x8’) sheets, so I got 6 of
            them just to be on the safe side: 18€
          </li>
          <li>30cm (1′) pre-cut plywood squares: 19€</li>
          <li>1 tube of subfloor glue: 8€</li>
          <li>2 tubes of ACRYLIC latex caulking for the lava: 10€</li>
          <li>1kg of plaster: 3€</li>
          <li>Some play yard sand: free</li>
          <li>0,75L of cheap white acrylic craft paint: 8€</li>
          <li>Yellow and red cheap acrylic dyes: 8€</li>
          <li>Black latex wall paint: 40€. I used 1,75L of it for a 1,2mx2,4m (4’x8′) surface.</li>
          <li>Some tools, a caulking gun, a plastic tarp, sandpaper… things that I already had</li>
        </ul>

        <p><strong>TOTAL:</strong> 114€ (about $125)</p>

        <img src={`${imgdir}image4.jpg`} alt="The materials" />

        <h3>Designing the modules</h3>

        <p>
          8 modules can be built from each foam sheet. Using a plywood square as
          a guide, I cut through the foam with a very sharp knife.
        </p>

        <img src={`${imgdir}image5.jpg`} alt="8 modules per foam sheet" />

        <p>After that I used sandpaper to smooth the edges of the modules.</p>

        <img src={`${imgdir}image6.jpg`} alt="Smoothing the edges with sandpaper" />

        <p>
          Following the plan, I drawn the lava channels and I identified
          the modules. I used a simple template (the blue sheet on the right)
          to make sure the lava channels would face each other properly.
        </p>

        <img src={`${imgdir}image7.jpg`} alt="Templating the modules" />

        <p>
          Then I cut the lava channels with the sharp knife. To randomize the
          edges of the lava channels, I took some scissors and I cut randomly in
          the foam only using the tip of the scissors. After sandpaper smoothing,
          I got the look and feel that I wanted.
        </p>

        <img src={`${imgdir}image8.jpg`} alt="Cutting the lava channels" />

        <p>
          Time to glue the foam to the plywood! Using the caulking gun to make
          sure the edges have some glue. This is very funny.
        </p>

        <img src={`${imgdir}image9.jpg`} alt="Gluing the foam" />

        <p>Dry time: one night.</p>

        <img src={`${imgdir}image10.jpg`} alt="Waiting for the glue to dry" />

        <p>After that, checking that the modules fitted in properly before continuing.</p>

        <img src={`${imgdir}image11.jpg`} alt="Checking that the modules fit" />

        <h3>Customizing the modules</h3>

        <p>
          I made some custom modules. Two of them were designed to represent some
          part of the soil melting down (or cooling down). I burned the foam with
          a match (beware, emanations from burning foam are toxic) and then cut
          the foam with the scissors.
        </p>

        <img src={`${imgdir}image12.jpg`} alt="Melting soil modules" />

        <p>
          For two other modules I made some rifts with the same scissors-technique,
          but on a larger scale.
        </p>

        <img src={`${imgdir}image13.jpg`} alt="Rifts modules" />

        <p>
          I also wanted really special modules. To make these, I used the remaining
          foam to build a mountain in the corner/a volcano in the center of another one.
        </p>

        <img src={`${imgdir}image14.jpg`} alt="The mountain module" />

        <p>
          Then I covered it with paper mache (that’s where the plaster has a
          role to play) to get a smooth and hard surface.
        </p>

        <img src={`${imgdir}image15.jpg`} alt="The volcano module" />

        <h3>Adding some scenery</h3>

        <p>
          As I waited the paper mache to dry, I cut bases in a sheet of hardboard.
          I already had an Imperial city kit, but I never used it before, so it
          will be put to great use now.
        </p>

        <img src={`${imgdir}image16.jpg`} alt="Using some ruins" />

        <p>
          From the old buildings I never used, I took some of the floor tiles and
          I made five bridges – 2 for infantry squads, 2 large enough for a Rhino
          to cross and 1 capable of handling a Land Raider.
        </p>

        <img src={`${imgdir}image17.jpg`} alt="Making bridges" />

        <p>
          I sprayed them with a layer of chaos black then I took the white spray
          and used it at a high angle from above.
        </p>

        <img src={`${imgdir}image18.jpg`} alt="Basing the scenery" />

        <p>
          After that, I applied a brown wash on the walls and I painted the details
          with brown and bronze colors. I love speed painting techniques and here
          I was satisfied by the ruins painted in less than 20 minutes.
        </p>

        <img src={`${imgdir}image19.jpg`} alt="Painting the scenery" />

        <h3>Time for some texturing</h3>

        <p>
          Here is the trick of this whole project: using the black latex wall paint.
          It behaves as a glue, a base layer and a colour layer at the same time.
          The goal is to seal the sand between two layers of paint – and believe me,
          it works very well. So first of all, let’s apply a generous first coat.
        </p>

        <img src={`${imgdir}image20.jpg`} alt="Coating the modules with latex paint" />

        <p>
          I poored the sand on the fresh paint and let it dried 4 hours – enough
          time for the sand to be “glued” by the paint to the foam.
        </p>

        <img src={`${imgdir}image21.jpg`} alt="Applying sand" />

        <p>
          Working with modules is a real pleasure because you can texture one at
          a time, and when you finish the last module the first one is dry.
        </p>

        <img src={`${imgdir}image22.jpg`} alt="All the modules drying" />

        <p>I got all the loose sand off, then I brushed another thick coat of paint.</p>

        <img src={`${imgdir}image23.jpg`} alt="Adding another coat of paint" />

        <p>
          This time I waited one night just to be on the safe side. After that I
          mixed the black paint and the white acrylic paint, and I drybrushed
          this grey over the modules. Then I took pure white and did a very light
          drybrushing on the small “rocks” and the edges of the lava channels.
        </p>

        <img src={`${imgdir}image24.jpg`} alt="Painting the sand texture" />

        <p>
          For the “meltdown” soil, I simply brushed some orange paint (made with
          the white acrylic paint and the red and yellow dyes).
        </p>

        <img src={`${imgdir}image25.jpg`} alt="Painting the molten soil modules" />

        <p>
          For these modules I used the same technique than for the ruins: I took
          all the foam scrap I got and mixed them into the sand during the texturing phase.
        </p>

        <img src={`${imgdir}image26.jpg`} alt="Texturing the ruins" />

        <h3>Adding the lava</h3>

        <p>
          With the help of a medium sized paintbrush, I spread a coat of caulking
          into the lava channels.
        </p>

        <img src={`${imgdir}image27.jpg`} alt="Adding the lava texture" />

        <p>
          Dry time: 24 hours (that’s the greatest waiting time of the project so
          I filled it with scenery painting for instance).
        </p>

        <img src={`${imgdir}image28.jpg`} alt="Waiting for the caulking to dry" />

        <p>I also added a Star Wars easter egg ?</p>

        <img src={`${imgdir}image29.jpg`} alt="Private Skywalker trying to swim in lava" />

        <p>The volcano took 48 hours to dry because of the thickness of the coat.</p>

        <img src={`${imgdir}image30.jpg`} alt="The volcano is drying" />

        <p>I covered this lava with yellow paint, leaving white spots in some places.</p>

        <img src={`${imgdir}image31.jpg`} alt="Painting the lava, yellow" />

        <p>
          I brushed some orange and red paint, and I also brushed them on the
          sides of the channels.
        </p>

        <img src={`${imgdir}image32.jpg`} alt="Painting the lava, orange" />

        <p>I finished with a drybrush of black paint on the topmost part of the lava.</p>

        <img src={`${imgdir}image33.jpg`} alt="Painting the lava, finish" />
      </section>

      <section className="Content">
        <h2>The table</h2>

        <p>Here is the table with a lot of minis so you can grasp how it feels to play on it.</p>

        <img src={`${imgdir}image34.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image35.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image36.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image37.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image38.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image39.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image40.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image41.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image42.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image43.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image44.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image45.jpg`} alt="Finished table with minis on it" />
        <img src={`${imgdir}image46.jpg`} alt="Finished table with minis on it" />
      </section>

      <section className="Content">
        <h2>Feedback &amp; conclusion</h2>

        <p>
          I have played five battles on his table and it’s great. I feared that
          the lava would restrain movements but it’s not doing it too much. With
          friends we count the lava as “dangerously impassable terrain”: you make
          dangerous terrain tests while crossing but you can’t end up your movement
          in the lava. It is more a strategic challenge than a real constraint.
          In addition, you have the bridges, which are of strategic interest,
          but not by much.
        </p>

        <p>
          Looking back at the criteria I was satisfied with the table I made.
          If there is one word to describe the success of the project, it is “speed”.
          I got friends who began building a gaming board but who never finished
          it because of a lack of time/motivation (and I think there are similar
          stories across the Internet). Time-boxing the project in one full week
          (about 90 hours of work) forced me to simplify the conception and acted
          as a motivation because I saw the advancement progress really fast.
        </p>

        <p>
          That’s an advice I give to all players who are little bothered by the
          master quality of the paint but have tons of unfinished models: optimize
          your processes so that you can paint rapidly. By simplifying the colour
          schemes and techniques I got good-looking armies in record time. But I
          think that will be for another blog post?
        </p>

        <h3>Sources and inspiration</h3>

        <p>
          <a className="Link" href="http://www.dakkadakka.com/dakkaforum/posts/list/243963.page" target="_blank" rel="noreferrer noopener">
            How to build a lava field gaming board
          </a>
        </p>
      </section>
    </article>
  </View>
);
