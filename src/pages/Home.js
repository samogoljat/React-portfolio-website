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
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
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
              JavaScript, Java, Python, TypeScript, Bash, Ansible (Yaml)
            </span>
          </li>
          <li className="item">
            <h2>Sys engineer</h2>
            <span>
              Ansible, Docker, Network monitoring (Icinga 2), Linux system
              administration
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
