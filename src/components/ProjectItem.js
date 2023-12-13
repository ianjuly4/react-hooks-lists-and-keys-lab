import React from "react";


function ProjectItem({ name, about, technologies }) {
  //console.log(name)
  //console.log(about)
  const techName = technologies.map((technology)=>{
    return <span key={technology}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techName}</div>

    </div>
  );
}

export default ProjectItem;

