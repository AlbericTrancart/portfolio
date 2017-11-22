import React from 'react';
import DocumentTitle from 'react-document-title';

class Home extends React.Component {
  render = () => {
    return (
      <DocumentTitle title="Albéric Trancart">
        <div>
          <section>
            <h2>Bio</h2>
            <p className="mtop">
              Currently CTO @ GéoSchool, I studied civil engineering at the École Nationale des Ponts et Chaussées (ENPC). I am passionate about a variety of topics, including:
            </p>

            <ul>
              <li>Web development</li>
              <li>Space exploration</li>
              <li>Life hacks</li>
              <li>Civil engineering and architecture</li>
              <li>Heavy metal music</li>
              <li>Roleplaying</li>
              <li>Model painting</li>
              <li>… and more, depending on the mood!</li>
            </ul>

            <p>
              But most of all, I love learning! As a consequence, I will post about what I believe is worth sharing. <strong>If you have any question/feedback, DM me on <a className="Link" target="_blank" href="https://twitter.com/alberictrancart" title="Twitter">Twitter</a> or <a className="Link" target="_blank" href="https://www.linkedin.com/in/alberic-trancart" title="LinkedIn">LinkedIn</a></strong>.<br />
              <br />
              <em>All posts will be in english. I may publish a french version for the most critical topics or if there is a demand for it (don’t hesitate to correct my english if I made a mistake! I welcome any kind of feedback).</em>
            </p>
          </section>
          <section className="mtop-big">
            <h2>Projects</h2>
            <p className="mtop">TODO :)</p>
          </section>
          <section className="mtop-big">
            <h2>Posts</h2>
            <p className="mtop">Same here ;)</p>
          </section>
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
