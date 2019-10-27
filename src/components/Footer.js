import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="Footer fx-container padded text-center">
    <Link to="/" className="Link">
      Back to the home page
    </Link>
    <hr className="Divider" />
    Made with GatsbyJS, ❤ and other hipster technologies.
    <br />
    Design philosophy inspired by{" "}
    <a
      className="Footer__link Link"
      target="_blank"
      rel="noreferrer noopener"
      href="http://bettermotherfuckingwebsite.com"
      title="This site is a better motherfucking website"
    >
      bettermotherfuckingwebsite.com
    </a>
    .
  </footer>
);

export default Footer;
