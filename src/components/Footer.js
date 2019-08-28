import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Footer = ({ location }) => {
  let backLink = "/";

  if (location.pathname.indexOf("/projects/") !== -1) {
    backLink = "/#projects";
  }
  if (location.pathname.match(/^\/\d{4}\/\d{2}\//)) {
    backLink = "/#posts";
  }
  return (
    <footer className="Footer fx-container padded text-center">
      {location.pathname !== "/" && (
        <Link to={backLink} className="Link">
          Back to the home page
        </Link>
      )}
      <hr className="Divider" />
      Made with React, ❤ and other hipster technologies.<br />
      Design philosophy inspired by{" "}
      <a
        className="Footer__link Link"
        target="_blank"
        rel="noreferrer noopener"
        href="https://medium.com"
        title="Medium"
      >
        medium.com
      </a>{" "}
      and{" "}
      <a
        className="Footer__link Link"
        target="_blank"
        rel="noreferrer noopener"
        href="http://bettermotherfuckingwebsite.com"
        title="This site is a better motherfucking website"
      >
        bettermotherfuckingwebsite.com
      </a>.
    </footer>
  );
};

Footer.propTypes = {
  location: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Footer;
