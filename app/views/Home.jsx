import React from 'react';

import content from '~/content';
import PostPreview from '~/components/PostPreview.jsx';
import ProjectPreview from '~/components/ProjectPreview.jsx';
import View from '~/components/View.jsx';

export default () => {
  // Clone arrays to not reverse original list
  const posts = content.posts.slice(0).reverse();
  const projects = content.projects.slice(0).reverse();

  return (
    <View>
      <section>
        <h2>Bio</h2>
        <p className="mtop">
          Currently CTO @ GéoSchool, I studied civil engineering at the École
          Nationale des Ponts et Chaussées (ENPC). I am passionate about a
          variety of topics, including:
        </p>

        <ul>
          <li>Web development</li>
          <li>Space exploration</li>
          <li>Life hacks</li>
          <li>Civil engineering and architecture</li>
          <li>Heavy metal music</li>
          <li>Theatre</li>
          <li>Roleplaying</li>
          <li>Model painting</li>
          <li>… and more, depending on the mood!</li>
        </ul>

        <p>
          But most of all, I love learning! As a consequence, I will post about what I believe is worth sharing. <strong>If you have any question or feedback, DM me on <a className="Link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/alberictrancart" title="Twitter">Twitter</a> or <a className="Link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alberic-trancart" title="LinkedIn">LinkedIn</a></strong>.<br />
          <br />
          <em>
            All posts will be in english. I may publish a french version for the
            most critical topics or if there is a demand for it (don’t hesitate
            to correct my english if I made a mistake! I welcome any kind of
            feedback).
          </em>
        </p>
      </section>
      <section className="mtop-big">
        <h2>Projects</h2>

        <div className="fx-row fx-wrap mtop">
          {projects.map(value => (
            <ProjectPreview
              key={value.id}
              data={value}
              className="fx-col-xs-12 fx-col-sm-6"
            />
          ))}
        </div>
      </section>
      <section className="mtop-big">
        <h2>Posts</h2>
        {posts.map(value => (
          <PostPreview
            key={value.id}
            data={value}
            className="mtop"
            endDivider={value.id !== 1}
          />
        ))}
      </section>
    </View>
  );
};
