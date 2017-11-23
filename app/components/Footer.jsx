import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.styl';

export default () => (
  <footer className="Footer fx-container padded text-center">
    {window.location.pathname !== '/' &&
      <Link to="/" className="Link">
        Back to the home page
      </Link>
    }

    <hr className="Divider" />
    Made with React, ❤ and other hipster technologies.<br />
    Design philosophy inspired by{' '}
    <a className="Footer__link Link" target="_blank" rel="noreferrer noopener" href="https://medium.com" title="Medium">medium.com</a>
    {' '}and{' '}
    <a className="Footer__link Link" target="_blank" rel="noreferrer noopener" href="http://bettermotherfuckingwebsite.com" title="This site is a better motherfucking website">bettermotherfuckingwebsite.com</a>.
  </footer>
);
