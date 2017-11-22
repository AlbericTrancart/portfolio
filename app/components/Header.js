import React from 'react';
import { Link } from 'react-router';

import profilePicture from 'img/profile.jpg';
import './Header.styl';

class Header extends React.Component {
  render = () => {
    return (
      <header className="Header">
        <div className="fx-container padded">
          <div className="fx-row fx-wrap fx-center-xs fx-middle-xs">
            <div className="fx-col-xs-6 fx-col-sm-2">
              <Link to="/" title="Back to the home page">
                <img className="Header__image" src={profilePicture} alt="My profile pic!" />
              </Link>
            </div>

            <div className="fx-col-xs-12 fx-col-sm">
              <h1>Albéric Trancart</h1>
              <p className="mtop">Developer, life hacker, space enthusiast and more!</p>
              <p className="Header__icons">
                <a className="Header__link Link" target="_blank" href="https://www.linkedin.com/in/alberic-trancart" title="LinkedIn">
                  <i className="fa fa-linkedin"></i>
                </a>&nbsp;
                <a className="Header__link Link" target="_blank" href="https://github.com/AlbericTrancart" title="GitHub">
                  <i className="fa fa-github"></i>
                </a>&nbsp;
                <a className="Header__link Link" target="_blank" href="https://twitter.com/alberictrancart" title="Twitter">
                  <i className="fa fa-twitter"></i>
                </a>&nbsp;
                <a className="Header__link Link" target="_blank" href="https://www.facebook.com/albetroisquarts" title="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>&nbsp;
                <a className="Header__link Link" target="_blank" href="https://www.instagram.com/alberictroisquarts" title="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
