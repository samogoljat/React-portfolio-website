import React from 'react';
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projectTitle">Projects</h2>
      <div className="projectList">
        {ProjectList.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            name={project.name}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
