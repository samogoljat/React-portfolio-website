import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Samo</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
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
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, BootStrap, Javascript, JSON.</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>PostgreSQL, MariaDB, FireBase.</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Python, TypeScript, Bash, Ansible (Yaml).
            </span>
          </li>
          <li className="item">
            <h2>Sys engineer</h2>
            <span>
              Linux system administration, Bash script, Ansible, Docker Network
              monitoring (Icinga 2), Virtualization (Vmware).
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
