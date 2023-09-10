import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://si.linkedin.com/in/samo-goljat-62b798167">
          <LinkedInIcon />
        </a>
        <a href="mailto:samo.goljat1@gmail.com">
          <EmailIcon />
        </a>
        <a href="https://github.com/samogoljat">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2023 Samo Goljat</p>
    </div>
  );
}

export default Footer;
