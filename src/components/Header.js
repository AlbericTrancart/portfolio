import React from "react";
import { Link } from "gatsby";

export default () => (
  <header className="Header">
    <div className="fx-container padded">
      <div className="fx-row fx-wrap fx-center-xs fx-middle-xs">
        <div className="fx-col-xs-6 fx-col-sm-3">
          <Link to="/" title="Back to the home page">
            <img
              className="Header__image"
              src="/img/profile.jpg"
              alt="My profile pic!"
            />
          </Link>
        </div>

        <div className="fx-col-xs-12 fx-col-sm-9">
          <h1>Albéric Trancart</h1>
          <p className="mtop">
            Developer, life hacker, space enthusiast and more!
          </p>
          <p className="Header__icons">
            <a
              className="Header__link Link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/alberic-trancart"
              title="LinkedIn"
            >
              <i className="fa fa-linkedin" />
            </a>&nbsp;
            <a
              className="Header__link Link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/AlbericTrancart"
              title="GitHub"
            >
              <i className="fa fa-github" />
            </a>&nbsp;
            <a
              className="Header__link Link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://twitter.com/alberictrancart"
              title="Twitter"
            >
              <i className="fa fa-twitter" />
            </a>&nbsp;
            <a
              className="Header__link Link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/albetroisquarts"
              title="Facebook"
            >
              <i className="fa fa-facebook" />
            </a>&nbsp;
            <a
              className="Header__link Link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/alberictroisquarts"
              title="Instagram"
            >
              <i className="fa fa-instagram" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </header>
);
