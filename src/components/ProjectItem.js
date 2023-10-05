import React from "react";

function ProjectItem({ image, name, url }) {
  const navigateToProject = () => {
    // Check if url is defined and is a non-empty string.
    if(url && typeof url === 'string' && url.trim() !== "") {
      window.location.href = url;
    } else {
      console.error(`Invalid URL for project: ${name}`);
      // Handle invalid URL case (e.g., alert or a message to user)
    }
  };

  return (
    <div
      className="projectItem"
      onClick={navigateToProject}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
