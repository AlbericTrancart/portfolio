import React from 'react';

class Footer extends React.Component {
  render = () => {
    return (
      <footer className="Footer fx-container padded mtop-big text-center">
        <hr className="Divider"/>
        Made with React, ❤ and other hipster technologies.<br />
        Design philosophy inspired by <a className="Footer__link Link" target="_blank" href="https://medium.com" title="Medium">medium.com</a> and <a className="Footer__link Link" target="_blank" href="http://bettermotherfuckingwebsite.com" title="This site is a better motherfucking website">bettermotherfuckingwebsite.com</a>.
      </footer>
    );
  }
}

export default Footer;
