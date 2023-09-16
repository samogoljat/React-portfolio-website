import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import myImage from "../assets/me/me-modified.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Samo</h2>
        <img src={myImage} alt="Samo" className="profile-image" />
        <div className="prompt">
          <p>
            A software developer with a passion for learning and creating. :)
          </p>
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
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, BootStrap, Javascript, React, Typescript, JSON.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Bash, Python, basics of Java/C#/pgSQL, NodeJS, PostgreSQL,
              MariaDB, MongoDB.
            </span>
          </li>
          <li className="item">
            <h2>Devops</h2>
            <span>
              Network monitoring (Icinga2), Linux system administration, Bash,
              Ansible (YAML - playbooks), Docker, Virtualization (Vmware
              VSphere, Exsi), PostgreSQL, MariaDB, Wordpress administration,
              Apache, Nginx, basics of Networking (DNS, protocols, Ipv4, Ipv6,
              Firewall,topology).
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
